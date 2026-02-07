import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { createServer } from "./presentation/server";
import { JwtService } from "./infrastructure/services/jwt.service";

const JWT_SECRET = defineSecret("JWT_SECRET");

export const api = onRequest(
  {
    secrets: [JWT_SECRET],
  },
  (req, res) => {
    const jwtService = new JwtService(JWT_SECRET.value());

    const app = createServer({
      jwtService,
    });

    return app(req, res);
  }
);
