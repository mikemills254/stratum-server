import { IAuthController } from "../types/auth.types";
import { Request, Response } from "express";
declare class AuthController implements IAuthController {
    private service;
    constructor();
    handleRequestTwoFactorCode(req: Request, res: Response): Promise<Response>;
    handleTwoFactorAuth(req: Request, res: Response): Promise<Response>;
}
export default AuthController;
//# sourceMappingURL=auth.controller.d.ts.map