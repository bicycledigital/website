import React from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";
import Image from "next/image";
import BlackOutline from "../public/images/BlackOutline.png"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { SiAzuredevops } from "react-icons/si";
import { TbPlant, TbPuzzle } from "react-icons/tb";
import { HiOutlineFingerPrint, HiPuzzle } from "react-icons/hi";
import { IoExtensionPuzzleOutline } from "react-icons/io";


function services() {
  return (
    <div className="pt-20 flex-col justify-center items-center my-20">
       <h1 className="relative  text-center font-heading text-5xl">
      <div className="pointer-events-none">
        <Image src={BlackOutline} width={200} height={100} className="bottom-0 w-full h-full" objectFit="contain" />
      </div>
       <div className="absolute w-screen  bottom-8 text-center leading-start">Our Services</div> 
      </h1>
    
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:mx-0 mx-0 md:grid-cols-3 gap-5 my-20">
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <MdWeb className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
              User Experience & Web Design
            </h1>
          </div>
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <MdOutlineDesignServices className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
              Creative Strategy & Direction 
            </h1>
          </div>
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <HiOutlineFingerPrint className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
              Brand Identity Inisght & Consulting
            </h1>
          </div>
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <MdChatBubbleOutline className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
            Brand Design, Message & Copywriting
            </h1>
          </div>
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <TbPuzzle className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
              Project Auditing & Innovation
            </h1>
          </div>
          <div className="group flex-col  justify-center items-center   rounded-md p-8 ">
            <TbPlant className="text-4xl text-gray-800 " />
            <h1 className="text-xl text-gray-800 font-semibold  my-2">
            Digital Advertising & Growth Hacking
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
