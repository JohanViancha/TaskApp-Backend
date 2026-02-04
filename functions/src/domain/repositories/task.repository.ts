import { Task } from '../entities/task.entity';

export interface TaskRepository {
  findByUser(userId: string): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<void>;
  delete(id: string): Promise<void>;
}
