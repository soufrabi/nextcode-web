"use client";

import Image from "next/image";
import { useParams } from "next/navigation"
import { Editor } from "@monaco-editor/react";

function LeftPart() {
    const problemNumber = "1"
    const problemName = "Two Sum"
    return (
        <div className="p-2" style={{ height: "95vh" }} >
            <div className="bg-slate-100 p-2">
                <div className="flex gap-4 pb-2 px-1">
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/description-icon.png"
                            alt="description"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm"> Description </span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/book-icon.png"
                            alt="editorial"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm"> Editorial </span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/chemistry-icon.png"
                            alt="solution"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm"> Solutions </span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/history-icon.png"
                            alt="submission"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm"> Submissions </span>
                    </button>

                </div>
                <div className="bg-white p-4">
                    <span className="text-2xl font-semibold">{problemNumber}. {problemName}</span>

                    <div className="text-sm pt-4">
                        Given an array of integers nums and an integer <span className="bg-slate-100 px-2 py-1">target</span>, return indices of the two numbers such that they add up to <span className="bg-slate-100 px-2 py-1"> target </span> .<br /><br />
                        You may assume that each input would have <span className="font-bold">exactly one solution</span>, and you may not use the same element twice.<br /><br />

                        You can return the answer in any order.<br /><br />
                    </div>

                    <div>
                        <span className="font-semibold">Example 1:</span> <br/>
                        <div className="border-l-[1px] border-l-gray-300 pl-4 mt-4">
                            <span className="font-medium">Input: </span> <span className="text-sm text-gray-600"> nums = [2,7,11,15], target = 9 </span> <br />
                            <span className="font-medium">Output: </span> <span className="text-sm text-gray-600"> [0,1] </span> <br />
                            <span className="font-medium">Explanation: </span> <span className="text-sm text-gray-600"> Because nums[0] + nums[1] == 9, we return [0, 1]. </span> <br />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}



function CodeEditor() {
    const cppDefaultValue = `#include <bits/stdc++.h>
using namespace std;

int main(int argc, char** argv) {

    return 0;
}
`
    return (
        <div className="p-2">
            <div className="bg-slate-100 py-2 pl-2">
                <button className="flex gap-1 items-center">
                    <Image
                        src="/coding-icon.png"
                        alt="code"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm"> Code </span>
                </button>

            </div>
            <div>
                <Editor
                    height="50vh"
                    // defaultLanguage="javascript"
                    // defaultValue='Deno.serve(req => new Response("Hello"));'
                    defaultLanguage="cpp"
                    defaultValue={cppDefaultValue}
                />
            </div>
        </div>
    )
}

function TestCasePanel() {
    return (
        <div className="p-2">
            <div className="bg-slate-100 flex gap-4 py-2 px-2">
                <button className="flex gap-1 items-center">
                    <Image
                        src="/check-box-icon.png"
                        alt="testcase"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm"> Testcase </span>
                </button>

                <button className="flex gap-1 items-center">
                    <Image
                        src="/book-icon.png"
                        alt="editorial"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm"> Test Result </span>
                </button>

            </div>
            <div className="bg-white">
                Test Case Panel
            </div>
        </div>
    )
}
function RightPart() {
    return (
        <div className="flex flex-col">
            <CodeEditor />
            <TestCasePanel />
        </div>
    )
}


function NavBar() {
    return (
        // <nav className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]" w-[92%]>
        <div className="w-full px-6">
            <nav className="flex justify-between items-center mx-auto bg-[f0f0f0] h-12">
                <div className="flex items-center gap-4">
                    <button>
                        <Image
                            src="/leetcode-logo.png"
                            alt="Leetcode Logo"
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="flex gap-3 items-center">
                        <button>
                            <Image
                                src="/playlist-symbolic.svg"
                                alt="problem list"
                                width={20}
                                height={20}
                            />
                        </button>
                        <span>Problem List</span>
                        <button>
                            <Image
                                src="/left-small-symbolic.svg"
                                alt="previous problem"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button>
                            <Image
                                src="/right-small-symbolic.svg"
                                alt="next problem"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button>
                            <Image
                                src="/playlist-shuffle-symbolic.svg"
                                alt="previous problem"
                                width={18}
                                height={18}
                            />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="">
                        <Image
                            src="/debug-insect-symbol.png"
                            alt="Debug"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/play-symbolic.svg"
                            alt="Run"
                            width={20}
                            height={20}
                        />
                        <span>Run</span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/cloud-computing.png"
                            alt="Submit"
                            width={20}
                            height={20}
                        />
                        <span>Submit</span>
                    </button>
                    <button className="">
                        <Image
                            src="/pen-and-paper-notes-symbol.png"
                            alt="Notes"
                            width={16}
                            height={17}
                        />

                    </button>
                </div>
                <div className="flex gap-4 items-center">
                    <button>
                        <Image
                            src="/touchpad-symbolic.svg"
                            alt="layouts"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button>
                        <Image
                            src="/settings-symbolic.svg"
                            alt="settings"
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="flex gap-2">
                        <button className="">
                            <span className="text-gray-600">Register</span>
                        </button>
                        <div>
                            <span className="text-gray-600"> or </span>
                        </div>
                        <button className="">
                            <span className="text-gray-600">Sign in</span>
                        </button>
                    </div>
                    <button className="px-2 py-1 bg-yellow-50 text-orange-400">
                        <span>Premium</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default function ProblemPage() {
    const params = useParams<{ id: string }>()

    return (
        <main className="bg-slate-200">
            <NavBar />
            {/* Leetcode ProblemPage {params.id} */}
            <div className="w-full grid grid-cols-2 gap-0">
                <LeftPart />
                <RightPart />
            </div>
        </main>
    )
}
