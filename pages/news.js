import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";
import Image from "next/image";
import BlackOutline from "../public/images/BlackOutline.png"
import { InlineWidget } from "react-calendly";

function news() {
  return (
    <div className="justify-center items-center pt-36 my-0">
      
      <h1 className="relative  text-center font-heading text-5xl">
      <div className="pointer-events-none">
        <Image alt='Heading' src={BlackOutline} width={200} height={200} className="bottom-0 w-full h-full" objectFit="contain" />
      </div>
       <div className="absolute w-screen  bottom-20 text-center leading-start">Have a Project?</div> 
      </h1>
      <div className=" justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mx-10">
        <div className="flex-row justify-center items-center  rounded-md p-0 ">
           
           <h1 className="text-2xl text-center text-gray-800 font-semibold  my-2">
            Our Philosophy <br/> <br/>
           </h1>
           <div className="text-xl  text-gray-800   my-2">
            We don't sell ads, we sell feelings <br /> <br /> 
            Here at Bicycle, we understand the power of a brand. Most buisiness owners do too. 
            So if this is the case, why do so many companies overlook their own brand? Simple, brands are  easily overlooked, even though they live in every fiber of your company. This means without a holistic branding strategy, all other marketing efforts will be less effective. 
<br /><br />
With expertise in brand design and digital marketing, we help forward-thinking companies find their ideal customers, tell their stories, and deliver superior results.
           We look into the future with curiosity and excitement, if your company shares this feeling, we would love to work together.
          </div>
          <h1 className="text-2xl text-center text-gray-800 font-semibold  my-2">
          <br />Get Into Gear<br/> <br/>
           </h1>
           <div className="text-xl  text-gray-800   my-2">
           If your marketers haven't updated your branding in 5 years, 10 years, or 15 years, its time to make the jump. At Bicycle, we stay current with the industry standards. This ensures that you will look and feel like a best-in-class company for years to come.  
           <br/> 
           <h1 className="text-xl text-gray-800 font-semibold  my-2">Schedule a 30 minute Brand Audit and let's talk. We will outline your current branding strategy and pin point any opportunities we see.
</h1>
          </div>
         </div>
           
          <div className="">
           
            {/* <h1 className="text-xl text-center   text-gray-800 font-semibold  my-2">
              Free 30 minute Discovery Call
            </h1> */}
            <div className="mix-blend-multiply">
           <div classname='row-span-3 w-320px h-1000px'>             <InlineWidget styles={{height:'1000px'}} url="https://calendly.com/bicycledigital/30min" className="absolutev overflow-visible h-min-1000px " />
</div>
           
           </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default news;
