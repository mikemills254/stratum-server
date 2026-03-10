import { Worksheet } from "../../prisma/generated/prisma";
import { Request, Response } from "express";

export interface ICreateWorksheet {
    title: string;
    description: string;
    workbookId: string;
    order?: number;
}

export interface IUpdateWorksheet {
    title?: string;
    order?: number;
    isLocked?: boolean;
    yjsState?: Buffer;
}

export interface IWorksheetRepository {
    create(data: ICreateWorksheet): Promise<Worksheet>
    get(id: string): Promise<Worksheet | null>
    edit(id: string, data: IUpdateWorksheet): Promise<Worksheet | null>
    delete(id: string): Promise<void>
    listByWorkbook(workbookId: string): Promise<Worksheet[]>
}

export interface IWorksheetService {
    createWorksheet(userId: string, data: ICreateWorksheet): Promise<Worksheet>
    getWorksheet(userId: string, worksheetId: string): Promise<Worksheet>
    editWorksheet(userId: string, worksheetId: string, data: IUpdateWorksheet): Promise<Worksheet>
    deleteWorksheet(userId: string, worksheetId: string): Promise<void>
    getWorksheetsByWorkbook(userId: string, workbookId: string): Promise<Worksheet[]>
}

export interface IWorksheetController {
    handleCreateWorksheet(req: Request, res: Response): Promise<Response>
    handleGetWorksheet(req: Request, res: Response): Promise<Response>
    handleEditWorksheet(req: Request, res: Response): Promise<Response>
    handleDeleteWorksheet(req: Request, res: Response): Promise<Response>
    handleGetWorksheetsByWorkbook(req: Request, res: Response): Promise<Response>
}
