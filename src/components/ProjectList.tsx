"use client";

import { useEffect, useRef, useState } from "react";
import PROJECTS from "../data/projects.json";
import Project from "./Project";
import FilterOption from "./FilterOption";
import { motion } from "framer-motion";

export default function ProjectList() {
  const [filter, setFilter] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);

  const [projects, setProjects] = useState(PROJECTS);
  const [columnCount, setColumnCount] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const gridRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef2.current) {
      // Update max height based on the scroll height of the content
      setMaxHeight(gridRef2?.current.scrollHeight);
    }
  }, [projects, open]);

  useEffect(() => {
    if (filter) {
      const filteredProjects = PROJECTS.filter((project) =>
        project.category.includes(filter)
      );
      setProjects(filteredProjects);
    } else {
      setProjects(PROJECTS);
    }
  }, [filter]);

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const gridWidth = gridRef?.current.offsetWidth || 0;
        const fontSize = getComputedStyle(gridRef.current).fontSize;
        const fontSizeInPx = parseFloat(fontSize);
        const columns = Math.floor(gridWidth / (fontSizeInPx * 23));
        setColumnCount(columns);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [projects]);

  return (
    <>
      <div className="lg:flex sm:hidden md:py-4 md:mt-4 justify-between items-center w-[85%] mx-auto px-[2%]">
        <h2 className="text-2xl relative text-LightBlue font-mono font-semibold flex justify-center items-center w-[15rem]">
          <span
            className={`absolute transition-all duration-500 w-full ${
              !open
                ? "translate-y-4 opacity-0"
                : "translate-y-0 opacity-1 delay-300"
            }`}
          >
            ALL PROJECTS
          </span>
          <span
            className={`absolute transition-all duration-500 w-full ${
              !open
                ? "translate-y-0 opacity-1 delay-300"
                : "-translate-y-4 opacity-0"
            }`}
          >
            RECENTLY ADDED
          </span>
        </h2>
        <div className={open ? "" : "hidden"}>
          <button
            id="filterButton"
            className={`border-LightBlue border-8 w-36 text-center hover:bg-teal-600 ${
              openFilter
                ? "rounded-t-lg transitionFilterButtonOpen"
                : "rounded-lg transitionFilterButtonClose"
            }`}
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            <p className="text-base text-LightBlue">FILTER</p>
          </button>
          <div
            id="filterMenu"
            className={`overflow-hidden flex flex-col absolute rounded-b-lg w-36 bg-teal-900 z-10 transitionFilterMenu ${
              openFilter ? "filterMenuOpen h-64" : "filterMenuClose"
            } `}
          >
            <FilterOption
              name={"Javascript"}
              option={"javascript"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Typescript"}
              option={"typescript"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Python"}
              option={"python"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Solidity"}
              option={"solidity"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Nextjs"}
              option={"nextjs"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Hardhat"}
              option={"hardhat"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"React"}
              option={"react"}
              setFilter={setFilter}
              filter={filter}
            />
            <FilterOption
              name={"Golang"}
              option={"golang"}
              setFilter={setFilter}
              filter={filter}
            />
          </div>
        </div>
      </div>
      <div
        className={`project-list sm:hidden lg:grid pt-[3rem] mx-auto`}
        ref={gridRef}
      >
        {projects.slice(0, columnCount).map((project, i) => (
          <Project
            project={project}
            key={`${filter}-static-${i}`}
            index={i}
            columns={columnCount}
          />
        ))}
      </div>
      <motion.div
        className={`project-list sm:hidden lg:grid overflow-hidden mx-auto ${
          open && "mt-[6rem]"
        }`}
        ref={gridRef2}
        initial={false}
        animate={{ maxHeight: open ? maxHeight : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {projects.slice(columnCount).map((project, i) => (
          <Project
            project={project}
            key={`${filter}-${columnCount + i}`}
            index={columnCount + i}
            columns={columnCount}
          />
        ))}
      </motion.div>

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
