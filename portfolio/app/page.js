"use client";

import { ReactTyped } from "react-typed";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

const typedStrings = [
  "Full Stack Developer",
  "Front-End Developer",
  "React Developer",
  "Fishing Enthusiast",
];

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex" id="">
        <div className="container m-auto text-center text-white">
          <h1 className="md:text-6xl sm:text-4xl text-3xl">
            Welcome, my name is{" "}
            <span className="text-[#D43D3D]">Stephen Ditta</span>
          </h1>
          <div>
            <h1 className="md:text-5md sm:text-3xl text-2xl pt-5">
              I am a
              <ReactTyped
                className="pl-2 text-[#D43D3D]"
                strings={typedStrings}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </h1>
          </div>
          <div className="absolute w-full left-0 bottom-1/4">
            <Link href="/#about" className="relative w-24">
              <IoIosArrowDown className="relative m-auto text-5xl rounded-md text-slate-300 hover:hover:text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
      {/* look into parallel-routes https://nextjs.org/docs/app/building-your-application/routing/parallel-routes */}
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
