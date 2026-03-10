import { Request, Response } from "express";
import { prisma } from "../utilities/prisma";
import { Role } from "../../prisma/generated/prisma";
import { IUserController } from "../types/users.types";

class UserController implements IUserController {
    async handleSearchTeachers(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user || user.role !== Role.DIRECTOR) {
                return res.status(403).json({
                    message: "Only Directors can search for teachers.",
                    success: false
                });
            }

            const { query, workbookId } = req.query;
            if (!query || typeof query !== 'string') {
                return res.status(400).json({
                    message: "Search query is required.",
                    success: false
                });
            }

            const teachers = await prisma.user.findMany({
                where: {
                    role: Role.TEACHER,
                    OR: [
                        { email: { contains: query, mode: 'insensitive' } },
                        { username: { contains: query, mode: 'insensitive' } }
                    ]
                },
                select: {
                    uid: true,
                    username: true,
                    email: true,
                    avatarUrl: true
                },
                take: 10
            });

            let teachersWithMembership = teachers;
            if (workbookId && typeof workbookId === 'string') {
                const memberships = await prisma.membership.findMany({
                    where: {
                        workbookId: workbookId,
                        userId: { in: teachers.map(t => t.uid) }
                    }
                });

                const memberIds = new Set(memberships.map(m => m.userId));
                teachersWithMembership = teachers.map(t => ({
                    ...t,
                    isMember: memberIds.has(t.uid)
                }));
            }

            return res.status(200).json({
                message: "Success",
                data: teachersWithMembership,
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    async handleSearchStudents(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            // Teachers can search for students to invite to their workbooks
            if (!user || user.role === Role.STUDENT) {
                return res.status(403).json({
                    message: "Only Teachers and Directors can search for students.",
                    success: false
                });
            }

            const { query, workbookId } = req.query;
            if (!query || typeof query !== 'string') {
                return res.status(400).json({
                    message: "Search query is required.",
                    success: false
                });
            }

            const students = await prisma.user.findMany({
                where: {
                    role: Role.STUDENT,
                    OR: [
                        { email: { contains: query, mode: 'insensitive' } },
                        { username: { contains: query, mode: 'insensitive' } }
                    ]
                },
                select: {
                    uid: true,
                    username: true,
                    email: true,
                    avatarUrl: true
                },
                take: 10
            });

            let studentsWithMembership = students;
            if (workbookId && typeof workbookId === 'string') {
                const memberships = await prisma.membership.findMany({
                    where: {
                        workbookId: workbookId,
                        userId: { in: students.map(s => s.uid) }
                    }
                });

                const memberIds = new Set(memberships.map(m => m.userId));
                studentsWithMembership = students.map(s => ({
                    ...s,
                    isMember: memberIds.has(s.uid)
                }));
            }

            return res.status(200).json({
                message: "Success",
                data: studentsWithMembership,
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}

export default UserController;
