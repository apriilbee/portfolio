'use client'

import { useState, useEffect } from "react"
import AnimatedToggleIcon from "./AnimatedToggleIcon"
import { moonIcon, sunIcon } from "@/assets"

const Toggle = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark"
        setDarkTheme(isDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const toggleTheme = () => {
        const newTheme = !darkTheme
        setDarkTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme)
        localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    return (
        <main className="bg-white dark:bg-gray-800 min-h-screen">
            <div className="relative w-full mx-auto flex justify-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-[90px] overflow-hidden">
                <button 
                    className="absolute md:right-12 top-4 text-yellow-600 hover:text-yellow-500"
                    onClick={toggleTheme}
                >
                    <AnimatedToggleIcon icon={darkTheme ? sunIcon : moonIcon} />
                </button>
                {children}
            </div>
        </main>
    )
}

export default Toggle
