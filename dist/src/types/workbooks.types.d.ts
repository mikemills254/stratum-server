import { Workbook } from "../generated/prisma/index.js";
export interface ICreateWorkBook {
    name: string;
    description?: string | null;
    tag?: string | null;
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
export interface IWorkbookRepository {
    create(data: ICreateWorkBook): Promise<Workbook>;
    get(id: string): Promise<Workbook | null>;
    edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null>;
    delete(id: string): Promise<void>;
    search(params: ISearchWorkBook): Promise<Workbook[]>;
}
export interface IWorkbookService {
    createWorkbook(userId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>;
}
//# sourceMappingURL=workbooks.types.d.ts.map