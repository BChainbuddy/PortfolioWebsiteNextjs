"use client";

import ProjectList from "@/components/ProjectList";
import PROJECTS from "../../data/frontEndProjects.json";
import PageTitle from "@/components/PageTitle";
import Project from "@/components/Project";

export default function MyWork() {
  return (
    <div className="flex flex-col pb-8 overflow-hidden">
      <PageTitle title="MY WORK PORTFOLIO" />
      <ProjectList />
      <div className="sm:flex lg:hidden sm:mt-20 md:mt-0 sm:flex-col sm:pb-20 md:pb-10 md:px-16 md:pt-16 md:py-10 sm:space-y-20 md:space-y-20 sm:items-center md:items-center">
        {PROJECTS.map((project, i) => (
          <Project project={project} index={i} key={i} />
        ))}
      </div>
    </div>
  );
}
