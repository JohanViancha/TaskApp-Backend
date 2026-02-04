export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public completed: boolean,
    public readonly userId: string,
    public readonly createdAt: Date
  ) {}

  complete() {
    this.completed = true;
  }

  markAsPending() {
    this.completed = false;
  }
}
