export type EmailTemplate = "TwoFactor";
export interface EmailData {
    to: string;
    from?: string;
    subject: string;
    templateName: EmailTemplate;
    data: Record<string, any>;
}
//# sourceMappingURL=email.types.d.ts.map