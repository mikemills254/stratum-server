import { Question } from "../../prisma/generated/prisma";
import { ICreateQuestion, IQuestionRepository, IUpdateQuestion } from "../types/questions.types";
declare class QuestionRepository implements IQuestionRepository {
    create(data: ICreateQuestion): Promise<Question>;
    findById(id: string): Promise<Question | null>;
    update(id: string, data: IUpdateQuestion): Promise<Question>;
    delete(id: string): Promise<void>;
    listByWorksheet(worksheetId: string): Promise<Question[]>;
}
export default QuestionRepository;
//# sourceMappingURL=question.repository.d.ts.map