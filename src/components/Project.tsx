import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CategoryList from "./CategoryList";
import GradientBox from "./GradientBox";

interface projectProps {
  project: {
    title: string;
    img_src: string;
    github_url: string;
    demo_url?: string;
    description: string;
    category: string[];
  };
  index: number;
  columns?: number;
}

export default function Project({ project, index, columns = 0 }: projectProps) {
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
    <GradientBox
      className={`bg-gradient-to-tr p-0.5 md:w-[26rem] sm:w-[90%] sm:max-w-[20rem] md:max-w-none rounded-2xl project-start ${
        seeProject ? "project-end" : ""
      }`}
      style={{
        transitionDelay: `${columns ? ((index % columns) + 1) * 100 : 0}ms`,
      }}
    >
      <div
        className={`flex flex-col bg-DarkBlue md:h-[34rem] sm:h-fit p-4 rounded-2xl`}
        ref={ref}
      >
        <div className="relative md:h-[15rem] h-[10rem] w-full rounded-lg overflow-hidden">
          <Image src={project.img_src} alt={`Photo of project ${index}`} fill />
        </div>
        <p className="text-2xl font-mono font-semibold text-white md:mt-3 md:mb-1 md:ml-4 sm:mt-2.5 sm:mb-0.5 sm:ml-2">
          {project.title}
        </p>
        <div className="w-[95%] mx-auto">
          <p className="text-white">{project.description}</p>
          <CategoryList categories={project.category} />
        </div>
        <div className="flex justify-between w-full md:px-8 pb-4 sm:mt-8 md:mt-auto">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
              className="drop-shadow-[0px_0px_0.3rem_#00D19D] hover:drop-shadow-[0px_0px_0.6rem_#00D19D] transition-all duration-300 ease-out md:h-12 md:w-36 sm:h-9 sm:w-[47.5%]"
            >
              <GradientBox className="bg-gradient-to-r rounded-3xl h-full flex items-center justify-center">
                <p className="md:text-base sm:text-xs font-mono">
                  <span className="sm:hidden md:block">LIVE PREVIEW</span>
                  <span className="sm:block md:hidden">LIVE DEMO</span>
                </p>
              </GradientBox>
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="drop-shadow-[0px_0px_0.3rem_#FFFFFF] hover:drop-shadow-[0px_0px_0.6rem_#FFFFFF] transition-all duration-300 ease-out md:h-12 md:w-36 sm:h-9 sm:w-[47.5%]"
            >
              <div className="rounded-3xl flex-row md:gap-x-2 sm:gap-x-0.5 h-full flex items-center justify-center bg-white border-[0.2rem] border-[#323131]">
                <p className="text-[#323131] md:text-base sm:text-xs font-mono">
                  SOURCE
                </p>
                <div className="relative md:h-7 md:w-7 sm:h-4 sm:w-4">
                  <Image src="GithubLogo.svg" alt="Github Logo" fill />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </GradientBox>
  );
}
