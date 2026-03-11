import { Workbook } from "../../../prisma/generated/prisma";
import { ICreateWorkBook, ISearchWorkBook, IWorkbookService } from "../../types/workbooks.types";
declare class WorkbookService implements IWorkbookService {
    private repository;
    constructor();
    private validateDirector;
    private validateMembership;
    createWorkbook(userId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>;
    getWorkbook(userId: string, workbookId: string): Promise<Workbook>;
    editWorkbook(userId: string, workbookId: string, data: Partial<ICreateWorkBook>): Promise<Workbook>;
    deleteWorkbook(userId: string, workbookId: string): Promise<void>;
    searchWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    searchExploreWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    joinWorkbook(userId: string, workbookId: string): Promise<void>;
    getWorkbookStats(userId: string, workbookId: string): Promise<any>;
}
export default WorkbookService;
//# sourceMappingURL=workbook.service.d.ts.map