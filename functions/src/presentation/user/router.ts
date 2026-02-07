import { Router } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { UserController } from "./controller";
import { Dependencies } from "../../boostrap/depdencies";

export class UserRoutes {
  static create({ jwtService }: Dependencies): Router {
    const router = Router();

    const userRepository = new FirestoreUserRepository();

    const createUser = new CreateUserUseCase(userRepository, jwtService);
    const userController = new UserController(createUser);

    router.post("/", userController.createUser);

    return router;
  }
}
