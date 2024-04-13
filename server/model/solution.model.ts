import Elysia, {t, UnwrapSchema} from "elysia";

const createSolution = t.Object({
    taskId: t.String(),
    code: t.String(),
    languageId: t.Numeric()
});

const getSolutionById = t.Object({
    id: t.String()
})

const rateSolutionById = t.Object({
    id: t.String(),
    rate: t.Numeric()
})

const getSolutionByUserId = t.Object({
    userId: t.Numeric()
})

const SolutionModel = new Elysia({name: 'Model.Task'})
    .model({
        createSolution,
        getSolutionById,
        getSolutionByUserId,
        rateSolutionById
    });

export type CreateSolutionRequest = UnwrapSchema<typeof createSolution>;
export default SolutionModel;
