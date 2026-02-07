import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";

export class AuthController {
  constructor(private loginUseCase: LoginUserUseCase) {}

  logout = async (req: Request, res: Response) => {
    res.clearCookie("jwtToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.json(true);
  };

  login = async (req: Request, res: Response) => {
    try {
      const email = req.query?.email as string;

      const result = await this.loginUseCase.execute({ email });

      res.cookie("jwtToken", result.token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.json(result.user);
    } catch (error) {
      return res.json(null);
    }
  };

  me = async (req: Request, res: Response) => {
    return res.json(req.user);
  };
}
