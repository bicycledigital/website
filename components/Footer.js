import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import WhiteBike from "../public/images/WhiteBike.png";


function Footer() {
  return (
    <>
      <div className="bg-gray-800 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
     
      <div className="p-5 ">
          <ul>
            <p className="text-gray-400 font-bold text-3xl pb-6">
            <Image alt='Logo' src={WhiteBike} width={100} height={100} objectFit="contain" />
            </p>
            </ul>
            </div>
       {/*} <div className="p-5 ">
          <ul>
            <p className="text-gray-400 font-bold text-3xl pb-6">
            <Image src={WhiteBike} width={100} height={100} objectFit="contain" />
            </p>
            <div className="flex gap-6 pb-5">
              <a href="https://www.instagram.com/bicycledigital" target='blank'>
                <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" />
              </a>
              <a href="https://www.twitter.com/bicycledigital" target='blank'>
                <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a>
              <a href="https://www.instagram.com/bicycledigital" target='blank'>
                <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a>
               <a href="https://www.instagram.com/novavez" target='blank'>
                <FaYoutube className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
              </a> 
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Color Generator <span className="text-violet-600">New</span>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Services
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Blog
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              FAQ{"'"}s
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div> */}
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-800">
        <h1 className="text-sm text-zinc-500 font-semibold">
          © 2022 All rights reserved | Build with ❤ by{" "}
         
            Bicycle{" "}
          
        </h1>
      </div>
    </>
  );
}

export default Footer;
