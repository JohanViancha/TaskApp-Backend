import dotenv from 'dotenv';
import * as functions from 'firebase-functions';

dotenv.config();

export const api = functions.https.onRequest((req, res) => {
  res.send("¡Funciona!");
});
