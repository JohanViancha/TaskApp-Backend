import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { EmailDTO } from '../../dto/email.dto';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: EmailDTO) {
    const user = User.create(dto.email);
    return this.userRepository.create(user);
  }
}

