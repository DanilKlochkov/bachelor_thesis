import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import {siteConfig} from "@/lib/api";

export const metadata: Metadata = siteConfig;

export default function RootLayout(
    {children}: Readonly<{ children: ReactNode; }>
) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
