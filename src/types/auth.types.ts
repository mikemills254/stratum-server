import { Request, Response } from "express";
import { Role } from "../../prisma/generated/prisma";

export interface IAuthController {
    handleTwoFactorAuth(req: Request, res: Response): Promise<Response>
    handleRequestTwoFactorCode(req: Request, res: Response): Promise<Response>
}

export interface IAuthService {
    verifyTwoFactorCode(uid: string, code: string): Promise<void>
    requestTwoFactorCode(uid: string, role: Role): Promise<void>
}