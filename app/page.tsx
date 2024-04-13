"use client"

import {api} from "@/lib/api";

export default function Home() {
    const res = api.solution.create.subscribe()

    res.subscribe((message) => {
        console.log('got', message)
    })

    res.send({
        code: "function sum(a, b) { return a+b }",
        languageId: 2,
        taskId: "1bf4e251-f3a2-4aa4-8491-6dd7235aaadc"
    })

    res.on("message", ({rawData}) => {
        console.log(rawData)
    })

    res.on("error", ({}) => {
        console.log("ERROR!!!!")
    })

    console.log()

    return (
        <main className='min-h-screen bg-gray-50'>
            <nav className='flex font-medium'>
                <ul>
                    <li>
                        Задания
                    </li>
                    <li>
                        Таблица лидеров
                    </li>
                </ul>
            </nav>
        </main>
    );
}
