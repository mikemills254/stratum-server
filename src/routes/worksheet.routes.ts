import express, { NextFunction, Request, Response } from "express"
import AuthService from "../middlewares/auth-middlware"
import WorksheetController from "../controllers/worksheet.controller"

const router = express.Router()
const controller = new WorksheetController()

router.post("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleCreateWorksheet(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetWorksheet(req, res)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleEditWorksheet(req, res)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleDeleteWorksheet(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/workbook/:workbookId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetWorksheetsByWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

export default router;
