"use client"

import { ReactTyped } from "react-typed";

export default function Home() {

  return (
    <div className="w-full h-screen flex">
      <div className="container m-auto text-center text-white">
        <h1 className="md:text-6xl sm:text-4xl text-3xl">Welcome, my name is <span className="text-[#D43D3D]">Stephen Ditta</span></h1>
        <div>
          <h1 className="md:text-5md sm:text-3xl text-2xl pt-5">I am a 
            <ReactTyped 
            className="pl-2 text-[#D43D3D]"
              strings={[
                "Full Stack Developer",
                "Front-End Developer", 
                "React.js Developer", 
                "3D Artist", 
                "Fishing Enthusiast"
                ]} 
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </h1>
        </div>
      </div>
    </div>
    
  );
}
