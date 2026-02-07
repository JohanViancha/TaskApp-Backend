import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../infrastructure/services/jwt.service";

export const createAuthMiddleware = (jwtService: JwtService) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const token = req.cookies.jwtToken;

      if (!token) {
        res.status(401).json({
          message: "No autorizado",
        });
        return;
      }

      const payload = jwtService.verify(token);

      req.user = payload;

      next();
    } catch {
      res.status(401).json({
        message: "Token inválido",
      });
    }
  };
};