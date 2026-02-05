import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { FindUserByEmailUseCase } from "../../application/use-cases/user/find-by-email.use-case";
import { CreateUserDTO } from "../../application/dto/create-user.dto";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findUserByEmail: FindUserByEmailUseCase,
  ) {}

  validateUser = async (req: Request, res: Response) => {
    const email = req.query?.email as string;

    const user = await this.findUserByEmail.execute({ email });
    return res.json(user);
  };

  createUser = async (req: Request, res: Response) => {
    const userBody: CreateUserDTO = req.body;

    const user = await this.createUserUseCase.execute(userBody);
    return res.json(user);
  };
}
