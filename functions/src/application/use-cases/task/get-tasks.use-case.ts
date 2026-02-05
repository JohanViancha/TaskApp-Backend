import { Task } from "../../../domain/entities/task.entity";
import { TaskRepository } from "../../../domain/repositories/task.repository";
import { GetTasksDTO } from "../../dto/get-tasks.dto";

export class GetTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(dto: GetTasksDTO): Promise<Task[]> {
    return this.taskRepo.findByUser(dto.userId);
  }
}
