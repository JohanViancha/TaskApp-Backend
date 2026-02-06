import { Request, Response } from "express";
import { GetTaskUseCase } from "../../application/use-cases/task/get-tasks.use-case";
import { CreateTaskUseCase } from "../../application/use-cases/task/create-task.use-case";
import { CreateTaskDTO } from "../../application/dto/create-task.dto";
import { DeleteTaskUseCase } from "../../application/use-cases/task/delete-task.use-case";
import { UpdateTaskDTO } from "../../application/dto/update-task.dto";
import { UpdateTaskUseCase } from "../../application/use-cases/task/update-task.use-case";
import { v4 as uuidv4 } from "uuid";

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

    return res.json(tasks);
  };

  createTask = async (req: Request, res: Response) => {
    const newTask: CreateTaskDTO = req.body;
    const idTask = uuidv4();
    const task = await this.createTaskUseCase.execute({
      ...newTask,
      id: idTask,
    });
    return res.json(task);
  };

  updateTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const task: UpdateTaskDTO = req.body;

    const tasks = await this.updateTaskUseCase.execute(taskId, task);

    return res.json(tasks);
  };

  deleteTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;

    const tasks = await this.deleteTaskUseCase.execute({
      taskId,
    });

    return res.json(tasks);
  };
}
