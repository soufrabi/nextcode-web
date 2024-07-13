"use client";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "./ThemeProvider";
import { MediaContextProvider } from "../components/media";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <MediaContextProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </MediaContextProvider>
        </SessionProvider>
    )
}
