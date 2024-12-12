"use client";

import projects from "@/projectData/projects";
import Image from "next/image";

import { IoMdCloseCircle } from "react-icons/io";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const param = useParams();
  const router = useRouter();

  const [project, setProject] = useState({});
  // const project = projects[param.projectId - 1];

  useEffect(() => {
    setProject(projects[param.projectId - 1]);
  }, []);

  return (
    <>
      {project?.image && <Image src={project?.image} alt={project?.name} />}
      <h1 className="text-center md:text-5xl sm:text-3xl text-xl">
        {project?.name}
      </h1>
      <div>
        <h2 className="text-center">Tools Used:</h2>
        <p className="text-center">{project?.skills?.join(", ")}</p>
      </div>
      <p className="text-center">{project?.body}</p>
      {project?.links?.map((link, index) => (
        <a key={index} href={link.src}>
          {link.type}
        </a>
      ))}
      {project?.video && <video src={project?.video}></video>}
      <div className="w-full fixed bottom-0 bg-[#202020]">
        <IoMdCloseCircle
          onClick={() => router.back()}
          className="size-16 m-auto cursor-pointer hover:text-red-600"
        />
      </div>
    </>
  );
}
