import {CreateSolutionRequest} from "@/server/model/solution.model";
import db from "@/prisma";
import AmqpUtil from "@/server/util/amqp.util";

export default class SolutionService {
    private maxSolutionCount: number = Number(process.env.MAX_SOLUTION_COUNT);
    private amqpOperations: AmqpUtil;

    constructor() {
        this.amqpOperations = new AmqpUtil();
    }


    async create(request: CreateSolutionRequest, userId: number) {
        const {
            taskId,
            code,
            languageId
        } = request;

        const userSolutions = await this.findAllByUserIdAndTaskId(userId, taskId);

        if (userSolutions.length > this.maxSolutionCount)
            throw new MaxSolutionError("Reached maximum count solutions");


        const newSolution = await db.solution.create({
            data: {
                taskId: taskId,
                userId: userId,
                code: code,
                solved: new Date(),
                programmingLanguageId: languageId
            },
            include: {
                task: {
                    include: {
                        tests: {
                            include: {
                                output: true,
                                input: true
                            }
                        }
                    }
                },
                programmingLanguage: true,
            }
        });


        const toEvaluate = {
            userId: newSolution.userId,
            language: newSolution.programmingLanguage.name,
            code: code,
            testCases: newSolution.task.tests.map(test => ({
                id: test.id,
                input: test.input.map(inp => ({
                    type: inp.type,
                    value: inp.value,
                    position: inp.position,
                })),
                output: test.output,
                operation: test.operation.toString(),
            }))
        }

        await this.amqpOperations.sendToQueue(toEvaluate)

        return newSolution;
    }

    async findAllByUserId(userId: number) {
        return db.solution.findMany({
            where: {
                userId: userId
            },
        })
    }

    async findAllByUserIdAndTaskId(userId: number, taskId: string) {
        return db.solution.findMany({
            where: {
                userId: userId,
                taskId: taskId
            },
        })
    }

    async findById(id: string) {
        return db.solution.findFirst({
            where: {
                id: id
            }
        })
    }

    async findUserTestResultsBySolutionId(solutionId: string) {
        return db.userTestCompling.findMany({
            where: {
                solutionId: solutionId
            }
        })
    }

    async rateById(id: string, rate: number) {
        return db.solution.update({
            where: {
                id: id
            },
            data: {
                rating: rate
            }
        })
    }
}