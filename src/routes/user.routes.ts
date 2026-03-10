import express, { NextFunction, Request, Response } from "express";
import AuthService from "../middlewares/auth-middlware";
import UserController from "../controllers/user.controller";

const router = express.Router();
const controller = new UserController();

router.get("/search-teachers", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleSearchTeachers(req, res);
    } catch (error) {
        next(error);
    }
});

router.get("/search-students", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleSearchStudents(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;
