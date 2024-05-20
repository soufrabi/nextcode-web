"use client"

import React from "react"
import Image from "next/image"
import { Editor } from "@monaco-editor/react"
import Split from "react-split"
import { FaPlay } from "react-icons/fa"
import axios, { AxiosResponse } from "axios"

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

function CodeEditor(props: { sourceCodeValue: string, setSourceCodeValue: React.Dispatch<React.SetStateAction<string>>, runCodeAction: ()=>Promise<void> }) {
    const pythonDefaultValue = `
print("Hello World from Python")
`

    const handleChange = (newValue: string | undefined) => {

        // event should be passed as the second parameter
        if (newValue) {
            props.setSourceCodeValue(newValue)
        }
    }

    const handleRunCodeButtonClicked = async () => {
        await props.runCodeAction()
    }

    React.useEffect(() => {
        props.setSourceCodeValue(pythonDefaultValue)
    }, [])

    return (

        <div
            className="min-h-4 p-4 pt-0 h-[calc(100vh-7rem)]"
        >
            <div className="pb-2">
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

            </div>
            <Editor
                // height="80vh"
                defaultLanguage="python"
                defaultValue={pythonDefaultValue}
                value={props.sourceCodeValue}
                onChange={handleChange}
                options={{
                    readOnly: false,
                    minimap: {
                        enabled: false,
                    },
                    suggest: {
                        showWords: false,
                    }
                }}

                className="min-h-4 border-black border-2"
            />
        </div>
    )
}

function InputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-2">
            <textarea
                className="w-full h-full bg-slate-100 p-3 text-sm font-mono rounded-2xl outline-none focus:outline-blue-400 focus:outline-2 resize-none"
                readOnly={false}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    )
}

function OutputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-2">
            <textarea
                className="w-full h-full bg-slate-100 p-3 text-sm font-mono rounded-2xl outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
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
    setStderrValue: React.Dispatch<React.SetStateAction<string>>
}

function RightPart(props: RightPartProps) {
    return (
        <>
            <div>
                <Split
                    sizes={[40, 30, 30]}
                    minSize={[100, 100, 100]}
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
                    <OutputBox value={props.stderrValue} setValue={props.setStderrValue} />
                </Split>
            </div>

        </>
    )
}

export default function EditorPage() {
    const [sourceCodeValue, setSourceCodeValue] = React.useState<string>("")
    const [inputTextValue, setInputTextValue] = React.useState<string>("")
    const [stdoutValue, setStdoutValue] = React.useState<string>("")
    const [stderrValue, setStderrValue] = React.useState<string>("")

    const runCodeAction = async () => {
        const bodyObj = {
            sourceCode: sourceCodeValue,
            inputText: inputTextValue,
            timeLimit: 3000,
        }

        try {
            const res: AxiosResponse = await axios.post(
                "/api/v1/run",
                bodyObj
            )
            // console.log(res)


            try {
                const stdoutValueObtained: string = res.data.data.stdout
                const stderrValueObtained: string = res.data.data.stderr

                if (typeof stdoutValueObtained !== 'string') {
                    console.error("Stdout Value Obtained is not string")
                }

                if (typeof stderrValueObtained !== 'string') {
                    console.error("Stderr Value obtained is not string")
                }

                // console.log("Stdout : ", stdoutValueObtained)
                // console.log("Stderr : ", stderrValueObtained)
                setStdoutValue(stdoutValueObtained)
                setStderrValue(stderrValueObtained)
            } catch (err) {
                console.error(err)
            }

            // setStdoutValue(JSON.stringify(res.data))
        } catch (err) {
            console.error(err)


        }
    }

    return (
        <main className="min-h-screen w-screen">
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

                    />

                </Split>
            </div>
        </main>
    )


}
