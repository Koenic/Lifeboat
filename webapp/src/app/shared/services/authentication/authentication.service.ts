import { Injectable } from '@angular/core';
import {
  Auth,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { DatabaseService } from '../database/database.service';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public userObserver = new Subject<User>();

  private auth: Auth;
  private user;

  constructor(
    private firebase: FirebaseService,
    private database: DatabaseService
  ) {
    this.auth = this.firebase.auth;

    onAuthStateChanged(this.auth, (firebaseUser) => {
      if (firebaseUser) {
        this.database.get(this.getDbPath(firebaseUser.uid)).then((user) => {
          this.user = user;
          this.userObserver.next(this.user);
        });
      } else {
        this.user = undefined;
        this.userObserver.next(this.user);
      }
    });
  }

  async signIn(username): Promise<User> {
    await signInAnonymously(this.auth);

    if (this.auth.currentUser.uid) {
      await this.database.write(this.getDbPath(this.auth.currentUser.uid), {
        username,
        uid: this.auth.currentUser.uid,
      });
    }

    this.user = {
      username,
      uid: this.auth.currentUser.uid,
    };

    return this.user;
  }

  async signOut() {
    if (this.auth.currentUser) {
      await this.database.remove(this.getDbPath(this.auth.currentUser.uid));
      return signOut(this.auth);
    }
  }

  getUser(): Observable<User> {
    return new Observable<User>((observer) => {
      if (this.user) {
        observer.next(this.user);
        observer.complete();
      }

      if (this.auth.currentUser?.uid) {
        this.database
          .get(this.getDbPath(this.auth.currentUser.uid))
          .then((user) => {
            this.user = user;
            observer.next(this.user);
            observer.complete();
          });
      }
    });
  }

  private getDbPath(uid): string {
    return `users/${uid}`;
  }
}

export type User = {
  username: string;
  uid: string;
};
