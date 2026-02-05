import { Request, Response } from "express";
import { GetTaskUseCase } from "../../application/use-cases/task/get-tasks.use-case";
import { CreateTaskUseCase } from "../../application/use-cases/task/create-task.use-case";
import { CreateTaskDTO } from "../../application/dto/create-task.dto";
import { DeleteTaskUseCase } from "../../application/use-cases/task/delete-task.use-case";
import { UpdateTaskDTO } from "../../application/dto/update-task.dto";
import { UpdateTaskUseCase } from "../../application/use-cases/task/update-task.use-case";

export class TaskController {
  constructor(
    private getTaskByUserUseCase: GetTaskUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private updateTaskUseCase: UpdateTaskUseCase,
  ) {}

  getTasks = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const tasks = await this.getTaskByUserUseCase.execute({
      userId,
    });

    res.json(tasks);
  };

  createTask = async (req: Request, res: Response) => {
    const user: CreateTaskDTO = req.body;

    const task = await this.createTaskUseCase.execute(user);
    return res.json(task);
  };

  updateTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const task: UpdateTaskDTO = req.body;

    const tasks = await this.updateTaskUseCase.execute(taskId, task);

    res.json(tasks);
  };

  deleteTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;

    const tasks = await this.deleteTaskUseCase.execute({
      taskId,
    });

    res.json(tasks);
  };
}
