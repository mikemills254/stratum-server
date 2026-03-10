import { Membership, Role } from "../../prisma/generated/prisma";
import { ICreateMembership, IMembershipRepository } from "../types/memberships.types";
declare class MembershipRepository implements IMembershipRepository {
    addMember(data: ICreateMembership): Promise<Membership>;
    removeMember(userId: string, workbookId: string): Promise<void>;
    updateRole(userId: string, workbookId: string, role: Role): Promise<Membership | null>;
    getMembership(userId: string, workbookId: string): Promise<Membership | null>;
    listByWorkbook(workbookId: string): Promise<Membership[]>;
}
export default MembershipRepository;
//# sourceMappingURL=membership.repository.d.ts.map