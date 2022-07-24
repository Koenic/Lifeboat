import { Injectable } from '@angular/core';
import { Database } from 'firebase/database';
import { FirebaseService } from '../firebase/firebase.service';
import { ref, set, get, onValue, remove } from 'firebase/database';
import type { User } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database: Database;

  constructor(private firebase: FirebaseService) {
    this.database = firebase.database;
  }

  public write(dbPath: string, user: User) {
    return set(ref(this.database, dbPath), {
      ...user,
    });
  }

  public get(dbPath: string): Promise<unknown> {
    return new Promise<User>((res, rej) => {
      onValue(
        ref(this.database, dbPath),
        (snapshot) => {
          res(snapshot.val());
        },
        {
          onlyOnce: true,
        }
      );
    });
  }

  public remove(dbPath: string): Promise<void> {
    return remove(ref(this.database, dbPath));
  }
}
