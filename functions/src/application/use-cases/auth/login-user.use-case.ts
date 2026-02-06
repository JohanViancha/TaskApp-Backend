import { UserRepository } from "../../../domain/repositories/user.repository";
import { JwtService } from "../../../infrastructure/services/jwt.service";
import { FindUserByEmailDTO } from "../../dto/find-user-by-email.dto";

export class LoginUserUseCase {
  constructor(
    private userRepo: UserRepository,
    private jwtService: JwtService
  ) {}

  async execute(data: FindUserByEmailDTO) {
    const user = await this.userRepo.findByEmail(
      data.email
    );

    if (!user) {
      throw new Error("Usuario no existe");
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
    });

    return { user, token };
  }
}
