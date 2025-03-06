import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CategoryList from "./CategoryList";

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
    <div
      className={`flex flex-col w-[26rem] project-start bg-DarkBlue h-[35rem] p-3 ${
        seeProject ? "project-end" : ""
      }`}
      ref={ref}
      style={{ transitionDelay: `${((index % columns) + 1) * 100}ms` }}
    >
      <div className="relative h-[15rem] w-full rounded-lg overflow-hidden">
        <Image src={project.img_src} alt={`Photo of project ${index}`} fill />
      </div>
      <p className="text-2xl font-mono font-semibold text-white mt-2 ml-4">
        {project.title}
      </p>
      <div className="relative group rounded-md overflow-hidden"></div>
      <div className="w-[95%] mx-auto">
        <p className="text-justify text-white">{project.description}</p>
        <CategoryList categories={project.category} />
      </div>
    </div>
  );
}
