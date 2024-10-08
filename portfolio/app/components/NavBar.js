"use client"

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSdCard } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        setIsLoaded(true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
        
        <div className={`w-full h-20 bg-[#202020] flex flex-nowrap items-center ${scrollPosition >= height && isLoaded ? "fixed top-0" : `absolute top-[${height}px]`}`}>
            <Link href={"#landing"} className="flex basis-1/4 justify-center" >
                <FaSdCard />
            </Link>
            <div className="flex basis-3/4 h-full items-center justify-evenly">
                <Link href={"#about"} className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center">About Me</Link>
                <Link href={"#skills"} className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center">Skills</Link>
                <Link href={"#"} className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center">Projects</Link>
                <Link href={"#"} className="hover:text-[#373434] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center">Contact</Link>
                <FaGithub className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center" />
                <CiLinkedin className="hover:text-[#D43D3D] hover:cursor-pointer md:text-xl sm:text-base text-xs flex h-full items-center" />
            </div>
        </div>
    </>
  );
}
