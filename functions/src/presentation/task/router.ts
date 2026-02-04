import { Router } from "express";
import { TaskController } from "./controller";

export class TaskRoutes {
  static get routes(): Router {
    const router = Router();

    const taskController = new TaskController();

    router.get("/", taskController.getTasks);
    router.post("/", taskController.createTask);
    router.put("/:id", taskController.updateTask)
    router.delete("/:id", taskController.deleteTask)

    return router;
  }
}
