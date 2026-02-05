import { UserRepository } from "../../../domain/repositories/user.repository";
import { EmailDTO } from "../../dto/email.dto";

export class FindUserByEmailUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute({ email }: EmailDTO) {
    return this.userRepo.findByEmail(email);
  }
}
