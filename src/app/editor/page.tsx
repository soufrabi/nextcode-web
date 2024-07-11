"use server"

import PlaygroundPreferencesProvider from "../store/PlaygroundPreferencesProvider"
import { EditorPageClient } from "./EditorPageClient"
import { getProgrammingLanguages } from "./actions"

export default async function EditorPage() {
    const programmingLanguageList = await getProgrammingLanguages()

    return (
        <PlaygroundPreferencesProvider>
            <EditorPageClient
                programmingLanguageList={programmingLanguageList}
            />
        </PlaygroundPreferencesProvider>
    )
}
