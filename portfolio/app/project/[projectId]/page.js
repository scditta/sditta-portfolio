"use client";

import projects from "@/projectData/projects";
import Image from "next/image";

import { IoMdCloseCircle } from "react-icons/io";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export default function Page() {
  const param = useParams();
  const router = useRouter();

  const [project, setProject] = useState({});
  // const project = projects[param.projectId - 1];
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    // setProject(projects[param.projectId - 1]);
    getProject();
    setSelectedImage(0);
  }, []);

  const getProject = async () => {
    try {
      const docSnap = await getDoc(doc(db, "projects", param.projectId));
      // console.log(docSnap.data());
      setProject(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (index) => {
    console.log(index);
    setSelectedImage(index);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <h1 className="text-center md:text-5xl sm:text-3xl text-xl mt-10">
          {project?.name}
        </h1>
        <div className="px-24 h-full flex items-center justify-center">
          <div className="w-1/2">
            <div className="my-3">
              {project?.image && (
                <Image
                  src={project?.image[selectedImage]}
                  alt={project?.name}
                  className="w-full object-cover h-[32rem]"
                />
              )}
            </div>
            <div className="w-full overflow-auto">
              <div className="w-fit flex flex-nowrap items-stretch">
                {project?.image &&
                  project.image.map((img, index) => {
                    return (
                      <div
                        className={`cursor-pointer border-4 w-48 hover:border-red-700 ${
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
            <div className="m-10">
              <h1>Description:</h1>
              <p>{project?.body}</p>
            </div>
            <div className="m-10">
              <h1>Tools:</h1>
              <ul>
                {project?.skills?.map((skill, index) => {
                  return (
                    <li
                      className="inline-block mx-2 px-1 mt-1 rounded-md bg-gray-700"
                      key={index}
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul>
              {project?.links?.map((link, index) => {
                return (
                  <li className="inline-block mt-10" key={index}>
                    <Link
                      className="mx-2 p-2 rounded-md bg-slate-300 text-slate-700 hover:bg-slate-400"
                      href={link?.url}
                      target="_blank"
                    >
                      {link?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
