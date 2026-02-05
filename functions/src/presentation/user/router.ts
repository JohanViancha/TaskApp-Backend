import { Router } from "express";
import { UserController } from "./controller";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { FindUserByEmailUseCase } from "../../application/use-cases/user/find-by-email.use-case";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = new FirestoreUserRepository();
    const createUser = new CreateUserUseCase(userRepository);
    const getUserByEmail = new FindUserByEmailUseCase(userRepository);
    const userController = new UserController(createUser, getUserByEmail);

    router.get("/", userController.validateUser);
    router.post("/", userController.createUser);

    return router;
  }
}
