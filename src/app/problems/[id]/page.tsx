"use client";

import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";
import { Editor } from "@monaco-editor/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { HiOutlineBuildingOffice2, HiOutlineTag } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { HiOutlineHandThumbDown } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiPlayList2Fill } from "react-icons/ri";
import { RiShuffleFill } from "react-icons/ri";
import { VscDebug } from "react-icons/vsc";
import { FaPlay, FaPlus } from "react-icons/fa"
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuTerminal } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Split from "react-split";
import { Media } from "../../components/media"
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticateOrUserProfileComponent } from "@/app/components/AuthenticateOrUserProfileComponent";
import { PremiumButton } from "@/app/components/PremiumButton";



function TopicsDisclosure(props: { topics: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineTag className="h-4 w-4 mr-1" />
                                <span className="text-sm">Topics</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
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

function CompaniesDisclosure(props: { companiesList: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineBuildingOffice2 className="h-4 w-4 mr-1" />
                                <span className="text-sm">Companies</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
                                {props.companiesList.map((companyName: string) => (
                                    <span key={nanoid()} className="bg-slate-100 text-xs px-2 py-1">{companyName}</span>
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
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineLightBulb className="h-4 w-4 mr-1" />
                                <span className="text-sm">Hint {props.index + 1}</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
                                <span className="text-xs px-2 py-1">{props.bodyText}</span>
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}

enum LeftPartTabType {
    DESCRIPTION,
    EDITORIAL,
    SOLUTIONS,
    SUBMISSIONS,
}

function LeftPart() {
    const problemNumber = "1"
    const problemName = "Two Sum"
    const [currentActiveTab, setCurrentActiveTab] = React.useState<LeftPartTabType>(LeftPartTabType.DESCRIPTION)
    return (
        <div className="bg-slate-100 h-full w-full md:pl-2 rounded-2xl">
            <div className="flex justify-around md:justify-start gap-4 overflow-x-clip">
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect ${currentActiveTab !== LeftPartTabType.DESCRIPTION ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.DESCRIPTION) }}
                >
                    <MdOutlineDescription className="h-5 w-5 hidden md:block" />
                    <span className="text-xs md:text-sm"> Description </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect ${currentActiveTab !== LeftPartTabType.EDITORIAL ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.EDITORIAL) }}
                >
                    <Image
                        src="/assets/book-icon-32x32.jpeg"
                        alt="editorial"
                        width={20}
                        height={20}
                        className="hidden md:block"
                    />
                    <span className="text-xs md:text-sm"> Editorial </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect  ${currentActiveTab !== LeftPartTabType.SOLUTIONS ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.SOLUTIONS) }}
                >
                    <Image
                        src="/assets/chemistry-icon-32x32.jpeg"
                        alt="solution"
                        width={20}
                        height={20}
                        className="hidden md:block"
                    />
                    <span className="text-xs md:text-sm"> Solutions </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect  ${currentActiveTab !== LeftPartTabType.SUBMISSIONS ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.SUBMISSIONS) }}
                >
                    <GoHistory className="h-5 w-5 hidden md:block" />
                    <span className="text-xs md:text-sm"> Submissions </span>
                </button>

            </div>
            <div className="bg-white p-4 overflow-y-scroll h-[calc(100vh-8rem)] " >
                <span className="text-2xl font-semibold">{problemNumber}. {problemName}</span>

                <div className="flex flex-row gap-2 mt-4">
                    <div>
                        <span className="text-xs text-green-600 bg-slate-100 px-2 py-1">Easy</span>
                    </div>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineTag className="h-4 w-4" />
                        <span className="text-xs">Topics</span>
                    </button>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineBuildingOffice2 className="h-4 w-4" />
                        <span className="text-xs">Companies</span>
                    </button>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineLightBulb className="h-4 w-4" />
                        <span className="text-xs">Hint</span>
                    </button>
                </div>

                <div className="text-sm pt-4">
                    Given an array of integers nums and an integer <span className="bg-slate-100 px-2 py-1">target</span>, return indices of the two numbers such that they add up to <span className="bg-slate-100 px-2 py-1"> target </span> .<br /><br />
                    You may assume that each input would have <span className="font-bold">exactly one solution</span>, and you may not use the same element twice.<br /><br />

                    You can return the answer in any order.<br /><br />
                </div>

                <div className="mt-6">
                    <span className="font-semibold">Example 1:</span> <br />
                    <div className="border-l-[1px] border-l-gray-300 pl-4 my-2">
                        <span className="font-medium text-sm">Input: </span> <span className="text-sm text-gray-600"> nums = [2,7,11,15], target = 9 </span> <br />
                        <span className="font-medium text-sm">Output: </span> <span className="text-sm text-gray-600"> [0,1] </span> <br />
                        <span className="font-medium text-sm">Explanation: </span> <span className="text-sm text-gray-600"> Because nums[0] + nums[1] == 9, we return [0, 1]. </span> <br />
                    </div>
                </div>

                <div>
                    <span className="font-semibold">Example 2:</span> <br />
                    <div className="border-l-[1px] border-l-gray-300 pl-4 my-2">
                        <span className="font-medium text-sm">Input: </span> <span className="text-sm text-gray-600"> nums = [3,2,4], target = 6 </span> <br />
                        <span className="font-medium text-sm">Output: </span> <span className="text-sm text-gray-600"> [1,2] </span> <br />
                    </div>
                </div>

                <div className="mt-8">
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

                <div className="flex flex-col gap-0">
                    <div className="w-full border-b-slate-100 border-b-2"> </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <TopicsDisclosure topics={["Array", "2-pointer"]} />
                    </div>
                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <CompaniesDisclosure companiesList={["Google", "Microsoft"]} />
                    </div>


                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <HintsDisclosure index={0} bodyText={`A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations`} />
                    </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <HintsDisclosure index={1} bodyText={`The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?`} />
                    </div>
                </div>

                <div className="mt-4  ">
                    <span className="text-xs">Copyright ©️ 2024 Soufrabi All Rights Reserved</span>
                </div>
            </div>

            <Media greaterThanOrEqual="md">
                <div className="flex flex-row gap-4 pl-2 pt-2 h-8">
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineHandThumbUp className="h-5 w-5 " />
                        <span> 5.5K </span>
                    </button>
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineHandThumbDown className="h-5 w-5" />
                        <span> 1.6K </span>
                    </button>
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineChatBubbleOvalLeft className="h-5 w-5" />
                        <span> 800 </span>
                    </button>
                    <button className="ml-4 hover:shadow-customhovereffect">
                        <HiOutlineStar className="h-5 w-5" />
                    </button>
                    <button className="hover:shadow-customhovereffect">
                        <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
                    </button>
                    <button className="hover:shadow-customhovereffect">
                        <HiOutlineQuestionMarkCircle className="h-5 w-5" />
                    </button>
                </div>
            </Media>
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

    const [value, setValue] = React.useState("")

    const handleChange = (newValue: string | undefined) => {
        // event should be passed as the second parameter
        if (newValue) {
            setValue(newValue)
        }
        // console.log(value)
    }

    return (
        <div className="h-full pb-9">
            <div className="bg-slate-100 rounded-tl-2xl rounded-tr-2xl">
                <button className="flex gap-1 px-2 py-2 items-center hover:shadow-customhovereffect">
                    <IoCodeSlashOutline className="h-5 w-5" />
                    <span className="text-sm"> Code </span>
                </button>

            </div>
            <div className="h-full min-h-4">
                <Editor
                    // height="12rem"
                    // height="50vh"
                    // defaultLanguage="javascript"
                    // defaultValue='Deno.serve(req => new Response("Hello"));'
                    value={value}
                    onChange={handleChange}
                    defaultLanguage="cpp"
                    defaultValue={cppDefaultValue}
                    options={{
                        readOnly: false,
                        minimap: {
                            enabled: false
                        },
                        suggest: {
                            showWords: false,
                        },
                        contextmenu: false,
                        // fixedOverflowWidgets: true,
                    }}

                    className="min-h-4 "
                />
            </div>
        </div>
    )
}

