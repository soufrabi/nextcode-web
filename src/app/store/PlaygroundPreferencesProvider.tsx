'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"


const compileTimeLimitMinValue: number = 500
const compileTimeLimitMaxValue: number = 3000
const compileTimeLImitStepValue: number = 100
const compileTimeLimitDefaultValue: number = 2000
const executionTimeLimitMinValue: number = 100
const executionTimeLimitMaxValue: number = 500
const executionTimeLimitStepValue: number = 100
const executionTimeLimitDefaultValue: number = 500
const bufferMaxSizeMinValue: number = 50
const bufferMaxSizeMaxValue: number = 5000
const bufferMaxSizeStepValue: number = 50
const bufferMaxSizeDefaultValue: number = 1000

type PlaygroundPreferencesType = {
    compileTimeLimit: number,
    setCompileTimeLimitInLocalStorage: (newValue: number) => boolean,
    compileTimeLimitMinValue: number,
    compileTimeLimitMaxValue: number,
    compileTimeLImitStepValue: number,
    executionTimeLimit: number,
    setExecutionTimeLimitInLocalStorage: (newValue: number) => boolean
    executionTimeLimitMinValue: number,
    executionTimeLimitMaxValue: number,
    executionTimeLimitStepValue: number,
    bufferMaxSize: number,
    setBufferMaxSizeInLocalStorage: (newValue: number) => boolean
    bufferMaxSizeMinValue: number,
    bufferMaxSizeMaxValue: number,
    bufferMaxSizeStepValue: number,
}


const PlaygroundPreferencesContext = createContext<PlaygroundPreferencesType>({

    compileTimeLimit: compileTimeLimitDefaultValue,
    setCompileTimeLimitInLocalStorage: () => { return false },
    compileTimeLimitMinValue,
    compileTimeLimitMaxValue,
    compileTimeLImitStepValue,
    executionTimeLimit: executionTimeLimitDefaultValue,
    setExecutionTimeLimitInLocalStorage: () => { return false },
    executionTimeLimitMinValue,
    executionTimeLimitMaxValue,
    executionTimeLimitStepValue,
    bufferMaxSize: bufferMaxSizeDefaultValue,
    setBufferMaxSizeInLocalStorage: () => { return false },
    bufferMaxSizeMinValue,
    bufferMaxSizeMaxValue,
    bufferMaxSizeStepValue,
})

export default function PlaygroundPreferencesProvider({
    children
}: {
    children: ReactNode
}) {

    const [compileTimeLimit, setCompileTimeLimit] = useState<number>(compileTimeLimitDefaultValue)
    const [executionTimeLimit, setExecutionTimeLimit] = useState<number>(executionTimeLimitDefaultValue)
    const [bufferMaxSize, setBufferMaxSize] = useState<number>(bufferMaxSizeDefaultValue)

    const isCompileTimeLimitValid: (num: number) => boolean = (num) => {
        if (compileTimeLimitMinValue <= num && num <= compileTimeLimitMaxValue) {
            return true
        } else {
            return false
        }
    }
    const isExecutionTimeLimitValid: (num: number) => boolean = (num) => {
        if (executionTimeLimitMinValue <= num && num <= executionTimeLimitMaxValue) {
            return true
        } else {
            return false
        }
    }
    const isBufferMaxSizeValid: (num: number) => boolean = (num) => {
        if (bufferMaxSizeMinValue <= num && num <= bufferMaxSizeMaxValue) {
            return true
        } else {
            return false
        }
    }


    const setCompileTimeLimitInLocalStorage = (newValue: number) => {
        if (isCompileTimeLimitValid(newValue)) {
            setCompileTimeLimit(newValue)
            localStorage.setItem('playground-preferences-compile-time-limit', newValue.toString())
            return true
        } else {
            return false
        }
    }

    const setExecutionTimeLimitInLocalStorage = (newValue: number) => {
        if (isExecutionTimeLimitValid(newValue)) {
            setExecutionTimeLimit(newValue)
            localStorage.setItem('playground-preferences-execution-time-limit', newValue.toString())
            return true
        } else {
            return false
        }
    }
    const setBufferMaxSizeInLocalStorage = (newValue: number) => {
        if (isBufferMaxSizeValid(newValue)) {
            setBufferMaxSize(newValue)
            localStorage.setItem('playground-preferences-buffer-max-size', newValue.toString())
            return true
        } else {
            return false
        }
    }

    const loadValuesFromLocalStorage = () => {
        const compileTimeLimitInLocalStorage = localStorage.getItem('playground-preferences-compile-time-limit')
        const executionTimeLimitInLocalStorage = localStorage.getItem('playground-preferences-execution-time-limit')
        const bufferMaxSizeInLocalStorage = localStorage.getItem('playground-preferences-buffer-max-size')

        if (compileTimeLimitInLocalStorage) {
            const num = parseInt(compileTimeLimitInLocalStorage)
            if (compileTimeLimitMinValue <= num && num <= compileTimeLimitMaxValue) {
                setCompileTimeLimit(num)
            }
        }

        if (executionTimeLimitInLocalStorage) {
            const num = parseInt(executionTimeLimitInLocalStorage)
            if (executionTimeLimitMinValue <= num && num <= executionTimeLimitMaxValue) {
                setExecutionTimeLimit(num)
            }
        }

        if (bufferMaxSizeInLocalStorage) {
            const num = parseInt(bufferMaxSizeInLocalStorage)
            if (bufferMaxSizeMinValue <= num && num <= bufferMaxSizeMaxValue) {
                setBufferMaxSize(num)
            }
        }



    }

    useEffect(() => {
        loadValuesFromLocalStorage()
    })


    return (
        <PlaygroundPreferencesContext.Provider
            value={{
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

            }}
        >{children}</PlaygroundPreferencesContext.Provider>
    )
}

export function usePlaygroundPreferencesContext() {
    return useContext(PlaygroundPreferencesContext)
}

// export type { PlaygroundPreferencesType }
