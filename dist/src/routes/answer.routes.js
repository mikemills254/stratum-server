"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const answer_controller_1 = require("../controllers/answer.controller");
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const router = (0, express_1.Router)();
const controller = new answer_controller_1.AnswerController();
router.post("/", auth_middlware_1.default.verify, (req, res) => controller.handleCreateAnswer(req, res));
router.post("/:id/submit", auth_middlware_1.default.verify, (req, res) => controller.handleSubmitAnswer(req, res));
router.put("/:id/text", auth_middlware_1.default.verify, (req, res) => controller.handleUpdateAnswerText(req, res));
router.get("/:id", auth_middlware_1.default.verify, (req, res) => controller.handleGetAnswer(req, res));
router.get("/question/:questionId", auth_middlware_1.default.verify, (req, res) => controller.handleGetAnswersByQuestion(req, res));
exports.default = router;
//# sourceMappingURL=answer.routes.js.map