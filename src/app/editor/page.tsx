import PlaygroundPreferencesProvider from "../providers/PlaygroundPreferencesProvider"
import { EditorPageClient } from "./EditorPageClient"
import { getProgrammingLanguages } from "./actions"

export const dynamic = 'force-dynamic'

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
