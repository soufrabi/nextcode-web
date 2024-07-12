import PlaygroundPreferencesProvider from "../store/PlaygroundPreferencesProvider"
import { EditorPageClient } from "./EditorPageClient"
import { getProgrammingLanguages } from "./actions"

export const revalidate = 0

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
