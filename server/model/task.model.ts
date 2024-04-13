import Elysia, {t, UnwrapSchema} from "elysia";

const createTask = t.Object({
    name: t.String(),
    description: t.MaybeEmpty(t.String()),
    taskDifficultId: t.Integer(),
    topicId: t.Integer(),
    constraints: t.String({format: "json-pointer"}),
    allowedProgrammingLanguages: t.Array(t.Integer(), {
        minItems: 1, error: "Task must contains minimum 1 allowed language"
    }),
    allowedResultId: t.Integer(),
    tags: t.MaybeEmpty(t.Array(t.Integer())),
    tests: t.Array(
        t.Object({
            input: t.Array(t.Object({
                type: t.String(),
                value: t.String(),
                position: t.Integer(),
            })),
            output: t.Object({
                type: t.String(),
                value: t.String(),
                position: t.Integer(),
            }),
            explanation: t.String()
        }), {
            minItems: 1, error: "Task must contains minimum 1 test"
        }
    ),
});

const getTask = t.Object({
    id: t.String()
})

const archiveTask = t.Object({
    id: t.String()
})

const TaskModel = new Elysia({name: 'Model.Task'})
    .model({
        createTask,
        getTask,
        archiveTask
    });

export type CreateTaskRequest = UnwrapSchema<typeof createTask>;
export default TaskModel;
