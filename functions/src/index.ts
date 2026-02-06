import * as functions from 'firebase-functions';
import app from './presentation/server';
import dotenv from 'dotenv';

dotenv.config();

export const api = functions.https.onRequest(app);
