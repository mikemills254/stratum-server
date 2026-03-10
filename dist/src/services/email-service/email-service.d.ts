import React from "react";
import { SentMessageInfo } from "nodemailer";
import { EmailData, EmailTemplate } from "../../types/email.types";
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
declare class EmailService {
    private transporter;
    private templates;
    private defaultSender;
    constructor(config?: EmailServiceConfig);
    private getDefaultConfig;
    /**
     * Register a new email template
     */
    registerTemplate(templateName: EmailTemplate, templateComponent: React.ComponentType<any>): void;
    /**
     * Get all registered templates
     */
    getRegisteredTemplates(): string[];
    /**
     * Render an email template with provided data
     */
    renderTemplate(templateName: EmailTemplate, data: Record<string, any>): Promise<string>;
    /**
     * Send email using a template
     */
    sendEmail(emailData: EmailData): Promise<SentMessageInfo>;
    /**
     * Verify SMTP connection
     */
    verifyConnection(): Promise<boolean>;
    /**
     * Close the transporter connection
     */
    close(): void;
}
export declare const emailService: EmailService;
export default EmailService;
//# sourceMappingURL=email-service.d.ts.map