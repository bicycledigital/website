import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlackOutline from "../public/images/BlackOutline.png";
import wv from "../public/images/wv.svg";
import { InlineWidget } from "react-calendly";


function Contact() {
  return (
    <div className=" justify-center items-center flex-col">
      
      <h1 className="relative translate-y-36 text-center font-heading text-5xl">
      <div className="pointer-events-none">
        <Image alt='Heading' src={BlackOutline} width={200} height={200} className="bottom-0 w-full h-full" objectFit="contain" />
       
      </div>
       <div className="absolute w-screen  bottom-20 text-center leading-start">Contact Us</div> 
      </h1>
      <p className=" pt-10 pb-10 text-2xl  translate-y-28 mx-10 text-center">
        Need help with a project or just exploring? Let's talk. <br/> We'd love to hear from you and we will be in touch soon.
      </p>
      <div className="flex justify-center items-center translate-y-36 pt-5 gap-10">
        <div className="group md:w-72 w-80 h-12 rounded-md my-0  cursor-pointer flex justify-center items-center  transition-shadow duration-300 ease-in-out shadow-clay-btn hover:shadow-clay-btn-two ">
          <Link href="mailto:hello@bicycle.digital">
            <h1 className="text-gray-dark  text-xl">
            Speak with us today
            </h1>
          </Link>
          <div>
          
          </div>
        </div>
        
      </div>
    
      <div className="relative translate-y-4">
      <Image alt='Heading' src={wv} width={1920} height={1080} className=" w-full h-full" />
      </div>
    </div>
  );
}

export default Contact;
