import { Request, Response } from "express";
import MembershipService from "../services/membership-service/membership.service";
import MembershipStudentService from "../services/membership-service/membership-student.service";
import { IMembershipController, IMembershipService, IMembershipStudentService } from "../types/memberships.types";

class MembershipController implements IMembershipController {
    private service: IMembershipService
    private studentService: IMembershipStudentService

    constructor() {
        this.service = new MembershipService()
        this.studentService = new MembershipStudentService()
    }

    async handleAddMember(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { userId, workbookId, role } = req.body
            if (!userId || !workbookId || !role) {
                return res.status(400).json({
                    message: "User ID, Workbook ID, and Role are required.",
                    success: false
                })
            }

            const membership = await this.service.addMember(user.uid, req.body)
            return res.status(201).json({
                message: "Member added successfully.",
                data: membership,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleRemoveMember(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const workbookId = req.params.workbookId as string
            const targetUserId = req.params.userId as string
            if (!workbookId || !targetUserId) {
                return res.status(400).json({
                    message: "Workbook ID and User ID are required.",
                    success: false
                })
            }

            await this.service.removeMember(user.uid, targetUserId, workbookId)
            return res.status(200).json({
                message: "Member removed successfully.",
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleUpdateMemberRole(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const workbookId = req.params.workbookId as string
            const targetUserId = req.params.userId as string
            const { role } = req.body

            if (!workbookId || !targetUserId || !role) {
                return res.status(400).json({
                    message: "Workbook ID, User ID, and Role are required.",
                    success: false
                })
            }

            const updated = await this.service.updateMemberRole(user.uid, targetUserId, workbookId, role)
            return res.status(200).json({
                message: "Role updated successfully.",
                data: updated,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleGetMembershipsByWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const workbookId = req.params.workbookId as string
            if (!workbookId) {
                return res.status(400).json({
                    message: "Workbook ID is required.",
                    success: false
                })
            }

            const memberships = await this.service.getMembershipsByWorkbook(user.uid, workbookId)
            return res.status(200).json({
                message: "Success",
                data: memberships,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleAssignStudent(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { workbookId, studentId } = req.body
            if (!workbookId || !studentId) {
                return res.status(400).json({
                    message: "Workbook ID and Student ID are required.",
                    success: false
                })
            }

            const membership = await this.studentService.addStudent(user.uid, studentId, workbookId)
            return res.status(201).json({
                message: "Student assigned successfully.",
                data: membership,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleRemoveStudent(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const workbookId = req.params.workbookId as string
            const targetUserId = req.params.userId as string
            if (!workbookId || !targetUserId) {
                return res.status(400).json({
                    message: "Workbook ID and User ID are required.",
                    success: false
                })
            }

            await this.studentService.removeStudent(user.uid, targetUserId, workbookId)
            return res.status(200).json({
                message: "Student removed successfully.",
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }
}

export default MembershipController
