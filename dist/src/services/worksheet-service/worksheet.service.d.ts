import { Worksheet } from "../../../prisma/generated/prisma";
import { ICreateWorksheet, IUpdateWorksheet, IWorksheetService } from "../../types/worksheets.types";
declare class WorksheetService implements IWorksheetService {
    private repository;
    constructor();
    private validateAccess;
    createWorksheet(userId: string, data: ICreateWorksheet): Promise<Worksheet>;
    getWorksheet(userId: string, worksheetId: string): Promise<Worksheet>;
    editWorksheet(userId: string, worksheetId: string, data: IUpdateWorksheet): Promise<Worksheet>;
    deleteWorksheet(userId: string, worksheetId: string): Promise<void>;
    getWorksheetsByWorkbook(userId: string, workbookId: string): Promise<Worksheet[]>;
}
export default WorksheetService;
//# sourceMappingURL=worksheet.service.d.ts.map