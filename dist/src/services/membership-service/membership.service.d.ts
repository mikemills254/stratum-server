import { Membership, Role } from "../../../prisma/generated/prisma";
import { ICreateMembership, IMembershipService } from "../../types/memberships.types";
declare class MembershipService implements IMembershipService {
    private repository;
    constructor();
    private validateDirector;
    addMember(userId: string, data: ICreateMembership): Promise<Membership>;
    removeMember(userId: string, targetUserId: string, workbookId: string): Promise<void>;
    updateMemberRole(userId: string, targetUserId: string, workbookId: string, role: Role): Promise<Membership>;
    getMembershipsByWorkbook(userId: string, workbookId: string): Promise<Membership[]>;
}
export default MembershipService;
//# sourceMappingURL=membership.service.d.ts.map