import { Grade } from "../../../prisma/generated/prisma";
import { ICreateGrade } from "../../repositories/grade.repository";
export declare class GradeService {
    private repository;
    private answerRepository;
    constructor();
    assignGrade(data: ICreateGrade): Promise<Grade>;
    approveGrade(id: string, directorId: string): Promise<Grade>;
    getPendingApprovals(directorId: string): Promise<Grade[]>;
}
//# sourceMappingURL=grade.service.d.ts.map