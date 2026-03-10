import { Worksheet } from "../../prisma/generated/prisma";
import { ICreateWorksheet, IUpdateWorksheet, IWorksheetRepository } from "../types/worksheets.types";
declare class WorksheetRepository implements IWorksheetRepository {
    create(data: ICreateWorksheet): Promise<Worksheet>;
    get(id: string): Promise<Worksheet | null>;
    edit(id: string, data: IUpdateWorksheet): Promise<Worksheet | null>;
    delete(id: string): Promise<void>;
    listByWorkbook(workbookId: string): Promise<Worksheet[]>;
}
export default WorksheetRepository;
//# sourceMappingURL=worksheet.repository.d.ts.map