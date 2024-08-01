"use server"

import clsx from "clsx"
import { nanoid } from "nanoid"
import Link from "next/link"
import { getProblemDataList } from "./actions"


export async function ProblemTable() {

    const problemDataList = await getProblemDataList()

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
