"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth-service/auth-service"));
class AuthController {
    constructor() {
        this.service = new auth_service_1.default();
    }
    async handleRequestTwoFactorCode(req, res) {
        try {
            const user = req.user;
            const { role } = req.body;
            if (!user)
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                });
            if (!role)
                return res.status(400).json({
                    message: "Role is required.",
                    success: false
                });
            await this.service.requestTwoFactorCode(user.uid, role);
            return res.status(200).json({
                message: "Success",
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
    async handleTwoFactorAuth(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                });
            const { code } = req.body;
            if (!code)
                return res.status(400).json({
                    message: "Code is required.",
                    success: false
                });
            const result = await this.service.verifyTwoFactorCode(user.uid, code);
            return res.status(200).json({
                message: "Success",
                data: result,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map