import React from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { Input, Dialog, DialogPanel, DialogTitle, Switch } from '@headlessui/react'
import { useThemeContext } from "../store/ThemeProvider"
import { usePlaygroundPreferencesContext } from "../store/PlaygroundPreferencesProvider"


export function SettingsModal(
) {



    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const { isDarkTheme, setIsDarkThemeInLocalStorage } = useThemeContext()

    const {
        compileTimeLimit,
        setCompileTimeLimitInLocalStorage,
        compileTimeLimitMinValue,
        compileTimeLimitMaxValue,
        compileTimeLImitStepValue,
        executionTimeLimit,
        setExecutionTimeLimitInLocalStorage,
        executionTimeLimitMinValue,
        executionTimeLimitMaxValue,
        executionTimeLimitStepValue,
        bufferMaxSize,
        setBufferMaxSizeInLocalStorage,
        bufferMaxSizeMinValue,
        bufferMaxSizeMaxValue,
        bufferMaxSizeStepValue,
    } = usePlaygroundPreferencesContext()


    const handleCompileTimeLimitChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // check if the string can be converted to number
        const num = parseInt(ev.target.value)
        if (num) {
            if (compileTimeLimitMinValue <= num && num <= compileTimeLimitMaxValue) {
                setCompileTimeLimitInLocalStorage(num)
            }
        }
    }

    const handleExecutionTimeLimitChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // check if the string can be converted to number
        const num = parseInt(ev.target.value)
        if (num) {
            if (executionTimeLimitMinValue <= num && num <= executionTimeLimitMaxValue) {
                setExecutionTimeLimitInLocalStorage(num)
            }
        }

    }

    const handleBufferMaxSizeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // check if the string can be converted to number
        const num = parseInt(ev.target.value)
        if (num) {
            if (bufferMaxSizeMinValue <= num && num <= bufferMaxSizeMaxValue) {
                setBufferMaxSizeInLocalStorage(num)
            }
        }
    }

    return (
        <>
            <button
                className="p-2 bg-slate-50 dark:bg-slate-900 dark:text-white rounded-sm"
                onClick={() => setIsOpen(true)}
            >
                <IoSettingsOutline
                    className="w-6 h-6"
                />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 dark:bg-black dark:text-white">
                        <DialogTitle className="text-lg font-bold">Settings</DialogTitle>
                        <div className="flex flex-row gap-4 justify-between">
                            <div className="text-sm">Dark Theme</div>
                            <Switch
                                checked={isDarkTheme}
                                onChange={setIsDarkThemeInLocalStorage}
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
                                step={compileTimeLImitStepValue}
                                className="w-fit text-right dark:bg-gray-800 dark:text-gray-100"
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
                                step={executionTimeLimitStepValue}
                                className="w-fit text-right dark:bg-gray-800 dark:text-gray-100"
                                value={executionTimeLimit}
                                onChange={handleExecutionTimeLimitChange}
                            />
                        </div>
                        <div className="flex flex-row gap-6 justify-between">
                            <div className="text-sm">Buffer Max Size (in bytes)</div>
                            <Input
                                type="number"
                                min={bufferMaxSizeMinValue}
                                max={bufferMaxSizeMaxValue}
                                step={bufferMaxSizeStepValue}
                                className="w-fit text-right dark:bg-gray-800 dark:text-gray-100"
                                value={bufferMaxSize}
                                onChange={handleBufferMaxSizeChange}
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


