import { Request, Response } from "express";
export declare class AnswerController {
    private service;
    constructor();
    handleCreateAnswer(req: Request, res: Response): Promise<Response>;
    handleSubmitAnswer(req: Request, res: Response): Promise<Response>;
    handleGetAnswer(req: Request, res: Response): Promise<Response>;
    handleGetAnswersByQuestion(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=answer.controller.d.ts.map