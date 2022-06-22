import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import BikeGif from "../public/images/BikeGif.gif";
import { InlineWidget } from "react-calendly";
import Link from "next/link";



function heroPage() { 
  

  return (
    <div className="pb-20 pt-40 min-w-7xl mx-0 md:mx-20">   
      <div className=" flex md:flex-row flex-col justify-between items-center my-10">
        <div className="flex-col px-10 ">
          <h1 className="text-6xl font-heading text-zinc-800 font-bold">
Propelling the brands you love         </h1>
          <p className="text-2xl text-zinc-800  mb-10 pt-3">
          Let us help you exlplore, plan, and drive your next project
          </p>
         
        </div>
        
      </div>
      <div className="mix-blend-darken px-10 motion-safe:animate-fadeIn">
        
          <Image alt='Riding a Bike' src={BikeGif} width={900} height={500} objectFit="contain"/>
        
        </div>
    </div>
  );
}



export default heroPage;
