import React from "react";
import { nanoid } from "nanoid";
import { FaPlus } from "react-icons/fa"
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuTerminal } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import type { TestCaseData } from "./types";
import { TestCasePanelTab } from "./types";
import { useProblemContext } from "@/app/providers/ProblemProvider";

type TestCasePanelProps = {
    testCaseDefaultList: Array<TestCaseData>,
}

function CaseButton(props: {
    testCaseId: string,
    testCaseIndex: number,
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
                Case {props.testCaseIndex + 1}
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

type TestCasePanelEditorProps = {
    testCaseList: Array<TestCaseData>,
    currentTestCaseId: string,
    selectCurrentTestCase: any,
    showAddTestCaseButton: boolean,
    addTestCase: () => void,
    removeTestCase: (id: string) => void,
    handleTextAreaValueChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleResetTestCasesClick: () => void,
}

function TestCasePanelEditor({
    testCaseList,
    currentTestCaseId,
    selectCurrentTestCase,
    showAddTestCaseButton,
    addTestCase,
    removeTestCase,
    handleTextAreaValueChange,
    handleResetTestCasesClick,
}: TestCasePanelEditorProps) {

    return (
        <div className="flex-1 flex flex-col bg-white p-4 pb-2 rounded-bl-2xl rounded-br-2xl">
            <div className="flex flex-row gap-2">
                {
                    testCaseList.map((testCaseData: TestCaseData, index: number) => {
                        return (
                            <CaseButton
                                key={nanoid()}
                                testCaseId={testCaseData.id}
                                testCaseIndex={index}
                                removeTestCase={removeTestCase}
                                selectCurrentTestCase={selectCurrentTestCase}
                                isCurrent={currentTestCaseId === testCaseData.id}
                                canClose={testCaseList.length > 1}
                            />
                        )
                    })
                }
                {
                    showAddTestCaseButton &&
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
                    // ref={inputTextAreaRef}
                    className="flex-1 h-full w-full bg-slate-100 p-3 mt-2 text-sm font-mono rounded-2xl outline-none focus:outline-blue-400 focus:outline-2 overflow-y-visible resize-none"
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={testCaseList.find((testCaseData) => testCaseData.id === currentTestCaseId)?.input}
                    onChange={handleTextAreaValueChange}
                />

            </div>

            <div className="mt-1 flex flex-row gap-4">

                <button className="flex flex-row gap-1 items-center hover:shadow-customhovereffect">
                    <IoCodeSlashOutline className="h-5 w-5" />
                    <span className="text-base text-gray-600"> Source </span>
                </button>
                <button
                    className="hover:shadow-customhovereffect"
                    onClick={handleResetTestCasesClick}
                >
                    <span className="text-base text-gray-500">Reset Testcases</span>
                </button>
            </div>
        </div>

    )
}

export function TestCasePanel({ testCaseDefaultList }: TestCasePanelProps) {
    const MAX_TESTCASES: number = 4
    const {
        testCaseList,
        testCasePanelCurrentTab,
        setTestCasePanelCurrentTab,
        currentTestCaseId,
        setCurrentTestCaseId,
        addTestCase,
        removeTestCase,
        resetTestCases,
        updateCurrentTestCase,
    } = useProblemContext()

    // const inputTextAreaRef: React.Ref<HTMLTextAreaElement> = React.useRef(null)

    // const getCurrentTestCase = (): TestCaseData | null => {
    //     const foundTestCase: TestCaseData | undefined = testCaseList.find((testCaseData) => { return currentTestCaseId === testCaseData.id })
    //     if (foundTestCase) {
    //         return foundTestCase
    //     } else {
    //         return null
    //     }

    // }


    const handleTextAreaValueChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateCurrentTestCase(ev.target.value)
        // setTestCaseList((prevList) => prevList.map((testCaseData) =>
        //     testCaseData.id === currentTestCaseId
        //         ? { ...testCaseData, input: ev.target.value } : testCaseData))
        // const currentTestCaseDataInList: TestCaseData | null = getCurrentTestCase()
        // Warning : modification will not be detected by React
        // since "set" method is not used
        // testCaseList does not need to be "state" variable as we don't want there to be any change in UI when testCaseList changes
        // we simply want it to store the input and output values so that they can be sent to server for remote execution
        // if (currentTestCaseDataInList) {
        //     currentTestCaseDataInList.input = ev.target.value
        // }

    }

    const selectCurrentTestCase = (id: string) => {
        setCurrentTestCaseId(id)
    }

    const handleResetTestCasesClick = () => {
        resetTestCases()
        // console.log("Reset TestCases button clicked")
    }

    // React.useEffect(() => {
    //     const currentTestCaseInList: TestCaseData | null = getCurrentTestCase()
    //     if (inputTextAreaRef && inputTextAreaRef.current && currentTestCaseInList) {
    //         inputTextAreaRef.current.value = currentTestCaseInList.input
    //     }
    // }, [currentTestCaseId])

    return (
        <div id="testcase-panel" className="h-full flex flex-col overflow-auto">
            <div className="bg-slate-100 flex gap-0 py-0 px-0 rounded-tl-2xl rounded-tr-2xl">
                <button
                    className="flex gap-1 px-3 py-2 items-center hover:shadow-customhovereffect"
                    onClick={() => { setTestCasePanelCurrentTab(TestCasePanelTab.EDITOR) }}
                >
                    <IoIosCheckboxOutline className="h-5 w-5" />
                    <span className="text-sm"> Testcase </span>
                </button>

                <button
                    className="flex gap-1 px-3 py-2 items-center hover:shadow-customhovereffect"
                    onClick={() => { setTestCasePanelCurrentTab(TestCasePanelTab.RESULT) }}
                >
                    <LuTerminal className="h-5 w-5" />
                    <span className="text-sm"> Test Result </span>
                </button>

            </div>
            {
                testCasePanelCurrentTab === TestCasePanelTab.EDITOR &&
                <TestCasePanelEditor
                    testCaseList={testCaseList}
                    currentTestCaseId={currentTestCaseId}
                    selectCurrentTestCase={selectCurrentTestCase}
                    showAddTestCaseButton={testCaseList.length < MAX_TESTCASES}
                    addTestCase={addTestCase}
                    removeTestCase={removeTestCase}
                    handleTextAreaValueChange={handleTextAreaValueChange}
                    handleResetTestCasesClick={handleResetTestCasesClick}
                />
            }
            {
                testCasePanelCurrentTab === TestCasePanelTab.RESULT &&
                <div>
                </div>
            }
        </div>
    )
}
