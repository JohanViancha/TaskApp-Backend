import { Task } from "../../../domain/entities/task.entity";
import { TaskRepository } from "../../../domain/repositories/task.repository";
import { CreateTaskDTO } from "../../dto/create-task.dto";

export class CreateTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(dto: CreateTaskDTO) {
    const task = new Task(
      dto.id,
      dto.title,
      dto.description,
      false,
      dto.userId,
      new Date(),
    );
    
    return this.taskRepo.create(task);
  }
}
