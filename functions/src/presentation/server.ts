import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use(AppRoutes.routes);

export default app;
