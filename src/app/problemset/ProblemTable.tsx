import clsx from "clsx"
import { nanoid } from "nanoid"
import Link from "next/link"

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


export function ProblemTable() {

    const problemDataList: Array<ProblemData> = [
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

    return (
        <div>
            <table>
                <thead>
                    <tr
                        className="bg-gray-50"
                    >
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Status</span>
                        </th>
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Title</span>
                        </th>
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Solution</span>
                        </th>
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Acceptance</span>
                        </th>
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Difficulty</span>
                        </th>
                        <th
                            className="p-3"
                        >
                            <span
                                className="font-normal text-gray-600"
                            >Frequency</span>
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        problemDataList.map((el, index) => (
                            <tr
                                key={nanoid()}
                                className={clsx("",
                                    { "bg-gray-50/50": ((index & 1) == 0) },
                                    { "bg-gray-100/80": ((index & 1) == 1) }
                                )}
                            >
                                <td
                                    className=""
                                >
                                    {el.status}
                                </td>
                                <td
                                    className="hover:text-blue-600 select-none"
                                >
                                    <Link
                                        href={`/problems/${el.titleSlug}`}
                                    >
                                        <span
                                        >{el.title}</span>
                                    </Link>
                                </td>
                                <td
                                    className="p-3"
                                >
                                    {el.solution}
                                </td>
                                <td
                                    className="p-3"
                                >
                                    {el.acceptance}%
                                </td>
                                <td
                                    className="p-3"
                                >
                                    {el.difficulty}
                                </td>
                                <td
                                    className="p-3"
                                >
                                    {el.frequency}
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )

}
