import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

import StairTransition from "@/components/animations/EnterAnimation";
import { Header } from "@/components/ui/Header";

const jMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrains",
});

export const metadata: Metadata = {
    title: "Marck-vsv page",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jMono.className}>
                <StairTransition />
                <Header/>
                {children}
            </body>
        </html>
    );
}