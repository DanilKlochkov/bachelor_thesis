import swagger from "@elysiajs/swagger";
import Elysia, {t} from "elysia";
import {taskController} from "@/server/controller/task.controller";
import {solutionController} from "@/server/controller/solution.controller";
import AmqpUtil from "@/server/util/amqp.util";

new AmqpUtil().receiveFromQueue();

export const app = new Elysia({prefix: "/api"})
    .use(
        swagger({
            path: "/docs",
            documentation: {
                info: {
                    title: "",
                    version: "1.0.0"
                },
                tags: [
                    {name: 'Task', description: 'Task operations'},
                    {name: 'Solution', description: 'Solution operations'},
                ],
            }
        })
    )
    .onError(({error, code}) => {
        switch (code) {
            case "VALIDATION":
                return {
                    message: 'Validation error',
                    fieldsError: error.all.reduce(
                        (acc, err) => {
                            acc[String(err.path).slice(1)] = err.schema.error ?? err.message
                            return acc
                        },
                        {} as Record<string, string>
                    )
                }
            default:
                return {message: error.message}
        }
    })
    .use(taskController)
    .use(solutionController)
    .listen(3000);

const {handle} = app;

export {handle as DELETE, handle as GET, handle as PUT, handle as POST};