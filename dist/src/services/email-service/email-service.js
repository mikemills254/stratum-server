"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const components_1 = require("@react-email/components");
const react_1 = __importDefault(require("react"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const twofactor_1 = __importDefault(require("./templates/twofactor"));
class EmailService {
    constructor(config) {
        const emailConfig = config || this.getDefaultConfig();
        this.transporter = nodemailer_1.default.createTransport({
            host: emailConfig.host,
            port: emailConfig.port,
            secure: emailConfig.secure,
            auth: emailConfig.auth,
            tls: emailConfig.tls,
        });
        this.defaultSender =
            emailConfig.defaultSender ||
                process.env.MAIL_DEFAULT_SENDER ||
                "noreply@stratum.com";
        this.templates = {
            TwoFactor: twofactor_1.default,
        };
    }
    getDefaultConfig() {
        const user = process.env.MAIL_USER;
        const pass = process.env.MAIL_PASS;
        if (!user || !pass) {
            throw new Error("Missing SMTP env vars: MAIL_USER, MAIL_PASS");
        }
        return {
            host: "smtp.gmail.com",
            port: Number(process.env.MAIL_PORT) || 587,
            secure: Number(process.env.MAIL_PORT) === 465,
            auth: { user, pass },
            defaultSender: process.env.MAIL_DEFAULT_SENDER,
            tls: {
                rejectUnauthorized: false,
            },
        };
    }
    /**
     * Register a new email template
     */
    registerTemplate(templateName, templateComponent) {
        this.templates[templateName] = templateComponent;
    }
    /**
     * Get all registered templates
     */
    getRegisteredTemplates() {
        return Object.keys(this.templates);
    }
    /**
     * Render an email template with provided data
     */
    async renderTemplate(templateName, data) {
        const template = this.templates[templateName];
        if (!template) {
            throw new Error(`Template not found: ${templateName}. Available templates: ${this.getRegisteredTemplates().join(", ")}`);
        }
        try {
            return await (0, components_1.render)(react_1.default.createElement(template, data));
        }
        catch (error) {
            console.error(`Template rendering error for ${templateName}:`, error);
            throw new Error(`Failed to render template ${templateName}: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }
    /**
     * Send email using a template
     */
    async sendEmail(emailData) {
        const { to, subject, templateName, data, from } = emailData;
        if (!to || !subject || !templateName) {
            throw new Error("Missing required email fields: to, subject, or templateName");
        }
        const htmlContent = await this.renderTemplate(templateName, data);
        const mailOptions = {
            from: from || `"Stratum" <${this.defaultSender}>`,
            to,
            subject,
            html: htmlContent,
        };
        const response = await this.transporter.sendMail(mailOptions);
        return response;
    }
    /**
     * Verify SMTP connection
     */
    async verifyConnection() {
        try {
            await this.transporter.verify();
            console.log("SMTP connection verified successfully");
            return true;
        }
        catch (error) {
            console.error("SMTP connection verification failed:", error);
            return false;
        }
    }
    /**
     * Close the transporter connection
     */
    close() {
        this.transporter.close();
        console.log("Email transporter connection closed");
    }
}
// Singleton instance — import this instead of instantiating directly
exports.emailService = new EmailService();
exports.default = EmailService;
//# sourceMappingURL=email-service.js.map