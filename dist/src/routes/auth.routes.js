"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const router = (0, express_1.Router)();
const controller = new auth_controller_1.default();
router.post("/request-2fa", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleRequestTwoFactorCode(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.post("/verify", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleTwoFactorAuth(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map