import * as functions from 'firebase-functions';
import app from './presentation/server';

export const api = functions.https.onRequest(app);
