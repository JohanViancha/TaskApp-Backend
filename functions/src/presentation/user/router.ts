import { Router } from "express";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const taskController = new UserController();

    router.get("/", taskController.validateUser);
    router.post("/", taskController.createUser);

    return router;
  }
}
