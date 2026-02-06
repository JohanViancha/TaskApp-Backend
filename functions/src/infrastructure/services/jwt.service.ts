import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  email: string;
}

export class JwtService {
  private readonly secret = process.env.JWT_SECRET || "secret";

  sign(payload: JwtPayload) {
    return jwt.sign(payload, this.secret, {
      expiresIn: "1h",
    });
  }

  verify(token: string): JwtPayload {
    return jwt.verify(token, this.secret) as JwtPayload;
  }
}
