"use server"

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


