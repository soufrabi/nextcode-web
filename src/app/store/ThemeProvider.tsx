'use client'

import { ReactNode, createContext, useContext, useState } from "react"

type ThemeType = boolean
type ThemeContextType = {
    isDarkTheme: ThemeType,
    setIsDarkTheme: (theme: ThemeType) => void,
    setIsDarkThemeInLocalStorage: (theme: ThemeType) => void,
    loadThemeFromLocalStorage: () => void,
}

const isDarkThemeDefaultValue: ThemeType = false

const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: isDarkThemeDefaultValue,
    setIsDarkTheme: () => { },
    setIsDarkThemeInLocalStorage: () => { },
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
            localStorage.setItem('preferences-theme', 'dark')
        } else {
            localStorage.setItem('preferences-theme', 'light')
        }
    }

    const loadThemeFromLocalStorage = () => {

        const themeValue = localStorage.getItem('preferences-theme')
        // console.log("Theme Value : ",themeValue)
        if (themeValue !== null) {
            if (themeValue === 'dark') {
                setIsDarkTheme(true)
                document.documentElement.classList.add('dark')
                // console.log('Activating Dark Theme')
            } else {
                setIsDarkTheme(false)
                document.documentElement.classList.remove('dark')
            }
        }
    }


    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, setIsDarkThemeInLocalStorage, loadThemeFromLocalStorage }}>{children}</ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}

// export type { ThemeType }
