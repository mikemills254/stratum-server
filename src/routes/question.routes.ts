import express, { NextFunction, Request, Response } from "express"
import AuthService from "../middlewares/auth-middlware"
import QuestionController from "../controllers/question.controller"

const router = express.Router()
const controller = new QuestionController()

router.post("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleCreateQuestion(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetQuestion(req, res)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleEditQuestion(req, res)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleDeleteQuestion(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/worksheet/:worksheetId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetQuestionsByWorksheet(req, res)
    } catch (error) {
        next(error)
    }
})

export default router;
