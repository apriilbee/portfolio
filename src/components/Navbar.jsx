'use client'
import { navbarData, copyRightIcon } from "@/assets"

const Navbar = ({ id }) => {
  return (
    <div className="h-full fixed left-0 top-0 flex-col justify-between border-r border-gray-200 px-4 py-10 z-10 hidden sm:flex">
        <a href="/#home">
            <span className="text-3xl font-semibold text-red-400">A</span>. <span className="block dark:text-white w-min rotate-90 origin-bottom text-[12px] semibold">Bation</span>.
        </a>
        <div className="flex flex-col gap-y-5 sm:gap-y-2">
            { navbarData.map((item, i) => (
                <a href={`/#${item.id}`} key={i}  className="group flex flex-col items-center gap-y-2">
                    <span 
                        className={`text-2xl  group-hover:scale-125 transition-all ${
                            item.id === id ? 'text-red-500 scale-110' : 'text-yellow-600 scale-100'}`}>
                        {item.icon}
                    </span>
                    <span className={`text-[10px] tracking-wide opacity-0 
                        group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center text-gray-300 
                        ${item.id === id && "-translate-x-0 opacity-100"}`} >
                            {item.name}
                    </span>
                </a> 
            ))}
           
        </div>
        <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
            <span className="absolute left-[calc(50%+10px)] w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
                {copyRightIcon}
                <span className="px-2">2025</span>
            </span>
        </p>


    </div>
  )
}

export default Navbar