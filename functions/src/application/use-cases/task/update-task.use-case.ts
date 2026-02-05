import { TaskRepository } from "../../../domain/repositories/task.repository";
import { UpdateTaskDTO } from "../../dto/update-task.dto";

export class UpdateTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(taskId: string, dto: UpdateTaskDTO) {

    const task = await this.taskRepo.findById(taskId);

    if (!task) {
      throw new Error("Task not found");
    }

    if (dto.title !== undefined) {
      task.title = dto.title;
    }

    if (dto.description !== undefined) {
      task.description = dto.description;
    }

    if (dto.completed !== undefined) {
      task.completed = dto.completed;
    }

    return  this.taskRepo.update(task);
  }
  }