import React from "react";
import { FaPlay } from "react-icons/fa"
import { BiCodeCurly } from "react-icons/bi";
import { Editor, useMonaco } from "@monaco-editor/react"
import { useThemeContext } from "../store/ThemeProvider"
import { useSession } from "next-auth/react"
import { SettingsModal } from "./SettingsModal"
import { LanguageSelector } from "./LanguageSelector"
import { TemplateSelector } from "./TemplateSelector"
import type { ProgrammingLanguage, BoilerPlateCode } from "@/app/data/editor"
import { toast } from "react-toastify";

export type CodeEditorProps = {
    programmingLanguageList: Array<ProgrammingLanguage>,
    sourceCodeValue: string,
    setSourceCodeValue: React.Dispatch<React.SetStateAction<string>>,
    runCodeAction: (language: ProgrammingLanguage) => Promise<void>,
}


export function CodeEditor({ programmingLanguageList, sourceCodeValue, setSourceCodeValue, runCodeAction }: CodeEditorProps) {
    const { status: authenticationStatus } = useSession()
    const monaco = useMonaco()
    const [selectedLanguage, setSelectedLanguage] = React.useState<ProgrammingLanguage>(programmingLanguageList[0])
    const [selectedBoilerPlateCode, setSelectedBoilerPlateCode] = React.useState<BoilerPlateCode>(boilerPlateCodeMap[selectedLanguage.id]["default"])
    // time and delay are measured in milliseconds
    const [runCodeButtonLastClicked, setRunCodeButtonLastClicked] = React.useState<number | null>(null)
    const delayBetweenConsecutiveRunCodeButtonPresses: number = 3000
    const { isDarkTheme } = useThemeContext()

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
        if (monaco) {
            // console.log('here is the monaco instance:', monaco);
            try {
                monaco.editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs')
            } catch (err) {
                // console.error("Uncaught Promise in Monaco")
            }
        }
    }, [monaco]);

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
                    className="group relative bg-green-200 dark:bg-green-600 dark:text-gray-200 px-4 py-2 rounded-2xl flex flex-row gap-2 items-center hover:shadow-customhovereffect"
                    onClick={handleRunCodeButtonClicked}
                    disabled={authenticationStatus !== 'authenticated'}
                >
                    <FaPlay
                        className="h-3 w-3"
                    />
                    <span
                        className="select-none">
                        Run
                    </span>
                    {
                        // tooltip
                        (authenticationStatus !== 'authenticated') &&
                        <div className="absolute hidden group-hover:flex group-hover:flex-row bg-white px-3 py-1 top-12 -left-1 z-20 rounded-lg shadow-customalldirectionmd">
                            <span
                                className="select-none whitespace-nowrap"
                            >You need to Sign in to Run code</span>
                        </div>
                    }
                </button>
                <div className="flex flex-row justify-center items-center gap-2">
                    <button
                        className="p-2 bg-slate-50 dark:bg-slate-900 dark:text-gray-50 rounded-sm"
                        onClick={handleResetCodeButtonClicked}
                    >
                        <BiCodeCurly
                            className="w-6 h-6"
                        />

                    </button>
                    <SettingsModal
                    />
                    <LanguageSelector
                        programmingLanguageList={programmingLanguageList}
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
                        theme: isDarkTheme ? "vs-dark" : "vs"
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
