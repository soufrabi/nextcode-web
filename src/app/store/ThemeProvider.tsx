'use client'

import { ReactNode, createContext, useContext, useState } from "react"

type ThemeType = boolean
type ThemeContextType = {
    isDarkTheme: ThemeType,
    setIsDarkTheme: (theme: ThemeType) => void,
    loadThemeFromLocalStorage: () => void,
}

const isDarkThemeDefaultValue: ThemeType = false

const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: isDarkThemeDefaultValue,
    // setisdarktheme: (theme: themetype) => { },
    setIsDarkTheme: () => { },
    loadThemeFromLocalStorage: () => { },
})

export default function ThemeProvider({
    children
}: {
    children: ReactNode
}) {

    const [isDarkTheme, setIsDarkTheme] = useState<ThemeType>(isDarkThemeDefaultValue)

    const setIsDarkThemeInLocalStorage = (darkTheme: ThemeType) => {
        setIsDarkTheme(darkTheme)
        if (darkTheme) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
    }

    const loadThemeFromLocalStorage = () => {
        const themeInLS = localStorage.getItem('theme')
        if (themeInLS !== null) {
            if (themeInLS === 'dark') {
                setIsDarkTheme(true)
            } else {
                setIsDarkTheme(false)
            }

        }
    }


    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme: setIsDarkThemeInLocalStorage, loadThemeFromLocalStorage }}>{children}</ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}

// export type { ThemeType }
