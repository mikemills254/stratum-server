import { Router } from "express";
import { GradeController } from "../controllers/grade.controller";
import AuthService from "../middlewares/auth-middlware";

const router = Router();
const controller = new GradeController();

router.post("/", AuthService.verify, (req, res) => controller.handleAssignGrade(req, res));
router.patch("/:id/approve", AuthService.verify, (req, res) => controller.handleApproveGrade(req, res));
router.get("/pending", AuthService.verify, (req, res) => controller.handleGetPendingApprovals(req, res));

export default router;
