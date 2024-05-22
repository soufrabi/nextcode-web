"use client"

import React from "react"
import Image from "next/image"
import { Editor } from "@monaco-editor/react"
import Split from "react-split"
import { FaPlay } from "react-icons/fa"
import axios, { AxiosResponse } from "axios"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { HiChevronDown } from "react-icons/hi2"
import { MdErrorOutline } from "react-icons/md"
import { IoIosCheckboxOutline } from "react-icons/io"
import { IoTimeOutline } from "react-icons/io5";
import { languageDefaultCodeMap } from "../data/editor"
import clsx from "clsx"


function NavBar() {
    return (
        <div className="w-full h-12 flex flex-row items-center bg-slate-100 px-6 py-4 mb-4">
            <div className="flex flex-row gap-4 items-center">
                <Image
                    src={"/nextcode-logo.png"}
                    alt="nextcode logo"
                    width={25}
                    height={25}

                    className="rounded-2xl"
                />
                <span>
                    NextCode
                </span>

            </div>
        </div>
    )

}

type ProgrammingLanguage = {
    id: number,
    name: string,
    monaco: string,
    defaultCode: string,
    available: boolean,
}


const languageList: Array<ProgrammingLanguage> = [
    { id: 1, name: 'Python 3.11', monaco:"python", defaultCode: languageDefaultCodeMap.python, available: true },
    { id: 2, name: 'C++ 17', monaco:"cpp", defaultCode: languageDefaultCodeMap.cpp, available: true },
    { id: 3, name: 'Java 17', monaco:"java", defaultCode: languageDefaultCodeMap.java, available: true },
    { id: 4, name: 'Go 1.21', monaco:"go", defaultCode: languageDefaultCodeMap.go, available: true },
]

function LanguageSelector(
    props: {
        selectedLanguage: ProgrammingLanguage,
        setSelectedLanguage: React.Dispatch<React.SetStateAction<ProgrammingLanguage>>
    }
) {


    return (
        <div className="">
            <Listbox
                value={props.selectedLanguage}
                onChange={props.setSelectedLanguage}
            >
                <ListboxButton
                    className={"p-2 border-gray-200/75 border-2 text-sm flex flex-row gap-2 items-center hover:shadow-customhovereffect rounded-lg"}
                >
                    <span>
                        {props.selectedLanguage.name}
                    </span>
                    <HiChevronDown
                        width={5}
                        height={5}
                    />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom start"
                    className={"text-sm shadow-lg bg-white rounded-lg"}
                >
                    {
                        languageList.map((language) => (
                            <ListboxOption
                                key={language.id}
                                value={language}
                                disabled={!language.available}
                                className={"p-2 cursor-pointer hover:shadow-customhovereffect"}
                            >
                                <span>{language.name}{language.available ? "" : " (Coming Soon)"}</span>
                            </ListboxOption>

                        ))
                    }
                </ListboxOptions>


            </Listbox>
        </div>
    )
}


type CodeEditorProps = {
    sourceCodeValue : string,
    setSourceCodeValue : React.Dispatch<React.SetStateAction<string>>,
    runCodeAction: (language: ProgrammingLanguage) => Promise<void>,
}



function CodeEditor( { sourceCodeValue, setSourceCodeValue, runCodeAction } : CodeEditorProps) {
    const [selectedLanguage, setSelectedLanguage] = React.useState<ProgrammingLanguage>(languageList[0])

    const handleChange = (newValue: string | undefined) => {

        // event should be passed as the second parameter
        if (newValue) {
            setSourceCodeValue(newValue)
        }
    }

    const handleRunCodeButtonClicked = async () => {
        await runCodeAction(selectedLanguage)
    }

    React.useEffect(()=>{
        setSourceCodeValue(selectedLanguage.defaultCode)
    },[selectedLanguage,setSourceCodeValue])

    return (

        <div
            className="min-h-4 p-4 pt-0 pr-2 h-[calc(100vh-7rem)]"
        >
            <div className="pb-2 flex flex-row justify-between">
                <button
                    className="bg-green-200 px-4 py-2 rounded-2xl flex flex-row gap-2 items-center hover:shadow-customhovereffect"
                    onClick={handleRunCodeButtonClicked}
                >
                    <FaPlay
                        className="h-3 w-3"
                    />
                    <span>
                        Run
                    </span>
                </button>
                <LanguageSelector
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                />

            </div>
            <Editor
                // height="80vh"
                // defaultLanguage="python"
                // defaultValue={selectedLanguage.defaultCode}
                language={selectedLanguage.monaco}
                value={sourceCodeValue}
                onChange={handleChange}
                options={{
                    readOnly: false,
                    minimap: {
                        enabled: false,
                    },
                    suggest: {
                        showWords: false,
                    },
                    contextmenu: false,
                }}

                className="min-h-4 border-gray-300 border-2"
            />
        </div>
    )
}

function InputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full">
            <textarea
                className="w-full h-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none focus:border-blue-400 focus:border-2 "
                readOnly={false}
                value={props.value}
                onChange={handleChange}
                placeholder="stdin"
            />
        </div>
    )
}

function OutputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full">
            <textarea
                className="w-full h-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
                placeholder="stdout"
            />
        </div>
    )
}

function ErrorBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full">
            <textarea
                className="w-full h-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
                placeholder="Error Messages will show up here"
            />
        </div>
    )
}

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
            <div className="flex flex-col h-[calc(100vh-5rem)]" >
                <div className="w-full flex flex-row pl-0 border-b-gray-200 border-b-2">
                    <button
                        className={clsx("bg-slate-100 px-4 py-1 rounded-lg flex flex-row gap-2 items-center hover:shadow-customhovereffect",
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
                        className={clsx("bg-slate-100 px-4 py-1 rounded-lg flex flex-row gap-2 items-center hover:shadow-customhovereffect",
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
                <div className="w-full h-full">
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
                        <div className="bg-slate-100 px-2">{props.timeElpased}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

// type RunResponse = {
//     stdOut: string,
//     stdErr: string,
//     execErr: string,
//     timeElapsed: string,
// }

export default function EditorPage() {
    const [sourceCodeValue, setSourceCodeValue] = React.useState<string>("")
    const [inputTextValue, setInputTextValue] = React.useState<string>("")
    const [stdoutValue, setStdoutValue] = React.useState<string>("")
    const [stderrValue, setStderrValue] = React.useState<string>("")
    const [timeElpased, setTimeElapsed] = React.useState<string>("nil")
    const [selectedRightPartTab, setSelectedRightPartTab] = React.useState<RightPartTab>(RightPartTab.IO)

    const runCodeAction = async (language: ProgrammingLanguage) => {
        const bodyObj = {
            sourceCode: sourceCodeValue,
            inputText: inputTextValue,
            timeLimit: 3000,
            language: language.name,
        }

        try {
            const res: AxiosResponse = await axios.post(
                "/api/v1/run",
                bodyObj
            )
            // console.log(res)


            try {
                // const resData: RunResponse = res.data
                const stdoutValueObtained: string = res.data.stdOut
                const stderrValueObtained: string = res.data.stdErr
                const execErrValueObtained: string = res.data.execErr
                const timeElasedValueObtained: string = res.data.timeElapsed

                if (typeof stdoutValueObtained !== 'string') {
                    console.error("Stdout Value Obtained is not string")
                }

                if (typeof stderrValueObtained !== 'string') {
                    console.error("Stderr Value obtained is not string")
                }

                if (typeof timeElasedValueObtained !== 'string') {
                    console.error("TimeElapsed Value obtained is not string")
                }

                if (typeof execErrValueObtained !== 'string') {
                    console.error("execErrValueObtained is not string")
                }

                // console.log("Stdout : ", stdoutValueObtained)
                // console.log("Stderr : ", stderrValueObtained)
                setStdoutValue(stdoutValueObtained)
                setStderrValue(stderrValueObtained)
                setTimeElapsed(timeElasedValueObtained)

                if (execErrValueObtained === "") {
                    setSelectedRightPartTab(RightPartTab.IO)
                } else {
                    // console.log("ExecErrValue Obtained : ", execErrValueObtained)
                    setSelectedRightPartTab(RightPartTab.Error)
                    setStderrValue(execErrValueObtained + "\n" + stderrValueObtained)

                }
            } catch (err) {
                // console.error(err)
                setSelectedRightPartTab(RightPartTab.Error)
                setStderrValue("Error : Could not parse data coming from server")
            }

            // setStdoutValue(JSON.stringify(res.data))
        } catch (err) {
            setSelectedRightPartTab(RightPartTab.Error)
            setStderrValue("Error : Could not connect to api server")
            // console.error(err)


        }
    }

    return (
        <main className="h-screen w-screen">
            <NavBar />
            <div>
                <Split
                    sizes={[50, 50]}
                    minSize={[100, 100]}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="row-resize"
                    className="split-horizontal w-full h-full "
                >
                    <CodeEditor sourceCodeValue={sourceCodeValue} setSourceCodeValue={setSourceCodeValue} runCodeAction={runCodeAction} />
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
        </main>
    )


}
