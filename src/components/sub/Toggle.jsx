'use client'
import { moonIcon, sunIcon } from "@/assets"
import { useState, useEffect } from "react"

const Toggle = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        // Check user's preferred theme on mount
        const isDark = localStorage.getItem("theme") === "dark"
        setDarkTheme(isDark)
        if (isDark) {
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (darkTheme) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        setDarkTheme(!darkTheme)
    }

    return (
        <main>
            <div className="bg-white dark:bg-gray-800">
                <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:px-[80px] sm:pr-5 overflow-hidden ">
                    <button 
                        className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
                        onClick={toggleTheme}
                    >
                        <span className="absolute block rounded-full bg-zinc-50 p-1 text-4xl left-[-15px]">
                            {darkTheme ? sunIcon : moonIcon}
                        </span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Toggle
 