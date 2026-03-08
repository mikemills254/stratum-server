import { Workbook } from "../generated/prisma/index.js";
import { Request, Response } from "express";

export interface ICreateWorkBook {
    name: string;
    description?: string | null;
    tag?: string | null
    directorId: string
}

export interface ISearchWorkBook {
    query?: string
    directorId?: string
    tag?: string
    limit?: number
    offset?: number
    workbookIds?: string[]
}

export interface IWorkbookRepository {
    create(data: ICreateWorkBook): Promise<Workbook>
    get(id: string): Promise<Workbook | null>
    edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null>
    delete(id: string): Promise<void>
    search(params: ISearchWorkBook): Promise<Workbook[]>
}

export interface IWorkbookService {
    createWorkbook(userId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>
    getWorkbook(userId: string, workbookId: string): Promise<Workbook>
    editWorkbook(userId: string, workbookId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>
    deleteWorkbook(userId: string, workbookId: string): Promise<void>
    searchWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]>
}

export interface IWorkbookController {
    handleCreateWorkbook(req: Request, res: Response): Promise<Response>
    handleGetWorkbook(req: Request, res: Response): Promise<Response>
    handleEditWorkbook(req: Request, res: Response): Promise<Response>
    handleDeleteWorkbook(req: Request, res: Response): Promise<Response>
    handleSearchWorkbooks(req: Request, res: Response): Promise<Response>
}