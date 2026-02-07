import { Router } from "express";
import { UserRoutes } from "./user/router";
import { TaskRoutes } from "./task/router";
import { AuthRoutes } from "./auth/router";
import { Dependencies } from "../boostrap/depdencies";

export class AppRoutes {
  static create({ jwtService }: Dependencies): Router {
    const router = Router();

    router.use("/tasks", TaskRoutes.create({ jwtService }));
    router.use("/users", UserRoutes.create({ jwtService }));
    router.use("/auth", AuthRoutes.create({ jwtService }));

    return router;
  }
}
