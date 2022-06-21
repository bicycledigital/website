import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import BikeGif from "../public/images/BikeGif.gif";



function heroPage() { 
  

  return (
    <div className="bg-transparent pt-40 min-w-7xl mx-0 md:mx-20">   
      <div className=" flex md:flex-row flex-col justify-between items-center my-10">
        <div className="flex-col px-10 ">
          <h1 className="text-6xl font-heading text-zinc-800 font-bold">
Propelling the brands you love         </h1>
          <p className="text-2xl text-zinc-800  mb-10 pt-3">
          Let us help you exlplore, plan, and drive your next project
          </p>
          <a href="/about">
          <button className="transition-shadow duration-300 text-xl ease-in-out text-gray-dark shadow-clay-btn hover:shadow-clay-btn-two px-8 h-14 rounded-md">
             Speak with us today
          </button>
          </a>
        </div>
        
      </div>
      <div className="mix-blend-darken px-10 motion-safe:animate-fadeIn"
     
      >
          <Image src={BikeGif} width={900} height={500} objectFit="contain"/>
        </div>
    </div>
  );
}



export default heroPage;
