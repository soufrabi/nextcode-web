import React from "react"
import { Editor } from "@monaco-editor/react";
import { IoCodeSlashOutline } from "react-icons/io5";

export function CodeEditor() {
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
                    <IoCodeSlashOutline className="h-5 w-5" /> <span className="text-sm"> Code </span>
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

