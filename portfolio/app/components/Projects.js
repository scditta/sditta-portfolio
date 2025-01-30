"use client";
import { useRouter } from "next/navigation";

import projects from "@/projectData/projects";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();

  const handleClick = (id) => {
    // console.log(`/project-${id + 1}`);
    router.push(`project/${id + 1}`);
  };

  const projectPrio = (prio) => {
    switch (prio.toUpperCase()) {
      case "L":
        return "1/2";
        break;
      case "M":
        return "1/4";
        break;
      case "S":
        return "1/6";
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
                className={`h-96 basis-${projectPrio(
                  project.prio
                )} border-[#714545] cursor-pointer group relative z-1`}
                onClick={() => handleClick(project.id)}
              >
                {project?.image && (
                  <Image
                    src={project?.image[0]}
                    alt={project.name}
                    fill={true}
                    className="object-cover absolute z-2"
                  />
                )}

                <div className="w-full h-full relative z-3">
                  <div className="absolute w-full h-full flex items-center">
                    <h1 className="z-3 w-full transition text-center text-xl font-bold group-hover:underline">
                      {project.name}
                    </h1>
                  </div>
                  <div className="bg-[#1f1f1fbe] w-full h-full block group-hover:bg-[#111111ca]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
