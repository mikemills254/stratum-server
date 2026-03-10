import { IAuthService } from "../../types/auth.types";
import { prisma } from "../../utilities/prisma";
import bcrypt from "bcrypt"
import EmailService from "../email-service/email-service";
import { Role } from "../../../prisma/generated/prisma";

class AuthService implements IAuthService {
    private mailService: EmailService
    constructor() {
        this.mailService = new EmailService()
    }
    async verifyTwoFactorCode(uid: string, code: string): Promise<void> {
        try {
            if (!uid || !code) {
                throw new Error("User ID and code are required.")
            }

            const user = await prisma.user.findUnique({
                where: { uid }
            })

            if (!user) {
                throw new Error("User not found.")
            }

            if (!user.twoFactorCode || !user.twoFactorCodeExpiry) {
                throw new Error("No two-factor code found for this user.")
            }

            if (user.twoFactorCodeExpiry < new Date()) {
                throw new Error("Two-factor code has expired.")
            }

            const isCodeValid = bcrypt.compareSync(code, user.twoFactorCode)

            if (!isCodeValid) {
                throw new Error("Invalid two-factor code.")
            }

            await prisma.user.update({
                where: { uid },
                data: {
                    twoFactorVerified: true
                }
            })
        } catch (error) {
            throw error
        }
    }
    async requestTwoFactorCode(uid: string, role: Role): Promise<void> {
        try {
            if (!uid) {
                throw new Error("User ID is required.")
            }

            const user = await prisma.user.findUnique({
                where: { uid }
            })

            if (!user) {
                throw new Error("User not found.")
            }

            const code = Math.floor(100000 + Math.random() * 900000).toString()
            const expiry = new Date(Date.now() + 10 * 60 * 1000)

            await prisma.user.update({
                where: { uid },
                data: {
                    twoFactorCode: bcrypt.hashSync(code, 10),
                    twoFactorCodeExpiry: expiry,
                    role: role
                }
            })

            await this.sendTwoFactorCodeEmail(user.email, code)
        } catch (error) {
            throw error
        }
    }

    private async sendTwoFactorCodeEmail(email: string, code: string): Promise<void> {
        try {
            await this.mailService.sendEmail({
                to: email,
                subject: "Two-Factor Authentication Code",
                templateName: "TwoFactor",
                data: {
                    code,
                    expiryMinutes: 10
                }
            })
        } catch (error) {
            throw error
        }
    }
}

export default AuthService