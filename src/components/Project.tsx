import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface projectProps {
  project: {
    img_src: string;
    github_url: string;
    demo_url?: string; 
    description: string;
  };
  index: number;
}

export default function Project({ project, index } : projectProps) {
  const [seeProject, setSeeProject] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView && !seeProject) {
      setSeeProject(true);
    }
  }, [inView]);

  return (
    <div
      className={`flex flex-col w-80 space-y-4 ${
        seeProject ? "project-end" : ""
      } ${
        index % 3 === 0 ? "project1" : index % 3 === 1 ? "project2" : "project3"
      }`}
      ref={ref}
    >
      <div className="sm:justify-between md:justify-center text-xs text-white flex sm:flex-row">
        <p className="sm:hidden md:flex">
          Hover on picture to see the product
          <span className="text-sm sm:hidden md:flex">👇</span>
        </p>
      </div>
      <div className="relative group">
        <div>
          <div>
            <div className="h-48 w-full shadow-lg shadow-cyan-500/50 group-hover:shadow-none relative">
              <Image
                src={project.img_src}
                alt={`Photo of project ${index}`}
                fill
              />
            </div>
            <div className="md:flex sm:hidden">
              <a href={project.github_url}>
                <div
                  className={`${
                    project.demo_url ? "w-1/2" : "w-full"
                  } opacity-0 hover:opacity-100 absolute top-0 left-0 bottom-0 hover:backdrop-blur-lg text-cyan-600 font-bold flex items-center justify-center text-center`}
                >
                  <p>Click to see the source code...</p>
                </div>
              </a>
              {project.demo_url ? (
                <a href={project.demo_url} target="_blank">
                  <div
                    className="w-1/2 opacity-0 hover:opacity-100 absolute top-0 right-0 bottom-0 hover:backdrop-blur-lg text-cyan-600 font-bold flex items-center justify-center text-center"
                  >
                    <p>Click to see the demo...</p>
                  </div>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-lg border-LightBlue rounded-xl">
        <p className="text-justify text-white  m-3">{project.description}</p>
      </div>
    </div>
  );
}
