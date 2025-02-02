"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import projects from "@/projectData/projects";
import Image from "next/image";

import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { db } from "@/firebaseConfig";
import ProjectImage from "./ProjectImage";

export default function Projects() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);

  const handleClick = (id) => {
    // console.log(`/project-${id + 1}`);
    router.push(`project/${id}`);
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

  useEffect(() => {
    getProjects();
  }, []);

  // const MainImage = ({ project }) => {
  //   // console.log(project);
  //   const [displayImg, setDisplayImg] = useState(null);
  //   const [flag, setFlag] = useState(false);

  //   useEffect(() => {
  //     handleProjectImage();
  //   }, []);

  //   const handleProjectImage = async () => {
  //     if (project?.images === undefined) {
  //       return;
  //     }
  //     // console.log(project?.images[0]);
  //     const storage = getStorage();
  //     const imageRef = ref(storage, project?.images[0]);
  //     // console.log(imageRef);
  //     // console.log(imageRef.bucket);
  //     await getDownloadURL(imageRef)
  //       .then((url) => {
  //         // console.log(url);
  //         setDisplayImg(url);
  //         setFlag(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   if (flag) {
  //     return (
  //       <>
  //         {project?.images && (
  //           <Image
  //             src={displayImg}
  //             alt={project?.name}
  //             fill={true}
  //             className="object-cover absolute z-2"
  //           />
  //         )}
  //       </>
  //     );
  //   } else {
  //     return <>Loading...</>;
  //   }
  // };

  const getProjects = async () => {
    let tempProjArr = [];
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((project) => {
        // console.log({ id: project.id, ...project.data() });
        // setProjects();
        // console.log(tempProjArr);
        tempProjArr.push({ ...project.data(), id: project.id });
      });
      setProjects(tempProjArr);
    } catch (err) {
      console.log(err);
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
                  project?.prio
                )} border-[#714545] cursor-pointer group relative z-1`}
                onClick={() => handleClick(project.id)}
              >
                <ProjectImage
                  image={project.images[0]}
                  className={"object-cover absolute z-2"}
                  fill={true}
                />
                <div className="w-full h-full relative z-3">
                  <div className="absolute w-full h-full flex items-center">
                    <h1 className="z-3 w-full transition text-center text-xl font-bold group-hover:underline">
                      {project?.name}
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
