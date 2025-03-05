"use client";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <section id="about" className="">
        <div className="w-full md:h-screen flex flex-col">
          <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
            About Me
          </h1>
          <div className="flex justify-center items-center h-3/4 m-auto flex-col sm:flex-col md:flex-col lg:flex-row">
            <img
              src="https://i.pinimg.com/736x/58/7b/57/587b57f888b1cdcc0e895cbdcfde1c1e.jpg"
              className="size-1/2 lg:p-10 lg:size-2/3 md:size-1/4 lg:basis-1/2"
            ></img>
            {/* <Image
              src="https://i.pinimg.com/736x/58/7b/57/587b57f888b1cdcc0e895cbdcfde1c1e.jpg"
              alt="Profile Picture of Stephen Ditta"
              fill
            /> */}
            {/* <div className="w-full p-10 h-96 sm:w-1/3 sm:h-auto bg-red-500"></div> */}
            <p className="w-full p-10 sm:w-full md:w-fit lg:w-5/6">
              Hi, I'm Stephen Ditta - a passionate software developer with a
              love for building dynamic web and mobile applications that are
              both functional and beautifully designed. I recently graduated
              from the Honours Bachelor of Technology - Software Development
              program at Seneca Polytechnic, where I honed my skills in
              full-stack development, database management, and UI/UX design.
              <br />
              <br />
              Over the years, I've had the chance to work on a range of
              projects, from creating a Restaurant Ordering System using
              React.js and MongoDB to developing a Car Renting Mobile App with
              React Native and Firebase. These experiences taught me how to turn
              ideas into fully realized applications that solve real problems.
              <br />
              <br />
              I've also gained professional experience through co-op roles at
              GroveWare Technologies and the Toronto Transit Commission (TTC).
              There, I worked with technologies like PL/SQL, SQLite, and Google
              APIs, while collaborating with teams in Agile environments to
              build solutions that improved user experiences and system
              performance.
              <br />
              <br />
              On top of coding, I have a background in Interactive Media Design,
              which helps me bring strong design fundamentals into my
              development process. Whether it's front-end interfaces or back-end
              logic, I'm always focused on creating user-friendly, efficient,
              and visually appealing products.
              <br />
              <br />
              When I'm not coding, you'll probably find me exploring new design
              trends, experimenting with 3D modeling, or diving into the latest
              tech tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
