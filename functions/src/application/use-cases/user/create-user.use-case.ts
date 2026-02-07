import { User } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { JwtService } from "../../../infrastructure/services/jwt.service";
import { CreateUserDTO } from "../../dto/create-user.dto";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private jwtService: JwtService) {}

  async execute(dto: CreateUserDTO) {
    const user = new User(dto.id, dto.email, dto.name, new Date());
    const userCreated = await this.userRepository.create(user);

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
    });

    return {
      user: userCreated,
      token
    }
  }
}
