import {CreateTaskRequest} from "@/server/model/task.model";
import db from "@/prisma";
import {TestOperation} from "@prisma/client";

export default class TaskService {
    async create(request: CreateTaskRequest, userId: number) {
        const {
            name,
            description,
            taskDifficultId,
            tags,
            tests,
            topicId,
            constraints,
            allowedProgrammingLanguages,
            allowedResultId
        } = request;

        return db.task.create({
            data: {
                name: name,
                description: description ?? undefined,
                taskDifficultId: taskDifficultId,
                topicId: topicId,
                constraints: constraints,
                allowedResultId: allowedResultId,
                created: new Date(),
                creatorId: userId,
                modifierId: userId,
                modified: new Date(),
                taskTags: {
                    connect: (tags ?? []).map(it => ({
                        id: it
                    }))
                },
                tests: {
                    create: tests.map(it => ({
                        input: {
                            createMany: {
                                data: it.input.map(inp => ({
                                    type: inp.type,
                                    value: inp.value,
                                    position: inp.position,
                                }))
                            }
                        },
                        output: {
                            create: {
                                type: it.output.type,
                                value: it.output.value,
                                position: it.output.position,
                            }
                        },
                        operation: TestOperation.equals,
                        explanation: it.explanation,
                    }))
                },
                allowedProgrammingLanguages: {
                    create: allowedProgrammingLanguages.map(it => ({
                        programmingLanguageId: it
                    })),
                }
            }
        });
    }

    async getAll() {
        return db.task.findMany({
            orderBy: {
                taskDifficultId: 'desc'
            }
        })
    }

    async findById(id: string) {
        return db.task.findFirst({
            where: {
                id: id
            },
            include: {
                tests: true
            }
        })
    }

    async archive(id: string) {
        return db.task.update({
            data: {
                archive: true
            },
            where: {
                id: id
            }
        })
    }
}