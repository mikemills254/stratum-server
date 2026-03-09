import { Request, Response } from "express";
import { IQuestionController } from "../types/questions.types";
declare class QuestionController implements IQuestionController {
    private service;
    constructor();
    handleCreateQuestion(req: Request, res: Response): Promise<Response>;
    handleGetQuestion(req: Request, res: Response): Promise<Response>;
    handleEditQuestion(req: Request, res: Response): Promise<Response>;
    handleDeleteQuestion(req: Request, res: Response): Promise<Response>;
    handleGetQuestionsByWorksheet(req: Request, res: Response): Promise<Response>;
}
export default QuestionController;
//# sourceMappingURL=question.controller.d.ts.map