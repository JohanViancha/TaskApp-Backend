import { Router } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = new FirestoreUserRepository();
    const createUser = new CreateUserUseCase(userRepository);
    const userController = new UserController(createUser);

    router.post("/", userController.createUser);

    return router;
  }
}
