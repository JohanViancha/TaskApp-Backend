import { TaskRepository } from "../../../domain/repositories/task.repository";
import { TaskIdDto } from "../../dto/task-id.dto";

export class DeleteTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute({ taskId }: TaskIdDto) {
    return this.taskRepo.delete(taskId);
  }
}
