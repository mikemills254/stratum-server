import { Router } from "express";
import { AnnotationController } from "../controllers/annotation.controller";
import AuthService from "../middlewares/auth-middlware";

const router = Router();
const controller = new AnnotationController();

router.post("/", AuthService.verify, (req, res) => controller.handleCreateAnnotation(req, res));
router.get("/answer/:answerId", AuthService.verify, (req, res) => controller.handleGetAnnotationsByAnswer(req, res));
router.patch("/:id/resolve", AuthService.verify, (req, res) => controller.handleResolveAnnotation(req, res));

export default router;
