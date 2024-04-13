import Elysia, {error} from "elysia";
import SolutionService from "@/server/service/solution.service";
import SolutionModel from "@/server/model/solution.model";

export const solutionController = new Elysia({name: "Route.Solution", prefix: "/solution"})
    .decorate({solutionService: new SolutionService()})
    .use(SolutionModel)
    .ws("/create", {
        body: 'createSolution',
        // response: t.,
        detail: {tags: ['Solution'], description: "Create user solution for task"},
        async message(ws, body) {
            const solutionService = new SolutionService();
            try {
                // 2 параметр - userId из сессии
                const solution = await solutionService.create(body, 1);
                if (!solution) {
                    error("Internal Server Error", {message: "Error while create solution"})
                    ws.close();
                } else {
                    let res = await solutionService.findUserTestResultsBySolutionId(solution.id)
                    while (res.length < 1) {
                        res = await solutionService.findUserTestResultsBySolutionId(solution.id)
                    }
                    ws.send({
                        result: res,
                        time: Date.now()
                    });
                    ws.close();
                }
            } catch(err: any) {
                if (err instanceof MaxSolutionError)
                    error("Bad Request", {message: err.getMessage()});
                else
                    error("Internal Server Error", err.message);
                ws.close();
            }
        }
    })
    .get(
        "/get/:id",
        ({solutionService, params: {id}}) => solutionService.findById(id)
            .then(res => {
                if (!res)
                    error("Not Found")
                else
                    return res
            })
            .catch((err: Error) => {
                error("Internal Server Error", err.message)
            }),
        {
            params: "getSolutionById",
            detail: {tags: ['Solution'], description: "Get solution by ID"}
        }
    )
    .put(
        "/rate/:id",
        ({solutionService, query}) =>
            solutionService.rateById(query.id, query.rate),
        {
            query: "rateSolutionById",
            detail: {tags: ['Solution'], description: "Rate solution by ID"}
        }
    )
    .get(
        "/getAll",
        ({solutionService, query}) => solutionService.findAllByUserId(query.userId)
            .catch((err: Error) => {
                error("Internal Server Error", err.message)
            }),
        {
            query: "getSolutionByUserId",
            detail: {tags: ['Solution'], description: "Get solution by user ID"}
        }
    );