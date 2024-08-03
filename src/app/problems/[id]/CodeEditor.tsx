import { useEffect, useState } from "react"
import { Editor } from "@monaco-editor/react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { ProgrammingLanguage } from "@/lib/editor/types";
import { LanguageSelector } from "@/app/editor/LanguageSelector";
import { getBoilerPlate } from "./actions";

type CodeEditorProps = {
    problemId: string,
    programmingLanguageList: Array<ProgrammingLanguage>,
}

export function CodeEditor({
    problemId,
    programmingLanguageList
}: CodeEditorProps) {

    const loadingText = "Loading ..."
    const [value, setValue] = useState(loadingText)
    const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(programmingLanguageList[0])

    const handleChange = (newValue: string | undefined) => {
        // event should be passed as the second parameter
        if (newValue) {
            setValue(newValue)
        }
        // console.log(value)
    }

    const updateBoilerPlate = async () =>{
        const boilerPlateCode = await getBoilerPlate(problemId, selectedLanguage.id)
        setValue(boilerPlateCode)
    }

    useEffect(() => {
        updateBoilerPlate()

    }, [selectedLanguage])

    return (
        <div className="h-full pb-9">
            <div className="bg-slate-100 rounded-tl-2xl rounded-tr-2xl">
                <button className="flex gap-1 px-2 py-2 items-center hover:shadow-customhovereffect">
                    <IoCodeSlashOutline className="h-5 w-5" /> <span className="text-sm"> Code </span>
                </button>

            </div>
            <div className="p-1">
                <LanguageSelector
                    programmingLanguageList={programmingLanguageList}
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                />
            </div>
            <div className="h-full min-h-4">
                <Editor
                    // height="12rem"
                    // height="50vh"
                    // defaultLanguage="javascript"
                    // defaultValue='Deno.serve(req => new Response("Hello"));'
                    value={value}
                    onChange={handleChange}
                    language={selectedLanguage.monaco}
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