type TestCaseData = {
    id: string,
    input: string,
    output: string,
}

function CaseButton(props: {
    testCaseId: string,
    index: number,
    isCurrent: boolean,
    canClose: boolean,
    removeTestCase: (id: string) => void,
    selectCurrentTestCase: (id: string) => void
}) {
    const [closeButtonVisible, setCloseButtonVisible] = React.useState<boolean>(false)
    const handleMouseEnter = () => {
        setCloseButtonVisible(true)
    }

    const handleMouseLeave = () => {
        setCloseButtonVisible(false)
    }

    const handleCaseButtonClick = () => {
        props.selectCurrentTestCase(props.testCaseId)
    }

    const handleCloseButtonClick = (ev: React.MouseEvent<SVGElement>) => {
        ev.stopPropagation()
        props.removeTestCase(props.testCaseId)
    }

    return (
        <div
            key={nanoid()}
            className={`p-2 relative cursor-pointer hover:shadow-customhovereffect ${props.isCurrent ? "bg-slate-200" : "bg-slate-50"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCaseButtonClick}
        >
            <span>
                Case {props.index + 1}
            </span>
            {
                props.canClose &&
                <div className={"absolute -top-1 -right-1 bg-gray-50 rounded-full hover:bg-slate-300 "}>
                    <IoMdCloseCircle
                        className={`h-3.5 w-3.5 rounded-2xl opacity-40 ${closeButtonVisible ? "block" : "hidden"}`}
                        onClick={handleCloseButtonClick}
                    />
                </div>
            }
        </div>

    )

}

function TestCasePanel() {
    const MAX_TESTCASES: number = 4
    const [testCaseList, setTestCaseList] = React.useState<TestCaseData[]>([
        { id: nanoid(), input: "", output: "", },
    ]);

    const [currentTestCaseId, setCurrentTestCaseId] = React.useState<string>(testCaseList[testCaseList.length - 1].id)
    const inputTextAreaRef: React.Ref<HTMLTextAreaElement> = React.useRef(null)

    const getCurrentTestCase = (): TestCaseData | null => {
        const foundTestCase: TestCaseData | undefined = testCaseList.find((testCaseData) => { return currentTestCaseId === testCaseData.id })
        if (foundTestCase) {
            return foundTestCase
        } else {
            return null
        }

    }

    const addTestCase = () => {
        if (testCaseList.length < 6) {
            setTestCaseList((prevList: TestCaseData[]) => [...prevList, { id: nanoid(), input: "", output: "" }])
        } else {
            // not needed  as UI add button becomes visible only when testCaseList.length exceeds 6
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
            if (id == currentTestCaseId) {
                setCurrentTestCaseId(testCaseList[testCaseList.length - 1].id)

            }
        } else {
            // not needed as UI closeButton becomes visible only when testCaseList.length > 1
            // toast('Must have atleast 1 testcase', {
            //     position: 'bottom-right',
            //     type: 'warning',
            //     autoClose: 2000
            // })
        }
    }


    const handleTextAreaValueChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentTestCaseDataInList: TestCaseData | null = getCurrentTestCase()
        // Warning : modification will not be detected by React
        // since "set" method is not used
        // testCaseList does not need to be "state" variable as we don't want there to be any change in UI when testCaseList changes
        // we simply want it to store the input and output values so that they can be sent to server for remote execution
        if (currentTestCaseDataInList) {
            currentTestCaseDataInList.input = ev.target.value
        }

    }

    const selectCurrentTestCase = (id: string) => {
        setCurrentTestCaseId(id)
    }

    React.useEffect(() => {
        const currentTestCaseInList: TestCaseData | null = getCurrentTestCase()
        if (inputTextAreaRef && inputTextAreaRef.current && currentTestCaseInList) {
            inputTextAreaRef.current.value = currentTestCaseInList.input
        }
    }, [currentTestCaseId])

    return (
        <div id="testcase-panel" className="h-full flex flex-col overflow-auto">
            <div className="bg-slate-100 flex gap-0 py-0 px-0 rounded-tl-2xl rounded-tr-2xl">
                <button className="flex gap-1 px-3 py-2 items-center hover:shadow-customhovereffect">
                    <IoIosCheckboxOutline className="h-5 w-5" />
                    <span className="text-sm"> Testcase </span>
                </button>

                <button className="flex gap-1 px-3 py-2 items-center hover:shadow-customhovereffect">
                    <LuTerminal className="h-5 w-5" />
                    <span className="text-sm"> Test Result </span>
                </button>

            </div>
            <div className="flex-1 flex flex-col bg-white p-4 pb-2 rounded-bl-2xl rounded-br-2xl">
                <div className="flex flex-row gap-2">
                    {
                        testCaseList.map((testCaseData: TestCaseData, index: number) => {
                            return (
                                <CaseButton
                                    key={nanoid()}
                                    testCaseId={testCaseData.id}
                                    index={index}
                                    removeTestCase={removeTestCase}
                                    selectCurrentTestCase={selectCurrentTestCase}
                                    isCurrent={currentTestCaseId === testCaseData.id}
                                    canClose={testCaseList.length > 1}
                                />
                            )
                        })
                    }
                    {
                        testCaseList.length < MAX_TESTCASES &&
                        <button
                            className="bg-slate-50 p-2 hover:shadow-customhovereffect"
                            onClick={addTestCase}
                        >
                            <FaPlus className="h-3 w-3" />
                        </button>
                    }
                </div>

                <div className="flex-1 flex flex-col mt-2">
                    <div>
                        <span className="text-gray-600 text-sm"> Input = </span>
                    </div>
                    <textarea
                        ref={inputTextAreaRef}
                        className="flex-1 h-full w-full bg-slate-100 p-3 mt-2 text-sm font-mono rounded-2xl outline-none focus:outline-blue-400 focus:outline-2 overflow-y-visible resize-none"
                        onChange={handleTextAreaValueChange}
                    />

                </div>

                <div className="mt-1 flex flex-row gap-4">

                    <button className="flex flex-row gap-1 items-center hover:shadow-customhovereffect">
                        <IoCodeSlashOutline className="h-5 w-5" />
                        <span className="text-base text-gray-600"> Source </span>
                    </button>
                    <button className="hover:shadow-customhovereffect">
                        <span className="text-base text-gray-500">Reset Testcases</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
function RightPart() {
    // const handleDrag = (sizes:number[])=>{
    //     console.log(sizes)
    // }
    return (
        <>
            {
                <div className="h-[calc(100vh-4rem)]">
                    <Split
                        sizes={[60, 40]}
                        minSize={[50, 35]}
                        expandToMin={false}
                        gutterSize={10}
                        gutterAlign="center"
                        snapOffset={30}
                        dragInterval={1}
                        direction="vertical"
                        cursor="col-resize"
                        className="split-vertical w-full h-full "
                    // onDrag={handleDrag}
                    >
                        <CodeEditor />
                        <TestCasePanel />
                    </Split>
                </div >
            }
            {
                // <div className={`w-full md:flex md:flex-col hidden p-1 mr-1 max-h-screen`}>
                // <CodeEditor />
                // <TestCasePanel />
                // </div>
            }
        </>
    )
}


function NavBar() {

    return (
        <nav className="flex justify-center md:justify-between items-center md:mx-auto bg-[f0f0f0] h-12 w-full px-6">
            <div className="flex items-center gap-4">
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <Image
                        src="/assets/nextcode-logo-32x32.jpeg"
                        alt="NextCode Logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                    />
                </Link>
                <div className="hidden md:flex gap-0 items-center">
                    <Link
                        href={"/problemset"}
                        className="flex flex-row gap-2 items-center px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <RiPlayList2Fill className="h-4 w-4" />
                        <span className="text-sm">Problem List</span>
                    </Link>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        < HiChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        < HiChevronRight className="h-5 w-5" />
                    </button>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        <RiShuffleFill className="h-5 w-5" />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex md:flex-row gap-0">
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <VscDebug className="h-4 w-4" />
                </button>
                <button className="px-2 py-1 flex gap-2 items-center hover:shadow-customhovereffect">
                    <FaPlay className="h-3 w-3" />
                    <span className="text-sm">Run</span>
                </button>
                <button className="px-2 py-1 flex gap-2 items-center hover:shadow-customhovereffect">
                    <MdOutlineCloudUpload className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-600">Submit</span>
                </button>
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <Image
                        src="/assets/pen-and-paper-notes-symbol-32x32.jpeg"
                        alt="Notes"
                        width={16}
                        height={17}
                    />

                </button>
            </div>
            <div className="hidden md:flex gap-2 items-center">
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <MdOutlineDashboard className="h-5 w-5" />
                </button>
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <IoSettingsOutline className="h-5 w-5" />
                </button>
                <AuthenticateOrUserProfileComponent />
                <PremiumButton />
            </div>
        </nav>
    )
}


export default function ProblemPage() {
    React.useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return (
            <main className="bg-slate-200 h-screen w-screen max-h-screen max-w-screen">
                <NavBar />
                <div className="">
                    <Media at="sm">
                        <LeftPart />
                    </Media>
                    <Media greaterThanOrEqual="md">
                        <Split
                            sizes={[50, 50]}
                            minSize={200}
                            expandToMin={false}
                            gutterSize={10}
                            gutterAlign="center"
                            snapOffset={30}
                            dragInterval={1}
                            direction="horizontal"
                            cursor="col-resize"
                            className="split-horizontal"
                        >
                            <LeftPart />
                            <RightPart />
                        </Split>
                    </Media>
                </div>
                <ToastContainer />
            </main >
    )
}
