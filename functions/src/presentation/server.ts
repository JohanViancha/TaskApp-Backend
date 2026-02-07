import cors from "cors";
import express from "express";
import { Dependencies } from "../boostrap/depdencies";
import { AppRoutes } from "./routes";

export const createServer = ({ jwtService }: Dependencies) => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:4200",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );

  app.use(express.json());

  app.use(AppRoutes.create({ jwtService }));

  return app;
};
