import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDTO } from "../../application/dto/create-user.dto";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  createUser = async (req: Request, res: Response) => {
    const userBody: CreateUserDTO = req.body;
    const idUser = uuidv4();

    const user = await this.createUserUseCase.execute({
      ...userBody,
      id: idUser,
    });
    return res.json(user);
  };
}
