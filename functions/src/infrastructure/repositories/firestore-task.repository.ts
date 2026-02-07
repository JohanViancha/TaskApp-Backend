import { TaskRepository } from "../../domain/repositories/task.repository";
import { Task } from "../../domain/entities/task.entity";
import { db } from "../firestore/firestore.client";

export class FirestoreTaskRepository implements TaskRepository {
  private collection = db.collection("tasks");

  async findByUser(userId: string): Promise<Task[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .orderBy("createdAt", "asc")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return new Task(
        doc.id,
        data.title,
        data.description,
        data.completed,
        data.userId,
        data.createdAt.toDate(),
      );
    });
  }

  async findById(id: string): Promise<Task | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;

    const data = doc.data()!;
    return new Task(
      doc.id,
      data.title,
      data.description,
      data.completed,
      data.userId,
      data.createdAt.toDate(),
    );
  }

  async create(task: Task): Promise<Task> {
    await this.collection.doc(task.id).set({
      title: task.title,
      description: task.description,
      completed: task.completed,
      userId: task.userId,
      createdAt: task.createdAt,
    });

    return task;
  }

  async update(task: Task): Promise<Task> {
    await this.collection.doc(task.id).update({
      title: task.title,
      description: task.description,
      completed: task.completed,
    });
    return task;
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
