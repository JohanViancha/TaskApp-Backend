import { Router } from "express";
import { CreateTaskUseCase } from "../../application/use-cases/task/create-task.use-case";
import { DeleteTaskUseCase } from "../../application/use-cases/task/delete-task.use-case";
import { GetTaskUseCase } from "../../application/use-cases/task/get-tasks.use-case";
import { UpdateTaskUseCase } from "../../application/use-cases/task/update-task.use-case";
import { FirestoreTaskRepository } from "../../infrastructure/repositories/firestore-task.repository";
import { TaskController } from "./controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export class TaskRoutes {
  static get routes(): Router {
    const router = Router();

    const taskRepository = new FirestoreTaskRepository();
    const createTask = new CreateTaskUseCase(taskRepository);
    const getTask = new GetTaskUseCase(taskRepository);
    const deleteTask = new DeleteTaskUseCase(taskRepository);
    const updateTask = new UpdateTaskUseCase(taskRepository);
    const taskController = new TaskController(
      getTask,
      createTask,
      deleteTask,
      updateTask,
    );

    router.get("/", authMiddleware, taskController.getTasks);
    router.post("/", authMiddleware, taskController.createTask);
    router.put("/:taskId", authMiddleware, taskController.updateTask);
    router.delete("/:taskId", authMiddleware, taskController.deleteTask);

    return router;
  }
}
