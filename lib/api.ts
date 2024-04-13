import {app} from "@/server/elysia";
import {treaty} from "@elysiajs/eden";
import Elysia, {t} from "elysia";

export const getBaseUrl = () => {
    return `http://localhost:${process.env.PORT ?? 3000}`
}

export const siteConfig = {
    metadataBase: new URL(getBaseUrl()),
    title: 'Next.js + Elysia',
    description: 'A Next.js template with Elysiajs',
    applicationName: 'Next.js + Elysia',
    keywords: ['next.js', 'elysiajs', 'react', 'typescript'],
    openGraph: {
        title: 'Next.js + Elysia',
        description: 'A Next.js template with Elysiajs',
        type: 'website',
        url: getBaseUrl(),
        siteName: 'Next.js + Elysia',
    },
    alternates: {
        canonical: getBaseUrl(),
    },
}

export const api = treaty<typeof app>(getBaseUrl()).api