"use server"

import PlaygroundPreferencesProvider from "../store/PlaygroundPreferencesProvider"
import { EditorPageClient } from "./EditorPageClient"

export default async function EditorPage() {
    return (
        <PlaygroundPreferencesProvider>
            <EditorPageClient />
        </PlaygroundPreferencesProvider>
    )
}
