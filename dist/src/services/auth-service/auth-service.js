"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../utilities/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const email_service_1 = __importDefault(require("../email-service/email-service"));
class AuthService {
    constructor() {
        this.mailService = new email_service_1.default();
    }
    async verifyTwoFactorCode(uid, code) {
        try {
            if (!uid || !code) {
                throw new Error("User ID and code are required.");
            }
            const user = await prisma_1.prisma.user.findUnique({
                where: { uid }
            });
            if (!user) {
                throw new Error("User not found.");
            }
            if (!user.twoFactorCode || !user.twoFactorCodeExpiry) {
                throw new Error("No two-factor code found for this user.");
            }
            if (user.twoFactorCodeExpiry < new Date()) {
                throw new Error("Two-factor code has expired.");
            }
            const isCodeValid = bcrypt_1.default.compareSync(code, user.twoFactorCode);
            if (!isCodeValid) {
                throw new Error("Invalid two-factor code.");
            }
            await prisma_1.prisma.user.update({
                where: { uid },
                data: {
                    twoFactorVerified: true
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async requestTwoFactorCode(uid, role) {
        try {
            if (!uid) {
                throw new Error("User ID is required.");
            }
            const user = await prisma_1.prisma.user.findUnique({
                where: { uid }
            });
            if (!user) {
                throw new Error("User not found.");
            }
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            const expiry = new Date(Date.now() + 10 * 60 * 1000);
            await prisma_1.prisma.user.update({
                where: { uid },
                data: {
                    twoFactorCode: bcrypt_1.default.hashSync(code, 10),
                    twoFactorCodeExpiry: expiry,
                    role: role
                }
            });
            await this.sendTwoFactorCodeEmail(user.email, code);
        }
        catch (error) {
            throw error;
        }
    }
    async sendTwoFactorCodeEmail(email, code) {
        try {
            await this.mailService.sendEmail({
                to: email,
                subject: "Two-Factor Authentication Code",
                templateName: "TwoFactor",
                data: {
                    code,
                    expiryMinutes: 10
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth-service.js.map