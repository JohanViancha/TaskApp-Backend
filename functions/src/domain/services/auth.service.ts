import bcrypt from "bcrypt";

export class AuthService {
  async hash(email: string) {
    return bcrypt.hash(email, 10);
  }

  async compare(email: string, hash: string) {
    return bcrypt.compare(email, hash);
  }
}
