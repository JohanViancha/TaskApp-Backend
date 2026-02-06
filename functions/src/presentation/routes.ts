import { Router } from "express";
import { UserRoutes } from "./user/router";
import { TaskRoutes } from "./task/router";
import { AuthRoutes } from "./auth/router";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/tasks", TaskRoutes.routes);
    router.use("/users", UserRoutes.routes);
    router.use("/auth", AuthRoutes.routes);

    return router;
  }
}
