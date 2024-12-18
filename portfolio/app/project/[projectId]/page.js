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
      <div className="w-screen">
        <h1 className="text-center md:text-5xl sm:text-3xl text-xl">
          {project?.name}
        </h1>
        {/* <div className="flex"> */}
        <div className="w-full px-10 pt-10">
          {project?.image && (
            <Image
              src={project?.image[selectedImage]}
              alt={project?.name}
              className="w-full h-fit object-cover"
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
                        className="object-cover w-48"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* <div className="w-1/2"></div> */}
        {/* </div> */}
        {/* <div>
          <h2 className="text-center">Tools Used:</h2>
          <p className="text-center">{project?.skills?.join(", ")}</p>
        </div>
        <p className="text-center">{project?.body}</p>
        {project?.links?.map((link, index) => (
          <a key={index} href={link.src} target="_blank">
            {link.type}
          </a>
        ))}
        {project?.video && <video src={project?.video}></video>} */}
      </div>
      <div className="w-full fixed bottom-0 bg-[#202020]">
        <IoMdCloseCircle
          onClick={() => router.back()}
          className="size-16 m-auto cursor-pointer hover:text-red-600"
        />
      </div>
    </>
  );
}
