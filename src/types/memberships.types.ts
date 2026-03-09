import { Membership, Role } from "../../prisma/generated/prisma";
import { Request, Response } from "express";

export interface ICreateMembership {
    userId: string;
    workbookId: string;
    role: Role;
}

export interface IUpdateMembership {
    role: Role;
}

export interface IMembershipRepository {
    addMember(data: ICreateMembership): Promise<Membership>
    removeMember(userId: string, workbookId: string): Promise<void>
    updateRole(userId: string, workbookId: string, role: Role): Promise<Membership | null>
    getMembership(userId: string, workbookId: string): Promise<Membership | null>
    listByWorkbook(workbookId: string): Promise<Membership[]>
}

export interface IMembershipService {
    addMember(userId: string, data: ICreateMembership): Promise<Membership>
    removeMember(userId: string, targetUserId: string, workbookId: string): Promise<void>
    updateMemberRole(userId: string, targetUserId: string, workbookId: string, role: Role): Promise<Membership>
    getMembershipsByWorkbook(userId: string, workbookId: string): Promise<Membership[]>
}

export interface IMembershipStudentService {
    addStudent(userId: string, targetUserId: string, workbookId: string): Promise<Membership>
    removeStudent(userId: string, targetUserId: string, workbookId: string): Promise<void>
}

export interface IMembershipController {
    handleAddMember(req: Request, res: Response): Promise<Response>
    handleRemoveMember(req: Request, res: Response): Promise<Response>
    handleUpdateMemberRole(req: Request, res: Response): Promise<Response>
    handleGetMembershipsByWorkbook(req: Request, res: Response): Promise<Response>
    handleAssignStudent(req: Request, res: Response): Promise<Response>
    handleRemoveStudent(req: Request, res: Response): Promise<Response>
}
