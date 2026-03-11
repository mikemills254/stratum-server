import { Grade } from "../../prisma/generated/prisma";
export interface ICreateGrade {
    answerId: string;
    teacherId: string;
    score: number;
    feedback?: string;
}
export declare class GradeRepository {
    create(data: ICreateGrade): Promise<Grade>;
    getById(id: string): Promise<Grade | null>;
    getByAnswer(answerId: string): Promise<Grade | null>;
    update(id: string, data: Partial<Grade>): Promise<Grade>;
    approve(id: string, directorId: string): Promise<Grade>;
    getPendingApprovals(directorId: string): Promise<Grade[]>;
}
//# sourceMappingURL=grade.repository.d.ts.map