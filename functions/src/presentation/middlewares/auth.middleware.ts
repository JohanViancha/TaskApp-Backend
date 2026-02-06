import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../infrastructure/services/jwt.service";

const jwtService = new JwtService();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token = req.cookies.jwtToken;

    if (!token) {
      res.status(401).json({
        message: "No autorizado",
      });
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
