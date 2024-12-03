"use client";

import { useRouter } from "next/navigation";

// L, L || M, M, M || S, S, S || S, L, S ||
const projects = [
  {
    id: 0,
    name: "Project1",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "L",
  },
  {
    id: 1,
    name: "Project2",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "S",
  },
  {
    id: 2,
    name: "Project3",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "S",
  },
  {
    id: 3,
    name: "Project4",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "S",
  },
  {
    id: 4,
    name: "Project5",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "L",
  },
  {
    id: 5,
    name: "Project6",
    skills: ["React", "BootStrap"],
    image: "...",
    prio: "S",
  },
];

export default function Projects() {
  const router = useRouter();

  const handleClick = (id) => {
    // console.log(`/project-${id + 1}`);
    router.push(`/project-${id + 1}`);
  };

  const projectPrio = (prio) => {
    switch (prio.toUpperCase()) {
      case "L":
        return "1/2";
        break;
      case "M":
        return "1/3";
        break;
      case "S":
        return "1/4";
        break;
    }
  };

  return (
    <section id="projects">
      <div className="w-full h-screen">
        <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center mt-20 mx-20 text-center">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className={`h-52 basis-${projectPrio(
                  project.prio
                )} border border-[#714545] hover:bg-[#714545] cursor-pointer`}
                onClick={() => handleClick(project.id)}
              >
                <img src={project.image} />
                <div className="">{project.name}</div>
                <div>{project.skills.join(", ")}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
