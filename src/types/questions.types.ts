import { Question } from "../../prisma/generated/prisma";
import { Request, Response } from "express";

export interface ICreateQuestion {
    text: string;
    order?: number;
    isRequired?: boolean;
    worksheetId: string;
    teacherId: string;
}

export interface IUpdateQuestion {
    text?: string;
    order?: number;
    isRequired?: boolean;
}

export interface IQuestionRepository {
    create(data: ICreateQuestion): Promise<Question>
    findById(id: string): Promise<Question | null>
    update(id: string, data: IUpdateQuestion): Promise<Question>
    delete(id: string): Promise<void>
    listByWorksheet(worksheetId: string): Promise<Question[]>
}

export interface IQuestionService {
    createQuestion(userId: string, data: ICreateQuestion): Promise<Question>
    getQuestion(userId: string, id: string): Promise<Question>
    editQuestion(userId: string, id: string, data: IUpdateQuestion): Promise<Question>
    deleteQuestion(userId: string, id: string): Promise<void>
    getQuestionsByWorksheet(userId: string, worksheetId: string): Promise<Question[]>
}

export interface IQuestionController {
    handleCreateQuestion(req: Request, res: Response): Promise<Response>
    handleGetQuestion(req: Request, res: Response): Promise<Response>
    handleEditQuestion(req: Request, res: Response): Promise<Response>
    handleDeleteQuestion(req: Request, res: Response): Promise<Response>
    handleGetQuestionsByWorksheet(req: Request, res: Response): Promise<Response>
}
