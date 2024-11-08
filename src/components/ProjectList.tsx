import { useEffect, useRef, useState } from "react";
import PROJECTS from "../data/projects.json";
import Project from "./Project";

interface projectListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  filter: string;
  setFilter: (filter: string) => void;
  setOpenFilter: (openFilter: boolean) => void;
}

export default function ProjectList({
  open,
  setOpen,
  filter,
  setFilter,
  setOpenFilter,
}: projectListProps) {
  const [projects, setProjects] = useState(PROJECTS);
  const [columnCount, setColumnCount] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current?.offsetWidth || 0;
        const fontSize = getComputedStyle(gridRef.current).fontSize;
        // console.log(`Font size: ${fontSize}`);

        const fontSizeInPx = parseFloat(fontSize);
        // console.log(`Font size in pixels: ${fontSizeInPx}px`);

        const columns = Math.floor(gridWidth / (fontSizeInPx * 24));
        // console.log(`Number of columns: ${columns}`);
        setColumnCount(columns);
      }
    };

    handleResize();
  }, [projects]);

  return (
    <>
      <div className={`project-list sm:hidden lg:grid`} ref={gridRef}>
        {projects.slice(0, columnCount).map((project, i) => (
          <Project
            project={project}
            key={`${filter}-static-${i}`} // Key includes filter to force re-render on filter change
            index={i}
            columns={columnCount}
          />
        ))}

        {/* Conditionally render additional items only when open */}
        {open &&
          projects
            .slice(columnCount)
            .map((project, i) => (
              <Project
                project={project}
                key={`${filter}-${columnCount + i}`}
                index={columnCount + i}
                columns={columnCount}
              />
            ))}
      </div>
      <div className="view-start sm:hidden lg:flex justify-center mt-6 lg:p-12">
        <button
          className="project-shadow darkGreenBackground border-LightBlue border-8 hover:bg-teal-600 active:border-teal-900 rounded-lg w-52 text-center active:shadow-none active:mt-1"
          onClick={() => {
            setOpen(!open);
            setFilter("");
            setOpenFilter(false);
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
