import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CategoryList from "./CategoryList";

interface projectProps {
  project: {
    img_src: string;
    github_url: string;
    demo_url?: string;
    description: string;
    category: string[];
  };
  index: number;
  columns: number;
}

export default function Project({ project, index, columns }: projectProps) {
  const [seeProject, setSeeProject] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !seeProject) {
      setSeeProject(true);
    }
  }, [inView]);

  return (
    <div
      className={`flex flex-col w-[22rem] gap-y-4 project-start ${
        seeProject ? "project-end" : ""
      }`}
      ref={ref}
      style={{ transitionDelay: `${((index % columns) + 1) * 100}ms` }}
    >
      <div className="sm:justify-between md:justify-center text-xs text-white flex sm:flex-row">
        <p className="sm:hidden md:flex">
          Hover on picture to see the product
          <span className="text-sm sm:hidden md:flex">👇</span>
        </p>
      </div>
      <div className="relative group rounded-md overflow-hidden">
        <div>
          <div className="h-[14rem] w-full project-shadow group-hover:shadow-none relative">
            <Image
              src={project.img_src}
              alt={`Photo of project ${index}`}
              fill
            />
          </div>
          <div className="md:flex sm:hidden">
            <a href={project.github_url} target="_blank">
              <div
                className={`${
                  project.demo_url ? "w-1/2" : "w-full"
                } text-BlueGreen darkGreenBackground opacity-0 hover:opacity-100 absolute top-0 left-0 bottom-0 hover:backdrop-blur-lg text-cyan-600 font-bold flex items-center justify-center text-center`}
              >
                <p>Click to see the source code...</p>
              </div>
            </a>
            {project.demo_url ? (
              <a href={project.demo_url} target="_blank">
                <div className="text-BlueGreen darkGreenBackground w-1/2 opacity-0 hover:opacity-100 absolute top-0 right-0 bottom-0 hover:backdrop-blur-lg text-cyan-600 font-bold flex items-center justify-center text-center">
                  <p>Click to see the demo...</p>
                </div>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="backdrop-blur-lg darkGreenBackground border-LightBlue rounded-xl p-3">
        <p className="text-justify text-white">{project.description}</p>
        <CategoryList categories={project.category} />
      </div>
    </div>
  );
}
