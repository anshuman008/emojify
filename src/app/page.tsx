'use client'
import Decrypt from "@/components/Decrypt";
import Encrypt from "@/components/Encrypt";
import React, { useState } from "react";

const Page = () => {
  const [currentMode,setCurrentMode] = useState(0);



  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center py-10">
      {/* title   */}

      <div className="flex gap-4">
        <span className=" text-3xl md:text-5xl font-bold text-white">Text</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:size-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <span className=" text-3xl md:text-5xl font-bold text-white">Emoji</span>
      </div>

      {/* tabs  */}

      <div className="p-2 md:p-3 flex justify-center items-center bg-[#1c1c1c] gap-x-4 md:px-10 rounded-lg my-10">
        <div className={`flex gap-2 p-3 justify-center items-center rounded-xl cursor-pointer ${currentMode===0?'bg-[#2e2e2e]':''}`} onClick={()=>setCurrentMode(0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <span className="text-sm md:text-xl  text-white"> Encrypt Text</span>
        </div>

        <div className={`flex justify-center items-center gap-2 p-3 rounded-xl cursor-pointer ${currentMode===1?'bg-[#2e2e2e]':''}`} onClick={()=>setCurrentMode(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <span className="text-sm md:text-xl  text-white"> Decrypt Text</span>
        </div>
      </div>


     {
      currentMode===0?<Encrypt/>:<Decrypt/>
     }
    </div>
  );
};

export default Page;
