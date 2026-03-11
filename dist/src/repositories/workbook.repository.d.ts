import { Workbook } from "../../prisma/generated/prisma";
import { ICreateWorkBook, ISearchWorkBook, IWorkbookRepository } from "../types/workbooks.types";
declare class WorkbookRepository implements IWorkbookRepository {
    create(data: ICreateWorkBook): Promise<Workbook>;
    get(id: string): Promise<Workbook | null>;
    edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null>;
    delete(id: string): Promise<void>;
    search(params: ISearchWorkBook): Promise<Workbook[]>;
    searchPublic(userId: string, params: ISearchWorkBook): Promise<Workbook[]>;
    getStats(id: string): Promise<any>;
}
export default WorkbookRepository;
//# sourceMappingURL=workbook.repository.d.ts.map