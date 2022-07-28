import * as functions from 'firebase-functions';

import { startGame } from '@endpoints';

exports.startGame = functions
  .region('europe-west1')
  .https.onRequest(startGame.handler);
