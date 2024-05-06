import { useEffect, useState } from "react";
import PROJECTS from "../data/projects.json";
import Project from "./Project";

export default function ProjectList({ open, setOpen, filter, setFilter }) {
  const [projects, setProjects] = useState(PROJECTS);

  useEffect(() => {
    if (filter) {
      const filterProjects = PROJECTS.filter((project) => {
        return project.category.includes(filter);
      });
      setProjects(filterProjects);
    } else {
      setProjects(PROJECTS);
    }
  }, [filter]);

  return (
    <>
      <div
        className={`lg:grid sm:hidden grid-cols-3 place-items-center gap-y-28 p-10 items-stretch`}
      >
        {open ? (
          <>
            {projects.map((project, i) => (
              <Project
                project={project}
                key={`${filter}-${i}`}
                index={i}
                filter={filter}
              />
            ))}
          </>
        ) : (
          <>
            {projects.slice(0, 3).map((project, i) => (
              <Project project={project} key={i} index={i} />
            ))}
          </>
        )}
      </div>
      <div className="view-start sm:hidden lg:flex justify-center mt-6 lg:p-12">
        <button
          className="border-LightBlue border-8 hover:bg-teal-600 active:border-teal-900 rounded-lg w-52 text-center shadow-md shadow-cyan-400 active:shadow-none active:mt-1"
          onClick={() => {
            setOpen(!open);
            setFilter("");
          }}
        >
          <div className="relative group">
            <p className="text-lg text-LightBlue justify-center">
              {open ? "VIEW LESS" : "VIEW MORE"}
            </p>
            <p className="absolute -z-10 top-0.5 left-0 right-0.5 text-teal-900 text-lg">
              {open ? "VIEW LESS" : "VIEW MORE"}
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
