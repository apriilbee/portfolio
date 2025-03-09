'use client'

import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import Image from "next/image"
import { aboutData, aboutText, downloadIcon  } from "@/assets"

const About = () => {
  return (
    <div id="about" className="min-h-screen py-30 px-30 grid flex flex-col items-center justify-center">
      <Heading text={"About Me"} />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-x-10"> 
        <Image 
          src={'/bear.png'} 
          alt="About Image" 
          width={300} 
          height={300} 
          className="w-300px "
        />
        <div className="relative max-w-full sm:max-w-[800px] w-full rounded-xl bg-zinc-100 p-5 text-justify mt-6 sm:mt-0">
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <div className="flex justify-center mt-6">
            <a href="/Resume.pdf" download="" 
                  className="w-max flex items-center gap-x-2 rounded-full border
                   border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 dark:hover:bg-red-700 transition-colors"
            >
              <span>Download CV</span>
              <span className="text-xl">{downloadIcon}</span>
            </a>
          </div>
        </div>
      </div>
  
      <div className="mt-20 w-full flex flex-wrap items-center justify-center sm:justify-between gap-x-7 gap-y-10"> 
        {aboutData.map((item, i) =>  
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        )}
      </div>
    </div>
  )  
}

export default About
