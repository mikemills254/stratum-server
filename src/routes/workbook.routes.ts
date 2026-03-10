import express, { NextFunction, Request, Response } from "express"
import AuthService from "../middlewares/auth-middlware"
import WorkbookController from "../controllers/workbook.controller"


const router = express.Router()
const controller = new WorkbookController

router.post("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleCreateWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleSearchWorkbooks(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleEditWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleDeleteWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/:id/stats", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetWorkbookStats(req, res)
    } catch (error) {
        next(error)
    }
})

export default router;