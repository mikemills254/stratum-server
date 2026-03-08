import { Router } from "express";
import { AnswerController } from "../controllers/answer.controller";
import AuthService from "../middlewares/auth-middlware";

const router = Router();
const controller = new AnswerController();

router.post("/", AuthService.verify, (req, res) => controller.handleCreateAnswer(req, res));
router.post("/:id/submit", AuthService.verify, (req, res) => controller.handleSubmitAnswer(req, res));
router.get("/:id", AuthService.verify, (req, res) => controller.handleGetAnswer(req, res));
router.get("/question/:questionId", AuthService.verify, (req, res) => controller.handleGetAnswersByQuestion(req, res));

export default router;
