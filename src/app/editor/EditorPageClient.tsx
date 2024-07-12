"use client"

import React from "react"
import Split from "react-split"
import axios, { AxiosResponse } from "axios"
import { MdErrorOutline } from "react-icons/md"
import { IoIosCheckboxOutline } from "react-icons/io"
import { IoTimeOutline } from "react-icons/io5";
import clsx from "clsx"
import { ToastContainer } from "react-toastify";
import type { ProgrammingLanguage } from "@/app/data/editor"
import 'react-toastify/dist/ReactToastify.css';
import { usePlaygroundPreferencesContext } from "../store/PlaygroundPreferencesProvider"
import { NavBar } from "./Navbar"
import { ErrorBox, InputBox, OutputBox } from "./InputOutputErrorBoxes"
import { CodeEditor } from "./CodeEditor"



type RightPartProps = {
    inputTextValue: string,
    stdoutValue: string,
    stderrValue: string,
    setInputTextValue: React.Dispatch<React.SetStateAction<string>>,
    setStdoutValue: React.Dispatch<React.SetStateAction<string>>,
    setStderrValue: React.Dispatch<React.SetStateAction<string>>,
    timeElpased: string,
    setTimeElapsed: React.Dispatch<React.SetStateAction<string>>,
    selectedTab: RightPartTab,
    setSelectedTab: React.Dispatch<React.SetStateAction<RightPartTab>>,
}

enum RightPartTab {
    IO,
    Error,
}

