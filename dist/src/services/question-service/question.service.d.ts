import { Question } from "../../generated/prisma/index";
import { ICreateQuestion, IQuestionService, IUpdateQuestion } from "../../types/questions.types";
declare class QuestionService implements IQuestionService {
    private repository;
    constructor();
    private validateAccess;
    createQuestion(userId: string, data: ICreateQuestion): Promise<Question>;
    getQuestion(userId: string, id: string): Promise<Question>;
    editQuestion(userId: string, id: string, data: IUpdateQuestion): Promise<Question>;
    deleteQuestion(userId: string, id: string): Promise<void>;
    getQuestionsByWorksheet(userId: string, worksheetId: string): Promise<Question[]>;
}
export default QuestionService;
//# sourceMappingURL=question.service.d.ts.map