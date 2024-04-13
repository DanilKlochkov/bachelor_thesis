import Elysia, {error} from "elysia";
import TaskService from "@/server/service/task.service";
import TaskModel from "@/server/model/task.model";

export const taskController = new Elysia({name: "Route.Task", prefix: "/task"})
    .decorate({taskService: new TaskService()})
    .use(TaskModel)
    .post(
        "/create",
        ({taskService, body}) => taskService.create(body, 1)
            .then(res => {
                if (!res) error("Internal Server Error", {message: "Error while create solution"})
                else return {id: res.id}
            })
            .catch((err: Error) =>
                error("Internal Server Error", err.message)
            ),
        {
            body: 'createTask',
            detail: {tags: ['Task'], description: "Create task"}
        }
    )
    .get(
        "/getAll",
        async ({taskService}) => {
            console.log("Здарова шпана")

            const res = await taskService.getAll()
            console.log(res?.length)
            return res
        },
        {
            detail: {tags: ['Task'], description: "Get all tasks"}
        }
    )
    .get(
        "/getById/:id",
        ({taskService, params}) => taskService.findById(params.id)
            .then(res => {
                if (!res)
                    error("Not Found")
                else
                    return res
            })
            .catch((err: Error) =>
                error("Internal Server Error", err.message)
            ),
        {
            params: "getTask",
            detail: {tags: ['Task'], description: "Get task by ID"}
        }
    )
    .patch(
        "/archive/:id",
        ({taskService, params}) => taskService.archive(params.id),
        {
            params: "archiveTask",
            detail: {tags: ['Task'], description: "Archive task by ID"}
        }
    )