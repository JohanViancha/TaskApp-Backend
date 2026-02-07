import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";

export class AuthController {
  constructor(private loginUseCase: LoginUserUseCase) {}

  login = async (req: Request, res: Response) => {
    try {
      const email = req.query?.email as string;

      const result = await this.loginUseCase.execute({ email });

  
      return res.json({user: result.user, token: result.token});
    } catch (error) {
      return res.json(null);
    }
  };

  me = async (req: Request, res: Response) => {
    try {
      return res.status(200).json(req.user);
    }
    catch (error) {
      return res.json({message: 'Error al obtener la información del usuario'});
    }
  
  };
}
