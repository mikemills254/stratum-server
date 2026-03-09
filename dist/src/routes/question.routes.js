"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const question_controller_1 = __importDefault(require("../controllers/question.controller"));
const router = express_1.default.Router();
const controller = new question_controller_1.default();
router.post("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleCreateQuestion(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetQuestion(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleEditQuestion(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleDeleteQuestion(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/worksheet/:worksheetId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetQuestionsByWorksheet(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=question.routes.js.map