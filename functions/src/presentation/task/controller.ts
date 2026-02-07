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
    try {
      const userId = req.user?.id;

      const tasks = await this.getTaskByUserUseCase.execute({ userId });

      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo tareas" });
    }
  };

  createTask = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          error: true,
          message: "Usuario no autenticado",
        });
      }

      const { title } = req.body as CreateTaskDTO;

      if (!title) {
        return res.status(400).json({
          error: true,
          message: 'El campo "Titulo" es obligatorio',
        });
      }

      const idTask = uuidv4();

      const task = await this.createTaskUseCase.execute({
        ...req.body,
        userId: userId,
        id: idTask,
      });

      return res.status(201).json(task);
    } catch (error) {
      console.error("Error creando tarea:", error);
      return res.status(500).json({
        error: true,
        message: "Error al crear la tarea",
      });
    }
  };

  updateTask = async (req: Request, res: Response) => {
    try {
      const { taskId } = req.params;
      const task: UpdateTaskDTO = req.body;

      const tasks = await this.updateTaskUseCase.execute(taskId, task);

      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error al editar la tarea" });
    }
  };

  deleteTask = async (req: Request, res: Response) => {
    try {
      const { taskId } = req.params;

      const tasks = await this.deleteTaskUseCase.execute({
        taskId,
      });

      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error al crear la tarea" });
    }
  };
}
