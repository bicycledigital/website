import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";
import Image from "next/image";
import BlackOutline from "../public/images/BlackOutline.png"

function news() {
  return (
    <div className="flex-col justify-center items-center my-20">
      
      <h1 className="relative  text-center font-heading text-5xl">
      <div className="pointer-events-none">
        <Image alt='Heading' src={BlackOutline} width={200} height={200} className="bottom-0 w-full h-full" objectFit="contain" />
      </div>
       <div className="absolute w-screen  bottom-20 text-center leading-start">Opportunities</div> 
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1  gap-5 my-20 mx-10">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:border-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 ">
           
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
              Best Agency for App & web product with 100% quality work.
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800 "
            >
              Read More...
            </a>
          </div>
          
            
        </div>
      </div>
    </div>
  );
}

export default news;
