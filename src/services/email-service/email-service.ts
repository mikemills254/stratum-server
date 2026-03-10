import { render } from "@react-email/components";
import React from "react";
import nodemailer, { Transporter, SendMailOptions, SentMessageInfo } from "nodemailer";
import { EmailData, EmailTemplate } from "../../types/email.types";
import TwoFactorTemplate from "./templates/twofactor";

interface EmailServiceConfig {
    host?: string;
    port?: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
    defaultSender?: string;
    tls?: {
        rejectUnauthorized: boolean;
    };
}

class EmailService {
    private transporter: Transporter;
    private templates: Record<EmailTemplate, React.ComponentType<any>>;
    private defaultSender: string;

    constructor(config?: EmailServiceConfig) {
        const emailConfig = config || this.getDefaultConfig();

        this.transporter = nodemailer.createTransport({
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
            TwoFactor: TwoFactorTemplate,
        };
    }

    private getDefaultConfig(): EmailServiceConfig {
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
    public registerTemplate(
        templateName: EmailTemplate,
        templateComponent: React.ComponentType<any>
    ): void {
        this.templates[templateName] = templateComponent;
    }

    /**
     * Get all registered templates
     */
    public getRegisteredTemplates(): string[] {
        return Object.keys(this.templates);
    }

    /**
     * Render an email template with provided data
     */
    public async renderTemplate(
        templateName: EmailTemplate,
        data: Record<string, any>
    ): Promise<string> {
        const template = this.templates[templateName];

        if (!template) {
            throw new Error(
                `Template not found: ${templateName}. Available templates: ${this.getRegisteredTemplates().join(", ")}`
            );
        }

        try {
            return await render(React.createElement(template, data));
        } catch (error) {
            console.error(`Template rendering error for ${templateName}:`, error);
            throw new Error(
                `Failed to render template ${templateName}: ${error instanceof Error ? error.message : "Unknown error"}`
            );
        }
    }

    /**
     * Send email using a template
     */
    public async sendEmail(emailData: EmailData): Promise<SentMessageInfo> {
        const { to, subject, templateName, data, from } = emailData;

        if (!to || !subject || !templateName) {
            throw new Error("Missing required email fields: to, subject, or templateName");
        }

        const htmlContent = await this.renderTemplate(templateName, data);

        const mailOptions: SendMailOptions = {
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
    public async verifyConnection(): Promise<boolean> {
        try {
            await this.transporter.verify();
            console.log("SMTP connection verified successfully");
            return true;
        } catch (error) {
            console.error("SMTP connection verification failed:", error);
            return false;
        }
    }

    /**
     * Close the transporter connection
     */
    public close(): void {
        this.transporter.close();
        console.log("Email transporter connection closed");
    }
}

// Singleton instance — import this instead of instantiating directly
export const emailService = new EmailService();
export default EmailService;