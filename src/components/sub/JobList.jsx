'use client';

import { useState, useEffect } from "react";
import FadeInSection from "./FadeInSection";
import { experienceItems } from "@/assets";

const JobList = () => {
  const [active, setActive] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    setIsHorizontal(window.innerWidth < 600);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-6 rounded-lg">
    {/* Left section: Job List */}
    <div id="jobList" className="flex flex-col md:w-1/4 max-h-[400px] overflow-y-auto">
        {Object.keys(experienceItems).map((key, i) => (
            <button
            key={i}
            className={`p-3 text-left transition-all duration-300 ease-in-out border-r-2 ${
                active === i
                ? 'text-yellow-500 font-bold border-yellow-700'
                : 'text-dark dark:text-gray-300 border-transparent'
            }`}
            onClick={() => setActive(i)}
            >
            {isHorizontal ? `0${i}.` : key}
            </button>
        ))}
        </div>
  
        {/* Right section: Job Descriptions */}
        <div id="jobDesc" className="md:w-3/4 p-6 max-h-[400px] overflow-y-hidden">
            {Object.keys(experienceItems).map((key, i) => (
                <div key={i} className={`transition-all duration-500 ease-in-out 
                        ${ active === i ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                        ${ active === i ? 'h-500 overflow-hidden' : 'h-0'}`}
                >
                    <h3 className="text-xl font-semibold text-dark dark:text-gray-200">
                        {experienceItems[key].jobTitle}{' '}
                        <span className="text-yellow-500">{key}</span>
                    </h3>
                    <p className="text-gray-400 dark:text-gray-300">{experienceItems[key].duration}</p>
                    <ul className="mt-2 text-gray-300 dark:text-gray-400 space-y-2">
                        {experienceItems[key].desc.map((descItem, index) => (
                        <FadeInSection key={index}>
                            <li className="list-disc ml-5">{descItem}</li>
                        </FadeInSection>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
  </div>
  

  );

};

export default JobList;
