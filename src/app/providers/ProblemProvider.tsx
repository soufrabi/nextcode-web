"use client"

import { ReactNode, createContext, useContext, useState } from "react"
import { nanoid } from "nanoid"
import { TestCaseData, TestCasePanelTab } from "@/app/problems/[id]/types"
import { ProgrammingLanguage } from "@/lib/editor/types"

type ProblemProviderProps = {
    testCaseDefaultList: Array<TestCaseData>,
    programmingLanguageList: Array<ProgrammingLanguage>,
    children: ReactNode,
}

type ProblemContextType = {
    sourceCodeValue: string,
    setSourceCodeValue: (newValue: string) => void,
    selectedLanguage: ProgrammingLanguage,
    setSelectedLanguage: (newLanguage: ProgrammingLanguage) => void,
    testCaseList: Array<TestCaseData>
    setTestCaseList: (testCaseList: Array<TestCaseData>) => void,
    currentTestCaseId: string,
    setCurrentTestCaseId: (currentTestCaseId: string) => void,
    testCasePanelCurrentTab: TestCasePanelTab,
    setTestCasePanelCurrentTab: (currentTab: TestCasePanelTab) => void,
    addTestCase: () => void,
    removeTestCase: (id: string) => void,
    updateCurrentTestCase: (content: string) => void,
    resetTestCases: () => void,
}

const ProblemContext = createContext<ProblemContextType>({
    sourceCodeValue: "",
    setSourceCodeValue: () => { },
    selectedLanguage: { id: 1, name: "", monaco: "", available: false },
    setSelectedLanguage: () => { },
    testCaseList: [],
    setTestCaseList: () => { },
    currentTestCaseId: "",
    setCurrentTestCaseId: () => { },
    testCasePanelCurrentTab: TestCasePanelTab.EDITOR,
    setTestCasePanelCurrentTab: () => { },
    addTestCase: () => { },
    removeTestCase: () => { },
    updateCurrentTestCase: () => { },
    resetTestCases: () => { },
})

export default function ProblemProvider({
    testCaseDefaultList,
    programmingLanguageList,
    children,
}: ProblemProviderProps) {

    const MAX_TESTCASES = 4
    const [sourceCodeValue, setSourceCodeValue] = useState<string>("Loading ...")
    const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(programmingLanguageList[0])
    const [testCaseList, setTestCaseList] = useState<Array<TestCaseData>>(structuredClone(testCaseDefaultList))
    const [currentTestCaseId, setCurrentTestCaseId] = useState<string>(testCaseList[testCaseList.length - 1].id)
    const [testCasePanelCurrentTab, setTestCasePanelCurrentTab] = useState<TestCasePanelTab>(TestCasePanelTab.EDITOR)

    const addTestCase = () => {
        if (testCaseList.length < MAX_TESTCASES) {
            const newTestCase = { id: nanoid(), input: "", output: "" }
            setTestCaseList((prevList: TestCaseData[]) => [...prevList, newTestCase])
            setCurrentTestCaseId(newTestCase.id)
        } else {
            // not needed  as UI add button becomes visible only when testCaseList.length exceeds MAX_TESTCASES
            // toast(`Cannot add more than ${MAX_TESTCASES} testcases`, {
            //     position: 'bottom-right',
            //     type: 'warning',
            //     autoClose: 2000,
            // })
        }
    }

    const removeTestCase = (id: string) => {
        if (testCaseList.length > 1) {
            setTestCaseList((prevList: TestCaseData[]) => prevList.filter((testCaseData) => testCaseData.id != id))
            setCurrentTestCaseId((prevTestCaseId) => prevTestCaseId === id
                ? (testCaseList.findLast((testCaseData) => testCaseData.id !== id)?.id || testCaseList[0].id)
                : prevTestCaseId)
        } else {
            // not needed as UI closeButton becomes visible only when testCaseList.length > 1
            // toast('Must have atleast 1 testcase', {
            //     position: 'bottom-right',
            //     type: 'warning',
            //     autoClose: 2000
            // })
        }
    }

    const resetTestCases = () => {
        setTestCaseList(structuredClone(testCaseDefaultList))
        setCurrentTestCaseId(testCaseDefaultList[testCaseDefaultList.length - 1].id)
    }

    const updateCurrentTestCase = (content: string) => {
        setTestCaseList((prevList) => prevList.map((testCaseData) =>
            testCaseData.id === currentTestCaseId
                ? { ...testCaseData, input: content } : testCaseData))
    }

    return (
        <ProblemContext.Provider
            value={{
                sourceCodeValue,
                setSourceCodeValue,
                selectedLanguage,
                setSelectedLanguage,
                testCaseList,
                setTestCaseList,
                currentTestCaseId,
                setCurrentTestCaseId,
                testCasePanelCurrentTab,
                setTestCasePanelCurrentTab,
                addTestCase,
                removeTestCase,
                updateCurrentTestCase,
                resetTestCases,
            }}
        >
            {children}
        </ProblemContext.Provider>
    )

}

export function useProblemContext() {
    return useContext(ProblemContext)
}
