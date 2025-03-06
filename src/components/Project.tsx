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
    <GradientBox
      className={`bg-gradient-to-tr p-0.5 w-[26rem] rounded-2xl project-start ${
        seeProject ? "project-end" : ""
      }`}
      style={{ transitionDelay: `${((index % columns) + 1) * 100}ms` }}
    >
      <div
        className={`flex flex-col bg-DarkBlue h-[34rem] p-4 rounded-2xl`}
        ref={ref}
      >
        <div className="relative h-[15rem] w-full rounded-lg overflow-hidden">
          <Image src={project.img_src} alt={`Photo of project ${index}`} fill />
        </div>
        <p className="text-2xl font-mono font-semibold text-white mt-3 mb-1 ml-4">
          {project.title}
        </p>
        <div className="w-[95%] mx-auto">
          <p className="text-white">{project.description}</p>
          <CategoryList categories={project.category} />
        </div>
        <div className="mt-auto flex justify-between w-full px-8 pb-4">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
              className="drop-shadow-[0px_0px_0.3rem_#00D19D] hover:drop-shadow-[0px_0px_0.6rem_#00D19D] traansition-all duration-300 ease-out"
            >
              <GradientBox className="bg-gradient-to-r rounded-3xl h-12 w-36 flex items-center justify-center">
                <p className="text-base font-mono">LIVE PREVIEW</p>
              </GradientBox>
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="drop-shadow-[0px_0px_0.3rem_#FFFFFF] hover:drop-shadow-[0px_0px_0.6rem_#FFFFFF] transition-all duration-300 ease-out"
            >
              <div className="rounded-3xl flex-row gap-x-2 h-12 w-36 flex items-center justify-center bg-white border-[0.2rem] border-[#323131]">
                <p className="text-[#323131] text-base font-mono">SOURCE</p>
                <div className="relative h-7 w-7">
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
