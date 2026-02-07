import { JwtService } from "../infrastructure/services/jwt.service";

export interface Dependencies {
  jwtService: JwtService;
}
