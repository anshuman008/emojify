"use client";

import encryptMsg from "@/app/serverActions/EncryptMoji";
import { tree } from "next/dist/build/templates/app-page";
import React, { useState } from "react";

const Encrypt = () => {
  const [emojiEncryption, setEmojiEncrytion] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const fetchData = async (e: FormData) => {
     setIsLoading(true);
    const responce = await encryptMsg(e);
     setIsLoading(false);
    setEmojiEncrytion(responce);
  };
  return (
    <div className=" w-[90%] md:w-[650px] ">
      <form
        method="POST"
        action={fetchData}
        className="  flex flex-col gap-y-10 mb-5"
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-[#7e7e7e]">1. Type a message</label>
          <textarea
            required
            maxLength={7000}
            rows={5}
            cols={20}
            name="normaltext"
            placeholder="hello world"
            className="p-3 bg-[#1c1c1c] text-[#ffffff] rounded-lg placeholder-[#7e7e7ecf]"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[#7e7e7e]">2. Set a password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="E.g. 1234"
            className="p-3 bg-[#1c1c1c] text-[#ffffff] border-transparent rounded-lg placeholder-[#7e7e7ecf]"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[#7e7e7e]">3. Encrypt message</label>
          <button
            className="w-full bg-[#1c1c1c] text-white p-3 rounded-lg button-press-animation flex gap-x-2 justify-center items-center text-lg"
            type="submit"
          >
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
            Encrypt Text
          </button>
        </div>
      </form>

      {emojiEncryption  && (
      <div className=" flex flex-col gap-y-2">
        <span className="text-[#7e7e7e]">
          Copy and send to your friend or impress your crush
        </span>

        <div className="w-full p-3 relative rounded-lg bg-[#1c1c1c] overflow-scroll max-h-44 overflow-x-hidden flex flex-wrap">
          <span
            className="absolute top-1 right-2 p-2 rounded-lg bg-[#565555] text-white cursor-pointer"
            onClick={async () => {
              try{
                await navigator.clipboard.writeText(emojiEncryption);
                setCopiedEmoji(true);
  
                setTimeout(()=>{
                  setCopiedEmoji(false);
                },2000)
              }catch(error){
                console.log("clipboard failed!!",error)
              }

            }}
          >
            {copiedEmoji ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
              </svg>
            )}
          </span>
           {emojiEncryption}
        </div>
      </div>
      )}

     {isLoading && <div className="w-full flex justify-center items-center"> <span className="loading loading-ring loading-lg"></span></div>}
 
    </div>
  );
};

export default Encrypt;
