import { useRouter } from "next/navigation";
import { lazy, Suspense, useEffect, useState } from "react";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebaseConfig";
// import ProjectImage from "./ProjectImage";
const ProjectImage = lazy(() => import("./ProjectImage"));

export default function Projects() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);

  const handleClick = (id) => {
    // console.log(`/project-${id + 1}`);
    router.push(`project/${id}`);
  };

  // const projectPrio = (prio) => {
  //   switch (prio.toUpperCase()) {
  //     case "L":
  //       return "1/2";
  //       break;
  //     case "M":
  //       return "1/4";
  //       break;
  //     case "S":
  //       return "1/6";
  //       break;
  //   }
  // };

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    let tempProjArr = [];
    try {
      const getProjects = collection(db, "projects");
      const queryProjects = query(getProjects, orderBy("date", "desc"));

      const querySnapshot = await getDocs(queryProjects);

      querySnapshot.forEach((project) => {
        tempProjArr.push({ ...project.data(), id: project.id });
      });
      setProjects(tempProjArr);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="projects">
      <div className="w-full">
        <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
          Projects
        </h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-10 sm:gap-5 gap-x-20 gap-y-4 place-items-center mt-5 mx-20 text-center">
          {projects.map((project) => {
            return (
              <Suspense
                key={project.id}
                fallback={
                  <div className="size-40 sm:size-40 md:size-52 lg:size-72 border-[#714545] relative z-1">
                    <div className="w-full h-full relative z-3">
                      <div className="absolute w-full h-full flex items-center">
                        <h1 className="z-3 w-full transition text-center text-xl font-bold">
                          Loading ...
                        </h1>
                      </div>
                    </div>
                  </div>
                }
              >
                <div
                  // basis-${projectPrio(project?.prio)}
                  className="size-40 sm:size-40 md:size-52 lg:size-72 border-[#714545] cursor-pointer group relative z-1"
                  onClick={() => handleClick(project.id)}
                >
                  {project?.images && (
                    <ProjectImage
                      image={project.images[0]}
                      className={"object-cover absolute z-2"}
                      fill={true}
                    />
                  )}
                  <div className="w-full h-full relative z-3">
                    <div className="absolute w-full h-full flex items-center">
                      <h1 className="z-3 w-full transition text-center md:text-xl sm:text-base text-sm font-bold group-hover:underline">
                        {project?.name}
                      </h1>
                    </div>
                    <div className="bg-[#1f1f1fbe] w-full h-full block group-hover:bg-[#111111ca]"></div>
                  </div>
                </div>
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
}
