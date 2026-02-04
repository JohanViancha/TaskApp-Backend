export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly createdAt: Date
  ) {}

  static create(id: string, email: string) {
    return new User(id, email, new Date());
  }
}
