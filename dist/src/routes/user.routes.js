"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
const controller = new user_controller_1.default();
router.get("/search-teachers", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleSearchTeachers(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/search-students", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleSearchStudents(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map