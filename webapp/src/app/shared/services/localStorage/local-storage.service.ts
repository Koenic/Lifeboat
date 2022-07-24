import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const store = new Storage();
await store.create();

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get(key): Promise<unknown> {
    return store.get(key);
  }

  set(key, value): Promise<unknown> {
    return store.set(key, value);
  }
}
