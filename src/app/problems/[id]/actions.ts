"use server"

import { ProgrammingLanguage } from "@/lib/editor/types"
import { TestCaseData } from "./types"

const testCaseList: Array<TestCaseData> = [
    {
        id: "1",
        input: "5 8\n1 2 3 4 5",
        output: "",
    },
    {
        id: "2",
        input: "4 3\n2 4 6 8",
        output: "",
    },
]


export async function getTestCaseDefaultList(problemId: string) {
    return testCaseList
}

export async function getProgrammingLanguages(problemId: string): Promise<Array<ProgrammingLanguage>> {
    return [
        {
            id: 1,
            name: "Python (cpython 3.12)",
            monaco: "python",
            available: true,
        }
    ]
}

const pythonDefaultBoilerPlate : string = `
class Solution:
    def two_sum(arr:List[int], target:number) -> List[int]:
        # Write your code here
        pass
`

export async function getBoilerPlate(problemId: string, languageId: number) {
    return pythonDefaultBoilerPlate

}

