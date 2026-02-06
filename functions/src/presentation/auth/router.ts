import { Router } from "express";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";
import { FirestoreUserRepository } from "../../infrastructure/repositories/firestore-user.repository";
import { JwtService } from "../../infrastructure/services/jwt.service";
import { AuthController } from "./controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = new FirestoreUserRepository();
    const jwtService = new JwtService();
    const login = new LoginUserUseCase(userRepository, jwtService);
    const authController = new AuthController(login);

    router.get("/login", authController.login);
    router.get("/me", authMiddleware, authController.me);

    return router;
  }
}
