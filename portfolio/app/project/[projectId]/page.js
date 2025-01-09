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
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    setProject(projects[param.projectId - 1]);
    setSelectedImage(0);
  }, []);

  const handleClick = (index) => {
    console.log(index);
    setSelectedImage(index);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <h1 className="text-center md:text-5xl sm:text-3xl text-xl">
          {project?.name}
        </h1>
        <div className="px-24 h-full flex items-center justify-center">
          <div className="w-1/2">
            {project?.image && (
              <Image
                src={project?.image[selectedImage]}
                alt={project?.name}
                className=""
              />
            )}
            <div className="w-full overflow-auto">
              <div className="w-fit flex flex-nowrap items-stretch">
                {project?.image &&
                  project.image.map((img, index) => {
                    return (
                      <div
                        className={`cursor-pointer border-2 w-48 hover:border-red-700 ${
                          index === selectedImage ? "border-blue-700" : ""
                        }`}
                        onClick={() => handleClick(index)}
                        key={index}
                      >
                        <Image
                          src={img}
                          alt={project?.name}
                          className="object-cover w-48 h-40"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="w-1/2 text-center">
            <h1>test header</h1>
            <p>test writing</p>
          </div>
        </div>
        <div className="w-full fixed bottom-0 bg-[#202020]">
          <IoMdCloseCircle
            onClick={() => router.back()}
            className="size-16 m-auto cursor-pointer hover:text-red-600"
          />
        </div>
      </div>
    </>
  );
}
