"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Editor } from "@monaco-editor/react"
import Split from "react-split"
import { FaPlay } from "react-icons/fa"
import axios, { AxiosResponse } from "axios"
import { Input, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { MdErrorOutline } from "react-icons/md"
import { IoIosCheckboxOutline } from "react-icons/io"
import { IoTimeOutline, IoSettingsOutline } from "react-icons/io5";
import { BiCodeCurly } from "react-icons/bi";
import clsx from "clsx"
import { ToastContainer, toast } from "react-toastify";
import { Dialog, DialogPanel, DialogTitle, Switch } from '@headlessui/react'
import type { ProgrammingLanguage, BoilerPlateCode } from "@/app/data/editor"
import { programmingLanguageList, boilerPlateCodeMap } from "@/app/data/editor"
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid"

type TemplateSelectorProps = {
    boilerPlateCodeMapForSelectedLanguage: { [key: string]: BoilerPlateCode },
    selectedBoilerPlateCode: BoilerPlateCode,
    setSelectedBoilerPlateCode: React.Dispatch<React.SetStateAction<BoilerPlateCode>>,
}

type SettingsModalComponentProps = {
    compileTimeLimit: number,
    setCompileTimeLimit: React.Dispatch<React.SetStateAction<number>>,
    compileTimeLimitMinValue: number,
    compileTimeLimitMaxValue: number,
    executionTimeLimit: number,
    setExecutionTimeLimit: React.Dispatch<React.SetStateAction<number>>,
    executionTimeLimitMinValue: number,
    executionTimeLimitMaxValue: number,
}



function NavBar() {
    const router = useRouter()
    return (
        <div className="w-full h-12 flex flex-row items-center bg-slate-100 px-6 py-4 mb-4">
            <div
                className="flex flex-row gap-4 items-center cursor-pointer"
                onClick={() => { router.push("/") }}
            >
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

function SettingsModalComponent({
    compileTimeLimit,
    setCompileTimeLimit,
    compileTimeLimitMinValue,
    compileTimeLimitMaxValue,
    executionTimeLimit,
    setExecutionTimeLimit,
    executionTimeLimitMinValue,
    executionTimeLimitMaxValue,
}: SettingsModalComponentProps
) {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isCpModeOn, setIsCpModeOn] = React.useState(false)

    const handleCompileTimeLimitChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // check if the string can be converted to number
        const num = parseInt(ev.target.value)
        if (num) {
            if (compileTimeLimitMinValue <= num && num <= compileTimeLimitMaxValue) {
                setCompileTimeLimit(num)
            }
        }
    }

    const handleExecutionTimeLimitChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // check if the string can be converted to number
        const num = parseInt(ev.target.value)
        if (num) {
            if (executionTimeLimitMinValue <= num && num <= executionTimeLimitMaxValue) {
                setExecutionTimeLimit(num)
            }
        }

    }

    return (
        <>
            <button
                className="p-2 bg-slate-50 rounded-sm"
                onClick={() => setIsOpen(true)}
            >
                <IoSettingsOutline
                    className="w-6 h-6"
                />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="text-lg font-bold">Settings</DialogTitle>
                        <div className="flex flex-row gap-4 justify-between">
                            <div className="text-sm">CP mode</div>
                            <Switch
                                checked={isCpModeOn}
                                onChange={setIsCpModeOn}
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                            >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                            </Switch>
                        </div>
                        <div className="flex flex-row gap-6 justify-between">
                            <div className="text-sm">Compile Time Limit (in milliseconds)</div>
                            <Input
                                type="number"
                                min={compileTimeLimitMinValue}
                                max={compileTimeLimitMaxValue}
                                step={100}
                                className="w-fit text-right"
                                value={compileTimeLimit}
                                onChange={handleCompileTimeLimitChange}
                            />
                        </div>
                        <div className="flex flex-row gap-6 justify-between">
                            <div className="text-sm">Execution Time Limit (in milliseconds)</div>
                            <Input
                                type="number"
                                min={executionTimeLimitMinValue}
                                max={executionTimeLimitMaxValue}
                                step={100}
                                className="w-fit text-right"
                                value={executionTimeLimit}
                                onChange={handleExecutionTimeLimitChange}
                            />
                        </div>
                        <div className="flex flex-row gap-6">
                            <button onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}


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
                    className={"text-sm shadow-lg bg-white rounded-lg z-20"}
                >
                    {
                        programmingLanguageList.map((language) => (
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

function TemplateSelector({ boilerPlateCodeMapForSelectedLanguage, selectedBoilerPlateCode, setSelectedBoilerPlateCode }: TemplateSelectorProps) {
    return (
        <Listbox
            value={selectedBoilerPlateCode}
            onChange={setSelectedBoilerPlateCode}
        >
            <ListboxButton
                className="py-2 px-3 bg-sky-100 rounded-md flex flex-row gap-2 justify-center items-center"
            >
                <span
                    className="font-medium"
                >Template</span>
                <HiChevronUp
                    className="w-4 h-4"
                />
            </ListboxButton>
            <ListboxOptions
                anchor="top end"
                className={"text-sm bg-white rounded-lg border-gray-100 border-2 z-20"}
            >
                {
                    Object.entries(boilerPlateCodeMapForSelectedLanguage).map(([name, boilerPlate]) => (
                        <ListboxOption
                            key={nanoid()}
                            value={boilerPlate}
                            className={"p-2 cursor-pointer hover:shadow-customhovereffect"}
                        >
                            <span>{name}</span>

                        </ListboxOption>

                    ))

                }
            </ListboxOptions>
        </Listbox>

    )
}


type CodeEditorProps = {
    sourceCodeValue: string,
    setSourceCodeValue: React.Dispatch<React.SetStateAction<string>>,
    runCodeAction: (language: ProgrammingLanguage) => Promise<void>,
    settings: SettingsModalComponentProps,
}



function CodeEditor({ sourceCodeValue, setSourceCodeValue, runCodeAction, settings }: CodeEditorProps) {
    const [selectedLanguage, setSelectedLanguage] = React.useState<ProgrammingLanguage>(programmingLanguageList[1])
    const [selectedBoilerPlateCode, setSelectedBoilerPlateCode] = React.useState<BoilerPlateCode>(boilerPlateCodeMap[selectedLanguage.id]["default"])
    // time and delay are measured in milliseconds
    const [runCodeButtonLastClicked, setRunCodeButtonLastClicked] = React.useState<number | null>(null)
    const delayBetweenConsecutiveRunCodeButtonPresses: number = 3000

    const handleResetCodeButtonClicked = () => {
        setSourceCodeValue(selectedBoilerPlateCode.code)
    }

    const handleChange = (newValue: string | undefined) => {

        // event should be passed as the second parameter
        if (newValue) {
            setSourceCodeValue(newValue)
        }
    }

    const handleRunCodeButtonClicked = async () => {
        const currentTime: number = new Date().getTime()
        if (runCodeButtonLastClicked !== null &&
            currentTime - runCodeButtonLastClicked < delayBetweenConsecutiveRunCodeButtonPresses
        ) {
            toast('You have attempted to run code too soon. Please try again in a few seconds, or Subscribe to reduce wait time', {
                position: 'top-right',
                type: 'warning',
                autoClose: 2000,
                className: "text-xs",
            })

        } else {
            setRunCodeButtonLastClicked(currentTime)
            await runCodeAction(selectedLanguage)
        }
    }

    React.useEffect(() => {
        setSelectedBoilerPlateCode(boilerPlateCodeMap[selectedLanguage.id]["default"])
    }, [selectedLanguage, setSelectedLanguage])

    React.useEffect(() => {
        setSourceCodeValue(selectedBoilerPlateCode.code)
    }, [setSourceCodeValue, selectedBoilerPlateCode])

    return (

        <div
            className="flex flex-col pl-2 pb-0 pt-0 pr-2 w-full h-full min-h-4"
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
                <div className="flex flex-row justify-center items-center gap-2">
                    <button
                        className="p-2 bg-slate-50 rounded-sm"
                        onClick={handleResetCodeButtonClicked}
                    >
                        <BiCodeCurly
                            className="w-6 h-6"
                        />

                    </button>
                    <SettingsModalComponent
                        {...settings}
                    />
                    <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />
                </div>

            </div>
            <div className="flex-1 pb-2 overflow-clip">
                <Editor
                    // height="80vh"
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

                    className="min-h-4 border-gray-300 border-2 h-full"
                />
            </div>
            <div className="border-gray-300 border-2 flex flex-row py-2 px-2 justify-end">
                <TemplateSelector
                    boilerPlateCodeMapForSelectedLanguage={boilerPlateCodeMap[selectedLanguage.id]}
                    selectedBoilerPlateCode={selectedBoilerPlateCode}
                    setSelectedBoilerPlateCode={setSelectedBoilerPlateCode}
                />
            </div>
        </div>
    )
}

function InputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full flex flex-col">
            <div className="pl-2 pb-1">
                <span
                    className="text-xs font-mono"
                >Input</span>
            </div>
            <textarea
                className="flex-1 w-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none focus:border-blue-400 focus:border-2 "
                readOnly={false}
                value={props.value}
                onChange={handleChange}
                spellCheck={false}
            // placeholder="stdin"
            />
        </div>
    )
}

function OutputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full flex flex-col">
            <div className="pl-2 pb-1">
                <span
                    className="text-xs font-mono"
                >Output</span>
            </div>
            <textarea
                className="flex-1 w-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
                spellCheck={false}
            // placeholder="stdout"
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
                spellCheck={false}
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
            <div className="flex flex-col h-full w-full pb-0 pr-1" >
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
    const compileTimeLimitMinValue: number = 500
    const compileTimeLimitMaxValue: number = 3000
    const compileTimeLimitDefaultValue: number = 2000
    const executionTimeLimitMinValue: number = 300
    const executionTimeLimitMaxValue: number = 500
    const executionTimeLimitDefaultValue: number = 500
    const [compileTimeLimit, setCompileTimeLimit] = React.useState<number>(compileTimeLimitDefaultValue)
    const [executionTimeLimit, setExecutionTimeLimit] = React.useState<number>(executionTimeLimitDefaultValue)

    const runCodeAction = async (language: ProgrammingLanguage) => {
        const bodyObj = {
            sourceCode: sourceCodeValue,
            inputText: inputTextValue,
            compileTimeLimit: compileTimeLimit,
            executionTimeLimit: executionTimeLimit,
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
                        sourceCodeValue={sourceCodeValue}
                        setSourceCodeValue={setSourceCodeValue}
                        runCodeAction={runCodeAction}
                        settings={{
                            compileTimeLimit: compileTimeLimit,
                            setCompileTimeLimit: setCompileTimeLimit,
                            compileTimeLimitMinValue: compileTimeLimitMinValue,
                            compileTimeLimitMaxValue: compileTimeLimitMaxValue,
                            executionTimeLimit: executionTimeLimit,
                            setExecutionTimeLimit: setExecutionTimeLimit,
                            executionTimeLimitMinValue: executionTimeLimitMinValue,
                            executionTimeLimitMaxValue: executionTimeLimitMaxValue,
                        }}
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
        </main>
    )


}
