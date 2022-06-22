/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon,  } from "@heroicons/react/outline";
import Image from "next/image";
import BlackBike from "../public/images/BlackBike.png";
import { InlineWidget } from "react-calendly";

import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true, selected: false },
  { name: "Team", href: "#", current: false, selected: false },
  { name: "Projects", href: "#", current: false, selected: false },
  { name: "Calendar", href: "#", current: false, selected: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto px-5% pt-3%  ">
            <div className="relative flex justify-around items-center ">
              
              <div className="flex-1 flex justify-between sm:items-stretch   ">
              <div className="flex-shrink inset-y-0 left-0  flex items-center ">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-dark  hover:transition-shadow  duration-1000 ease-in-out hover:shadow-clay-btn-two">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-14" aria-hidden="true" />
                  ) : (
                    <div className="block font-regular text-xl mb-2  h-5 w-14" aria-hidden="true" > menu </div>
                  )}
                </Disclosure.Button> */}
                <Link href="mailto:hello@bicycle.digital" passHref>
          <button className="transition-shadow duration-300 text-md ease-in-out text-gray-dark shadow-clay-btn hover:shadow-clay-btn-two px-4 h-10 rounded-md">
          Reach Out

          </button>
          </Link>
              </div>
              <div className="flex-shrink flex">
              <Image alt='logo' src={BlackBike} width={100} height={100} objectFit="contain" />
                  
                </div>
               
                <div className="hidden ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-dark  hover:transition-shadow  duration-1000 ease-in-out hover:shadow-clay-btn-two"
                            : "text-gray-dark  hover:transition-shadow  duration-1000 ease-in-out hover:shadow-clay-btn-two",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                        
                      </a>
                    ))}
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="">
            <div className="absolute px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-dark  hover:transition-shadow  duration-1000 ease-in-out hover:shadow-clay-btn-three"
                      : "text-gray-dark  hover:transition-shadow  duration-1000 ease-in-out hover:shadow-clay-btn-two",
                    "block px-3 py-2 rounded-md text-base text-gray-dark font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
