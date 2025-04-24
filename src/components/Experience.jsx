'use client';

import JobList from "./sub/JobList";
import Heading from "./sub/Heading";
import TechStack from "./sub/TechStack";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen py-30 px-6 sm:px-20 flex flex-col items-center justify-center scroll-mt-24"
    >
      <Heading text={"Experience"} />

      <div className="relative w-full max-w-[1400px] mt-6 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="rounded-xl p-5 text-justify bg-white dark:bg-gray-800 shadow">
          <JobList />
        </div>

        <div className="rounded-xl p-5 text-left bg-white dark:bg-gray-800 shadow">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default Experience;
