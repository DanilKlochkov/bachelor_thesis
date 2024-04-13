import {beforeAll, describe, expect, it, jest} from "bun:test";
import {mock, when} from "ts-mockito";
import {PrismaClient} from "@prisma/client";

describe('Solution.Api', () => {
    let prismaMock: PrismaClient;

    beforeAll(() => {
        prismaMock = mock(PrismaClient)
    })

    it('babs', async () => {
        const testTask = [{
            id: "1",
            name: "2",
            description: "3",
            taskDifficultId: 1,
            topicId: 1,
            constraints: '{id: "2"}',
            allowedResultId: null,
            created: new Date(),
            creatorId: 1,
            modified: new Date(),
            modifierId: 1,
            archive: false
        }]
        const mockCreateUser = jest.fn()
            .mockResolvedValue(testTask);
        when(prismaMock.task.findMany).thenReturn(mockCreateUser)

        const res = await prismaMock.task.findMany({})
        expect(res).toEqual(testTask)
    })
})