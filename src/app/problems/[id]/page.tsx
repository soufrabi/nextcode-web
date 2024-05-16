"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation"
import { Editor } from "@monaco-editor/react";
import { nanoid } from "nanoid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";


function TopicsDisclosure(props: { topics: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between">
                            <div className="flex gap-1 items-center">
                                <TagIcon className="h-4 w-4 mr-1" />
                                <span className="text-sm">Topics</span>
                            </div>
                            <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pt-3 flex gap-2">
                                {props.topics.map((topicName: string) => (
                                    <span key={nanoid()} className="bg-slate-100 text-xs px-2 py-1">{topicName}</span>
                                ))
                                }
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}


function HintsDisclosure(props: { index: number, bodyText: string }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between">
                            <div className="flex gap-1 items-center">
                                <LightBulbIcon className="h-4 w-4 mr-1" />
                                <span className="text-sm">Hint {props.index + 1}</span>
                            </div>
                            <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pt-3 flex gap-2">
                                <span className="text-xs px-2 py-1">{props.bodyText}</span>
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}

function LeftPart() {
    const problemNumber = "1"
    const problemName = "Two Sum"
    return (
        <div className="bg-slate-100 p-2 h-full m-2 flex flex-col">
            <div className="flex gap-4 pb-2 px-1 flex-initial">
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
            <div className="bg-white p-4 overflow-y-scroll flex-1 " >
                <span className="text-2xl font-semibold">{problemNumber}. {problemName}</span>

                <div className="text-sm pt-4">
                    Given an array of integers nums and an integer <span className="bg-slate-100 px-2 py-1">target</span>, return indices of the two numbers such that they add up to <span className="bg-slate-100 px-2 py-1"> target </span> .<br /><br />
                    You may assume that each input would have <span className="font-bold">exactly one solution</span>, and you may not use the same element twice.<br /><br />

                    You can return the answer in any order.<br /><br />
                </div>

                <div>
                    <span className="font-semibold">Example 1:</span> <br />
                    <div className="border-l-[1px] border-l-gray-300 pl-4 my-2">
                        <span className="font-medium text-sm">Input: </span> <span className="text-sm text-gray-600"> nums = [2,7,11,15], target = 9 </span> <br />
                        <span className="font-medium text-sm">Output: </span> <span className="text-sm text-gray-600"> [0,1] </span> <br />
                        <span className="font-medium text-sm">Explanation: </span> <span className="text-sm text-gray-600"> Because nums[0] + nums[1] == 9, we return [0, 1]. </span> <br />
                    </div>
                </div>

                <div>
                    <span className="font-semibold">Constraints:</span>
                    <div className="pl-4 my-2">
                        <ul className="text-sm list-disc">
                            <li> <span className="bg-slate-100 px-2 py-1"> {`2 <= nums.length <= 104`} </span> </li>
                            <li> <span className="bg-slate-100 px-2 py-1"> {`-109 <= nums[i] <= 109`} </span>  </li>
                            <li> <span className="bg-slate-100 px-2 py-1" > {`-109 <= target <= 109`} </span> </li>
                            <li> <span className="font-semibold px-2 py-1"> {`Only one valid answer exists.`} </span> </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8 flex gap-4">
                    <div>
                        <span className="text-gray-500 text-xs">Accepted:</span> <span className="text-sm">13.2M</span>
                    </div>
                    <div className="border-r-gray-200 border-r-2" />
                    <div>
                        <span className="text-gray-500 text-xs">Submissions:</span> <span className="text-sm">25M</span>
                    </div>
                    <div className="border-r-gray-200 border-r-2" />
                    <div>
                        <span className="text-gray-500 text-xs">Acceptance Rate:</span> <span className="text-sm">52.5%</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="w-full border-b-slate-100 border-b-2"> </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-3">
                        <TopicsDisclosure topics={["Array", "2-pointer"]} />
                    </div>


                    <div className="w-full border-b-slate-100 border-b-2 pb-3">
                        <HintsDisclosure index={0} bodyText={`A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations`} />
                    </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-3">
                        <HintsDisclosure index={1} bodyText={`The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?`} />
                    </div>
                </div>

                <div className="mt-4  ">
                    <span className="text-xs">Copyright ©️ 2024 Soufrabi All Rights Reserved</span>
                </div>
            </div>

            <div className="flex flex-row gap-2 px-4  py-2 flex-initial">
                <div className="flex flex-row gap-2">
                    <HandThumbUpIcon className="h-5 w-5 " />
                    <span> 5.5K </span>
                </div>
                <div className="flex flex-row gap-2">
                    <HandThumbDownIcon className="h-5 w-5" />
                    <span> 1.6K </span>
                </div>
                <div className="flex flex-row gap-2">
                    <ChatBubbleOvalLeftIcon className="h-5 w-5" />
                    <span> 800 </span>
                </div>
                <div className="ml-4">
                    <StarIcon className="h-5 w-5" />
                </div>
                <div>
                    <QuestionMarkCircleIcon className="h-5 w-5" />
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

function CaseButton(props: { id: number, index: number, removeTestCase: any }) {
    const [closeButtonVisible, setCloseButtonVisible] = React.useState<boolean>(false)
    const handleMouseEnter = () => {
        setCloseButtonVisible(true)
    }

    const handleMouseLeave = () => {
        setCloseButtonVisible(false)
    }

    return (
        <div key={nanoid()} className="bg-slate-100 p-2 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>
                Case {props.index + 1}
            </span>
            <div className="absolute -top-1 -right-1 bg-gray-50 rounded-full hover:bg-slate-300 ">

                <Image
                    src="/close-icon-1.png"
                    alt="editorial"
                    width={10}
                    height={10}
                    onClick={() => { props.removeTestCase(props.id) }}
                    style={
                        { display: closeButtonVisible ? "block" : "none" }
                    }
                />
            </div>
        </div>

    )

}

function TestCasePanel() {
    const [caseList, setCaseList] = React.useState<number[]>([1, 2, 3])

    const addTestCase = () => {
        setCaseList((prevList: number[]) => [...prevList, prevList.length + 1])
    }

    const removeTestCase = (id: number) => {
        setCaseList((prevList: number[]) => prevList.filter((item) => item != id))
    }

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
            <div className="bg-white p-4 ">
                <div className="flex gap-2">
                    {
                        caseList.map((caseButtonId: number, index: number) => {
                            return (
                                <CaseButton key={nanoid()} id={caseButtonId} index={index} removeTestCase={removeTestCase} />
                            )
                        })
                    }

                    <button className="bg-slate-50 p-2" onClick={addTestCase}>
                        +
                    </button>
                </div>

                <div>
                </div>

                <div>

                    <button className="flex gap-1 items-center">
                        <Image
                            src="/coding-icon.png"
                            alt="source-mode"
                            width={20}
                            height={20}
                        />
                        <span className="text-base text-gray-600"> Source </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
function RightPart() {
    return (
        <div className="w-full flex flex-col">
            <CodeEditor />
            <TestCasePanel />
        </div>
    )
}


function NavBar() {
    const params = useParams<{ id: string }>()

    const handleContextMenu = (ev: any) => {
        ev.preventDefault()
        window.open(`https://leetcode.com/problems/${params.id}`, "_blank")
    }

    return (
        <div className="w-full px-6">
            <nav className="flex justify-between items-center mx-auto bg-[f0f0f0] h-12">
                <div className="flex items-center gap-4">
                    <button onContextMenu={handleContextMenu}>
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

    React.useEffect(() => {
        // document.body.style.overflow = "hidden"
    }, [])

    return (
        <main className="bg-slate-200 h-screen w-screen max-h-screen max-w-screen">
            <NavBar />
            <div className="w-full grid grid-cols-2">
                <LeftPart />
                <RightPart />
            </div>
        </main>
    )
}
