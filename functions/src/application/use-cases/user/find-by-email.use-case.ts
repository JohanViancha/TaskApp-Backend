import { UserRepository } from "../../../domain/repositories/user.repository";
import { FindUserByEmailDTO } from "../../dto/find-user-by-email.dto";

export class FindUserByEmailUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(user: FindUserByEmailDTO) {
    return this.userRepo.findByEmail(user.email);
  }
}
