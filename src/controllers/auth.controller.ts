import { IAuthController } from "../types/auth.types";
import { Request, Response } from "express";
import AuthService from "../services/auth-service/auth-service";

class AuthController implements IAuthController {
    private service: AuthService
    constructor() {
        this.service = new AuthService()
    }
    async handleRequestTwoFactorCode(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            const { role } = req.body
            if (!user) return res.status(401).json({
                message: "Unauthorised",
                success: false
            })

            if (!role) return res.status(400).json({
                message: "Role is required.",
                success: false
            })

            await this.service.requestTwoFactorCode(user.uid, role)
            return res.status(200).json({
                message: "Success",
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }
    async handleTwoFactorAuth(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({
                message: "Unauthorised",
                success: false
            })

            const { code } = req.body
            if (!code) return res.status(400).json({
                message: "Code is required.",
                success: false
            })

            const result = await this.service.verifyTwoFactorCode(user.uid, code)
            return res.status(200).json({
                message: "Success",
                data: result,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }


}

export default AuthController