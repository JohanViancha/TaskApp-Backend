import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { AppRoutes } from "./routes";
import { Dependencies } from "../boostrap/depdencies";


export const createServer = ({ jwtService }: Dependencies) => {
  const app = express();

  app.use(
    cors({
      origin: "https://taskapp-1ffe0.web.app",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    }),
  );

  app.use(express.json());
  app.use(cookieParser());

  app.use(AppRoutes.create({ jwtService }));

  return app;
};
