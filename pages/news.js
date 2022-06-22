import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";
import Image from "next/image";
import BlackOutline from "../public/images/BlackOutline.png"
import { InlineWidget } from "react-calendly";

function news() {
  return (
    <div className="flex-col justify-center items-center pt-0 my-0">
      
      <h1 className="relative  text-center font-heading text-5xl">
      <div className="pointer-events-none">
        <Image alt='Heading' src={BlackOutline} width={200} height={200} className="bottom-0 w-full h-full" objectFit="contain" />
      </div>
       <div className="absolute w-screen  bottom-20 text-center leading-start">Have a Project?</div> 
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mx-10">
        <div className="flex-row justify-center items-center  rounded-md p-8 ">
           
           <h1 className="text-xl text-center text-gray-800 font-semibold  my-2">
             Capture your goldfish. <br/> <br/>
           </h1>
           <div className="text-xl  text-gray-800   my-2">
           Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
<br /><br />
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
          </div>
          <h1 className="text-xl text-center text-gray-800 font-semibold  my-2">
          <br /><br />Capture your goldfish. <br/> <br/>
           </h1>
           <div className="text-xl  text-gray-800   my-2">
           Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

          </div>
         </div>
           
          <div className="flex-row justify-center items-center border  hover:shadow-lg  border-violet-100 rounded-md p-8 ">
           
            <h1 className="text-xl text-center text-gray-800 font-semibold  my-2">
              Free 30 minute Discovery Call
            </h1>
            <div className="mix-blend-multiply">
           <div>
             <InlineWidget className=" rounded-full" url="https://calendly.com/bicycledigital/30min" />
           </div>
           </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default news;
