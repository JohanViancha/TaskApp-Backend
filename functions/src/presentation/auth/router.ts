import { Router } from "express";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";
import { Dependencies } from "../../boostrap/depdencies";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { createAuthMiddleware } from "../middlewares/auth.middleware";
import { AuthController } from "./controller";

export class AuthRoutes {
  static create({ jwtService }: Dependencies): Router {
    const router = Router();
    const authMiddleware = createAuthMiddleware(jwtService);

    const userRepository = new FirestoreUserRepository();
    const login = new LoginUserUseCase(userRepository, jwtService);
    const authController = new AuthController(login);

    router.get("/logout", authController.logout);
    router.get("/login", authController.login);
    router.get("/me", authMiddleware, authController.me);

    return router;
  }
}
