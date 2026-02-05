export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public completed: boolean,
    public readonly userId: string,
    public readonly createdAt: Date,
  ) {}

  static create(
    id: string,
    title: string,
    descripcion: string,
    userId: string,
    createdAt: Date,
  ) {
    new Task(id, title, descripcion, false, userId, createdAt);
  }

  update(title: string, descripcion: string, completed: boolean) {
    this.title = title;
    this.description = descripcion;
    this.completed = completed;
  }
}
