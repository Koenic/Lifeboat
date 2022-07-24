import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { Database, getDatabase } from 'firebase/database';

import firebaseConfig from 'src/config/firebase.config.json';
import { Auth, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;
  analytics: Analytics;
  database: Database;
  auth: Auth;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.database = getDatabase(this.app);
    this.auth = getAuth(this.app);
  }
}
