import express, { NextFunction, Request, Response } from "express"
import AuthService from "../middlewares/auth-middlware"
import MembershipController from "../controllers/membership.controller"

const router = express.Router()
const controller = new MembershipController()

router.post("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleAddMember(req, res)
    } catch (error) {
        next(error)
    }
})

router.delete("/workbook/:workbookId/user/:userId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleRemoveMember(req, res)
    } catch (error) {
        next(error)
    }
})

router.put("/workbook/:workbookId/user/:userId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleUpdateMemberRole(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/workbook/:workbookId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetMembershipsByWorkbook(req, res)
    } catch (error) {
        next(error)
    }
})

router.post("/assign-student", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleAssignStudent(req, res)
    } catch (error) {
        next(error)
    }
})

router.delete("/workbook/:workbookId/student/:userId", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleRemoveStudent(req, res)
    } catch (error) {
        next(error)
    }
})

export default router;
