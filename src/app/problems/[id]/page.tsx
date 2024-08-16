"use server"

import ProblemProvider from "@/app/providers/ProblemProvider"
import { DocumentBodyOverflow } from "./DocumentBodyOverflow"
import ProblemPageClient from "./ProblemPageClient"
import { getProgrammingLanguages, getTestCaseDefaultList } from "./actions"

type ProblemPageProps = {
    params: {
        id: string
    }
}

export default async function ProblemPage({ params }: ProblemPageProps) {
    const { id } = params
    const testCaseDefaultList = await getTestCaseDefaultList(id)
    const programmingLanguageList = await getProgrammingLanguages(id)

    return (
        <ProblemProvider
            testCaseDefaultList={testCaseDefaultList}
            programmingLanguageList={programmingLanguageList}
        >
            <DocumentBodyOverflow>
                <ProblemPageClient
                    problemId={id}
                    testCaseDefaultList={testCaseDefaultList}
                    programmingLanguageList={programmingLanguageList}
                />
            </DocumentBodyOverflow>
        </ProblemProvider>
    )
}
