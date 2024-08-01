"use server"

enum ProblemDifficultData {
    EASY,
    MEDIUM,
    HARD,
}

type ProblemData = {
    status: string,
    title: string,
    solution: string,
    acceptance: number,
    difficulty: ProblemDifficultData,
    frequency: string,
    titleSlug: string,

}

const problemDataListSample: Array<ProblemData> = [
    {
        status: "",
        title: "1. Two Sum",
        solution: "video",
        acceptance: 75.4,
        difficulty: ProblemDifficultData.EASY,
        frequency: "hidden",
        titleSlug: "two-sum",
    },
    {
        status: "",
        title: "2. Trapping Rain Water",
        solution: "text",
        acceptance: 40.4,
        difficulty: ProblemDifficultData.HARD,
        frequency: "hidden",
        titleSlug: "trapping-rain-water",
    },
    {
        status: "",
        title: "3. Longest Common Subsequence",
        solution: "text",
        acceptance: 34.1,
        difficulty: ProblemDifficultData.MEDIUM,
        frequency: "hidden",
        titleSlug: "trapping-rain-water",
    },
    {
        status: "",
        title: "4. Min Stack",
        solution: "video",
        acceptance: 57.8,
        difficulty: ProblemDifficultData.MEDIUM,
        frequency: "hidden",
        titleSlug: "trapping-rain-water",
    },
]


export async function getProblemDataList(): Promise<Array<ProblemData>> {
    return problemDataListSample
}
