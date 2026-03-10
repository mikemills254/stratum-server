import { Membership } from "../../../prisma/generated/prisma";
import { IMembershipStudentService } from "../../types/memberships.types";
declare class MembershipStudentService implements IMembershipStudentService {
    private repository;
    constructor();
    private validateTeacher;
    addStudent(userId: string, targetUserId: string, workbookId: string): Promise<Membership>;
    removeStudent(userId: string, targetUserId: string, workbookId: string): Promise<void>;
}
export default MembershipStudentService;
//# sourceMappingURL=membership-student.service.d.ts.map