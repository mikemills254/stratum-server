import { Workbook } from "../../prisma/generated/prisma";
import { Request, Response } from "express";
export interface ICreateWorkBook {
    name: string;
    description?: string | null;
    tag?: string | null;
    isPrivate?: boolean;
    directorId: string;
}
export interface ISearchWorkBook {
    query?: string;
    directorId?: string;
    tag?: string;
    limit?: number;
    offset?: number;
    workbookIds?: string[];
}
export interface IWorkbookStats {
    teacherCount: number;
    studentCount: number;
    teachers: {
        uid: string;
        username: string;
        email: string;
        avatarUrl: string | null;
    }[];
}
export interface IWorkbookRepository {
    create(data: ICreateWorkBook): Promise<Workbook>;
    get(id: string): Promise<Workbook | null>;
    edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null>;
    delete(id: string): Promise<void>;
    search(params: ISearchWorkBook): Promise<Workbook[]>;
    searchPublic(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    getStats(id: string): Promise<IWorkbookStats>;
}
export interface IWorkbookService {
    createWorkbook(userId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>;
    getWorkbook(userId: string, workbookId: string): Promise<Workbook>;
    editWorkbook(userId: string, workbookId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>;
    deleteWorkbook(userId: string, workbookId: string): Promise<void>;
    searchWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    searchExploreWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    getWorkbookStats(userId: string, workbookId: string): Promise<IWorkbookStats>;
    joinWorkbook(userId: string, workbookId: string): Promise<void>;
}
export interface IWorkbookController {
    handleCreateWorkbook(req: Request, res: Response): Promise<Response>;
    handleGetWorkbook(req: Request, res: Response): Promise<Response>;
    handleEditWorkbook(req: Request, res: Response): Promise<Response>;
    handleDeleteWorkbook(req: Request, res: Response): Promise<Response>;
    handleSearchWorkbooks(req: Request<any, any, any, ISearchWorkBook>, res: Response): Promise<Response>;
    handleGetWorkbookStats(req: Request, res: Response): Promise<Response>;
    handleGetExploreWorkbooks(req: Request<any, any, any, ISearchWorkBook>, res: Response): Promise<Response>;
    handleJoinWorkbook(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=workbooks.types.d.ts.map