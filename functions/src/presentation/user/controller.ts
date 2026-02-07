import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDTO } from "../../application/dto/create-user.dto";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  createUser = async (req: Request, res: Response) => {
    const { email, name } = req.body as CreateUserDTO;

    if (!email || !name) {
      return res.status(400).json({
        error: true,
        message: 'Los campos "correo" y "nombre" son obligatorios',
      });
    }

    try {
      const idUser = uuidv4();

      const user = await this.createUserUseCase.execute({
        ...req.body,
        id: idUser,
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creando usuario:", error);
      return res.status(500).json({
        error: true,
        message: "Error interno al crear el usuario",
      });
    }
  };
}