function RightPart(props: RightPartProps) {

    return (
        <>
            <div className="flex flex-col h-full w-full pb-0 pr-1" >
                <div className="w-full flex flex-row pl-0 border-b-gray-200 border-b-2">
                    <button
                        className={clsx("bg-slate-100 dark:bg-slate-800 dark:text-gray-50 px-4 py-1 rounded-lg flex flex-row gap-2 items-center hover:shadow-customhovereffect",
                            {
                                "opacity-50": props.selectedTab != RightPartTab.IO
                            }
                        )}
                        onClick={() => { props.setSelectedTab(RightPartTab.IO) }}
                    >
                        <IoIosCheckboxOutline
                            height={5}
                            width={5}
                            className="fill-green-800"
                        />
                        <span className="text-sm/6">I/O</span>
                    </button>
                    <button
                        className={clsx("bg-slate-100 dark:bg-slate-800 dark:text-gray-50 px-4 py-1 rounded-lg flex flex-row gap-2 items-center hover:shadow-customhovereffect",
                            {
                                "opacity-50": props.selectedTab != RightPartTab.Error
                            }
                        )}
                        onClick={() => { props.setSelectedTab(RightPartTab.Error) }}
                    >
                        <MdErrorOutline
                            height={5}
                            width={5}
                            className="fill-red-800"
                        />
                        <span className="text-sm/6">Error</span>
                    </button>
                </div>
                <div className="w-full h-full dark:bg-black dark:text-white">
                    {props.selectedTab === RightPartTab.IO &&
                        <Split
                            sizes={[50, 50]}
                            minSize={[100, 100]}
                            expandToMin={false}
                            gutterSize={10}
                            gutterAlign="center"
                            snapOffset={30}
                            dragInterval={1}
                            direction="vertical"
                            cursor="row-resize"
                            className="split-vertical w-full h-full "
                        >
                            <InputBox value={props.inputTextValue} setValue={props.setInputTextValue} />
                            <OutputBox value={props.stdoutValue} setValue={props.setStdoutValue} />
                        </Split>
                    }
                    {
                        props.selectedTab === RightPartTab.Error &&
                        <div className="w-full h-full">
                            <ErrorBox value={props.stderrValue} setValue={props.setStderrValue} />
                        </div>
                    }
                </div>
                <div>
                    <div className="flex flex-row gap-2 items-center pl-2 py-2 border-t-gray-200 border-t-2 border-b-gray-200 border-b-2">
                        <IoTimeOutline
                            width={5}
                            height={5}
                            className=""
                        />
                        <div className="font-serif pr-2">Time Elapsed </div>
                        <div className="bg-slate-100 dark:bg-slate-800 dark:text-gray-50 px-2">{props.timeElpased}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export type EditorPageClientProps = {
    programmingLanguageList: Array<ProgrammingLanguage>
}

export function EditorPageClient({ programmingLanguageList }: EditorPageClientProps) {
    const [sourceCodeValue, setSourceCodeValue] = React.useState<string>("")
    const [inputTextValue, setInputTextValue] = React.useState<string>("")
    const [stdoutValue, setStdoutValue] = React.useState<string>("")
    const [stderrValue, setStderrValue] = React.useState<string>("")
    const [timeElpased, setTimeElapsed] = React.useState<string>("nil")
    const [selectedRightPartTab, setSelectedRightPartTab] = React.useState<RightPartTab>(RightPartTab.IO)
    const { compileTimeLimit, executionTimeLimit, bufferMaxSize } = usePlaygroundPreferencesContext()

    const runCodeAction = async (language: ProgrammingLanguage) => {
        const bodyObj = {
            languageId: language.id,
            sourceCode: sourceCodeValue,
            inputText: inputTextValue,
            compileTimeLimit: compileTimeLimit,
            executionTimeLimit: executionTimeLimit,
            bufferMaxSize: bufferMaxSize,
        }

        // console.log("Body of request ", bodyObj)

        try {
            const res: AxiosResponse = await axios.post(
                "/api/v1/run",
                bodyObj,
                {
                    timeout: 7000,
                }
            )
            // console.log(res)


            try {
                // const resData: RunResponse = res.data
                const stdoutValueObtained: string = res.data.stdOut
                const stderrValueObtained: string = res.data.stdErr
                const execErrValueObtained: string = res.data.execErr
                const timeElasedValueObtained: string = res.data.timeElapsed
                const isErrorValueObtained: boolean = res.data.isError
                const errorTypeValueObtained: string = res.data.errorType

                // if (typeof stdoutValueObtained !== 'string') {
                //     console.error("Stdout Value Obtained is not string")
                // }

                // if (typeof stderrValueObtained !== 'string') {
                //     console.error("Stderr Value obtained is not string")
                // }

                // if (typeof timeElasedValueObtained !== 'string') {
                //     console.error("TimeElapsed Value obtained is not string")
                // }

                // if (typeof execErrValueObtained !== 'string') {
                //     console.error("execErrValueObtained is not string")
                // }

                // console.log("Stdout : ", stdoutValueObtained)
                // console.log("Stderr : ", stderrValueObtained)
                setStdoutValue(stdoutValueObtained)
                setStderrValue(stderrValueObtained)
                setTimeElapsed(timeElasedValueObtained)

                if (isErrorValueObtained) {
                    // console.log("ExecErrValue Obtained : ", execErrValueObtained)
                    setSelectedRightPartTab(RightPartTab.Error)
                    setStderrValue(errorTypeValueObtained + "\n" + execErrValueObtained + "\n" + stderrValueObtained)
                } else {
                    // success
                    setSelectedRightPartTab(RightPartTab.IO)

                }
            } catch (err) {
                // console.error(err)
                setSelectedRightPartTab(RightPartTab.Error)
                setStderrValue("Error : failed to parse data coming from server")
            }

            // setStdoutValue(JSON.stringify(res.data))
        } catch (err) {
            // console.error(err)
            if (axios.isAxiosError(err) && err.code === 'ECONNABORTED') {
                setSelectedRightPartTab(RightPartTab.Error)
                setStderrValue("Error : server took too long to respond")
            } else {
                setSelectedRightPartTab(RightPartTab.Error)
                setStderrValue("Error : failed to connect to api server")
            }

        }
    }


    return (
        <main className="h-screen w-screen dark:bg-black dark:text-white">
            <NavBar />
            <div>
                <Split
                    sizes={[50, 50]}
                    minSize={[350, 200]}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="row-resize"
                    className="split-horizontal w-full h-[calc(100vh-5rem)] "
                >
                    <CodeEditor
                        programmingLanguageList={programmingLanguageList}
                        sourceCodeValue={sourceCodeValue}
                        setSourceCodeValue={setSourceCodeValue}
                        runCodeAction={runCodeAction}
                    />
                    <RightPart
                        inputTextValue={inputTextValue}
                        setInputTextValue={setInputTextValue}
                        stdoutValue={stdoutValue}
                        setStdoutValue={setStdoutValue}
                        stderrValue={stderrValue}
                        setStderrValue={setStderrValue}
                        timeElpased={timeElpased}
                        setTimeElapsed={setTimeElapsed}
                        selectedTab={selectedRightPartTab}
                        setSelectedTab={setSelectedRightPartTab}

                    />

                </Split>
            </div>
            <ToastContainer />
        </main >
    )


}


