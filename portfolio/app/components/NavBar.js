"use client"

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSdCard } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function NavBar() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [height, setHeight] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        setHeight(window.self.innerHeight);
        window.addEventListener('scroll', handleScroll, { passive: true });
        setIsLoaded(true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
        
        <div className={`w-full h-20 bg-[#202020] flex flex-nowrap items-center ${scrollPosition >= height && isLoaded ? "fixed top-0" : `absolute top-[${height}px]`}`}>
            <FaSdCard className="flex-none basis-1/4" />
            <div className="flex basis-3/4 h-full items-center justify-evenly">
                <h1 className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs">About Me</h1>
                <h1 className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs">Skills</h1>
                <h1 className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs">Projects</h1>
                <h1 className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs">Contact</h1>
                <FaGithub className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs" />
                <CiLinkedin className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs" />
            </div>
        </div>
    </>
  );
}
