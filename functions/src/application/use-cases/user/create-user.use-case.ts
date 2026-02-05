import { User } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { CreateUserDTO } from "../../dto/create-user.dto";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDTO) {
    const user = new User(dto.id || "", dto.email, new Date());
    return this.userRepository.create(user);
  }
}
