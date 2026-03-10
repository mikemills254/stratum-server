import { NextFunction, Request, Response, Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthMiddleware from "../middlewares/auth-middlware";

const router = Router()
const controller = new AuthController()

router.post("/request-2fa", AuthMiddleware.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleRequestTwoFactorCode(req, res)
    } catch (error) {
        next(error)
    }
})

router.post("/verify", AuthMiddleware.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleTwoFactorAuth(req, res)
    } catch (error) {
        next(error)
    }
})

export default router