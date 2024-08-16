"use client"

import { ReactNode, createContext, useContext, useState } from "react"
import { TestCaseData } from "@/app/problems/[id]/types"

type ProblemProviderProps = {
    testCaseDefaultList: Array<TestCaseData>,
    children: ReactNode,
}

type ProblemContextType = {
    testCaseList: Array<TestCaseData>
    setTestCaseList: (testCaseList: Array<TestCaseData>) => void,
    currentTestCaseId: string,
    setCurrentTestCaseId: (currentTestCaseId: string) => void,
}

const ProblemContext = createContext<ProblemContextType>({
    testCaseList: [],
    setTestCaseList: () => { },
    currentTestCaseId: "",
    setCurrentTestCaseId: () => { },
})

export default function ProblemProvider({
    testCaseDefaultList,
    children,
}: ProblemProviderProps) {

    const [testCaseList, setTestCaseList] = useState<Array<TestCaseData>>(structuredClone(testCaseDefaultList))
    const [currentTestCaseId, setCurrentTestCaseId] = useState<string>(testCaseList[testCaseList.length - 1].id)

    return (
        <ProblemContext.Provider
            value={{ testCaseList, setTestCaseList, currentTestCaseId, setCurrentTestCaseId }}
        >
            {children}
        </ProblemContext.Provider>
    )

}

export function useProblemContext() {
    return useContext(ProblemContext)
}
