import { Router } from "express";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { JwtService } from "../../infrastructure/services/jwt.service";
import { AuthController } from "./controller";
import { createAuthMiddleware } from "../middlewares/auth.middleware";
import { Dependencies } from "../../boostrap/depdencies";

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
