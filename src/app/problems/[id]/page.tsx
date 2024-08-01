"use server"

import ProblemPageClient from "./ProblemPageClient"
import { getTestCaseDefaultList } from "./actions"

type ProblemPageProps = {
    params: {
        id: string
    }
}

export default async function ProblemPage({ params }: ProblemPageProps) {
    const { id } = params
    const testCaseDefaultList = await getTestCaseDefaultList(id)
    return (
        <ProblemPageClient testCaseDefaultList={testCaseDefaultList} />
    )
}
