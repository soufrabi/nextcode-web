"use client"

import React, { useState } from "react"
import Image from "next/image"
import { MediaContextProvider } from "../components/media"
import { Editor } from "@monaco-editor/react"
import Split from "react-split"
import { FaPlay } from "react-icons/fa"

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

function CodeEditor() {
    const pythonDefaultValue = `
print("Hello World from Python")
`
    const [value, setValue] = useState("")

    const handleOnChange = (newValue: string | undefined) => {

        // event should be passed as the second parameter
        if (newValue) {
            setValue(newValue)
        }
    }

    const handleOnRunCodeButtonClicked = () => {

    }

    return (

        <div
            className="min-h-4 p-4 pt-0 h-[calc(100vh-7rem)]"
        >
            <div className="pb-2">
                <button
                    className="bg-green-200 px-4 py-2 rounded-2xl flex flex-row gap-2 items-center hover:shadow-customhovereffect"
                    onClick={handleOnRunCodeButtonClicked}
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
                value={value}
                onChange={handleOnChange}
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

function IoBox(props: { readOnly: boolean }) {
    return (
        <div className="p-2">
            <textarea
                className="w-full h-full bg-slate-100 p-3 text-sm font-mono rounded-2xl outline-none focus:outline-blue-400 focus:outline-2 resize-none" readOnly={props.readOnly}
            />
        </div>
    )
}
function RightPart() {
    return (
        <>
            <div>
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
                    <IoBox readOnly={false} />
                    <IoBox readOnly={true} />
                </Split>
            </div>

        </>
    )
}

export default function EditorPage() {
    return (
        <MediaContextProvider>
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
                        <CodeEditor />
                        <RightPart />

                    </Split>
                </div>
            </main>
        </MediaContextProvider>
    )


}
