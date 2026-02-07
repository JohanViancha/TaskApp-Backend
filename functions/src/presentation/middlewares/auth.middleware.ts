import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../infrastructure/services/jwt.service";

export const createAuthMiddleware = (jwtService: JwtService) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader)
        return res.status(401).json({ message: "No token provided" });

      const [scheme, token] = authHeader.split(" ");

      if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format" });
      }

      const payload = jwtService.verify(token);

      req.user = { id: payload.id, email: payload.email };
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};
