"use client"

import Image from "next/image"
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

function NavBar() {
    return (
        <div className="w-full h-12 flex flex-row justify-around py-3 shadow-sm">
            <div className="flex flex-row gap-6 items-center">
                <Link
                    href={"/"}
                    className="cursor-pointer"
                    onContextMenu={(ev: React.MouseEvent) => { ev.preventDefault() }}
                >
                    <Image
                        src={"/nextcode-logo.png"}
                        alt=""
                        width={25}
                        height={25}
                        className="rounded-2xl"
                    />
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Explore</span>
                </Link>
                <Link
                    href={"/problemset"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-black"
                    >Problems</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Contest</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Discuss</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Interview</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Store</span>
                </Link>
            </div>
            <div className="flex flex-row items-center">
                <div className="cursor-pointer">
                    <span
                        className="text-sm text-gray-600"
                    >Sign in</span>
                </div>
            </div>

        </div>
    )
}


function ProblemTable() {

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

export default function ProblemSetPage() {
    return (
        <main>
            <div className="h-screen w-screen">
                <NavBar />
                <div className="h-full w-screen flex justify-center pt-6">
                    <ProblemTable />
                </div>
            </div>

        </main>
    )
}
