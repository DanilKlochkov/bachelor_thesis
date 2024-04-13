import * as amqp from "amqplib";
import db from "@/prisma";

interface IExecutedSolution {
    solutionId: string,
    userId: number,
    tests: {
        id: number,
        succeeded: boolean,
        result: {
            time: string
        }
    }[]
}

export default class AmqpUtil {
    private inputQueue = process.env.INPUT_QUEUE ?? "";
    private connectionString = process.env.CONNECTION_STRING ?? "";
    private outputQueue = process.env.OUTPUT_QUEUE ?? "";

    async sendToQueue(message: any) {
        let connection: amqp.Connection | undefined;
        try {
            connection = await amqp.connect(this.connectionString);
            const channel = await connection.createChannel();
            await channel.assertQueue(this.outputQueue, {durable: false});
            channel.sendToQueue(this.outputQueue, Buffer.from(JSON.stringify(message)));
            console.info("Sent to [%s]: '%s'", this.outputQueue, JSON.stringify(message))
        } catch (e) {
            console.warn(e);
        } finally {
            if (connection) await connection.close();
        }
    }

    async receiveFromQueue() {
        try {
            const connection = await amqp.connect(this.connectionString);
            const channel = await connection.createChannel();

            process.once("SIGINT", async () => {
                await channel.close();
                await connection.close();
            })

            await channel.assertQueue(this.inputQueue, {durable: false});
            await channel.consume(this.inputQueue, async (message) => {
                if (message) {
                    const res: IExecutedSolution = JSON.parse(message.content.toString());
                    console.log("Received from [%s]: %s", this.inputQueue, message.content.toString())

                    await db.userTestCompling.createMany({
                        data: res.tests.map(test => ({
                            solutionId: res.solutionId,
                            isError: test.succeeded,
                            testId: test.id,
                        }))
                    })
                }
            }, {
                noAck: true
            });
        } catch (e) {
            console.warn(e);
        }
    }
}