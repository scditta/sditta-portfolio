"use client";
import { IoMdCloseCircle } from "react-icons/io";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { lazy, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
// import ProjectImage from "@/app/components/ProjectImage";
const ProjectImage = lazy(() => import("../../components/ProjectImage"));

export default function Page() {
  const param = useParams();
  const router = useRouter();

  const [project, setProject] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
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
        <div className="mx-10 h-full flex items-center lg:flex-row flex-col">
          {/* Image View */}
          <Suspense fallback={<div>Loading ... </div>}>
            <div className="basis-1/2">
              <div className="my-3">
                {project?.images && (
                  <ProjectImage
                    image={project?.images[selectedImage]}
                    className={"w-fit object-contain h-fit"}
                    primaryImage={false}
                  />
                )}
              </div>
              <div className="w-full overflow-auto">
                <div className="w-fit flex flex-nowrap items-stretch">
                  {project?.images &&
                    project?.images?.map((img, index) => {
                      return (
                        <div
                          className={`cursor-pointer w-48 border-4 border-[#202020] hover:border-slate-600 ${
                            index === selectedImage ? "border-red-800" : ""
                          }`}
                          onClick={() => handleClick(index)}
                          key={index}
                        >
                          <Suspense fallback={<div>Loading ... </div>}>
                            <ProjectImage
                              image={img}
                              className={"object-cover w-48 h-40"}
                              primaryImage={false}
                            />
                          </Suspense>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Suspense>
          {/* Info */}
          <div className="basis-1/2 md:h-1/2 lg:justify-between justify-around text-center flex flex-col lg:mx-5">
            <span className="">
              <h1 className="font-bold text-xl underline">Description:</h1>
              <p>{project?.body}</p>
            </span>
            <span className="">
              <h1 className="font-bold text-xl underline">Tools:</h1>
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
            </span>
            <span>
              <h1 className="font-bold text-xl underline">Links:</h1>
              <ul className="mb-20 mt-2">
                {project?.links?.map((link, index) => {
                  return (
                    <li className="inline-block" key={index}>
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
            </span>
          </div>
        </div>
        <div className="w-full h-auto fixed bottom-0 bg-[#202020]">
          <IoMdCloseCircle
            onClick={() => router.back()}
            className="size-16 m-auto cursor-pointer hover:text-slate-400"
          />
        </div>
      </div>
    </>
  );
}
