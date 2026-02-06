import jwt from "jsonwebtoken";
import { defineSecret } from "firebase-functions/params";

const JWT_SECRET = defineSecret("JWT_SECRET");

export interface JwtPayload {
  id: string;
  email: string;
}

export class JwtService {
  sign(payload: JwtPayload) {
    const secret = JWT_SECRET.value();
    return jwt.sign(payload, secret, {
      expiresIn: "1h",
    });
  }

  verify(token: string): JwtPayload {
    const secret = JWT_SECRET.value();
    return jwt.verify(token, secret) as JwtPayload;
  }
}
