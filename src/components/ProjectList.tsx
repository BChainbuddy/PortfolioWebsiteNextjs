"use client";

import { useEffect, useRef, useState } from "react";
import PROJECTS from "@/data/frontEndProjects.json";
import Project from "./Project";
import FilterOption from "./FilterOption";
import { motion } from "framer-motion";

export default function ProjectList() {
  // Change filter state to an array
  const [filter, setFilter] = useState<string[]>([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);

  const [projects, setProjects] = useState(PROJECTS);
  const [columnCount, setColumnCount] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const gridRef2 = useRef<HTMLDivElement>(null);

  // Update max height when projects change or section is toggled
  useEffect(() => {
    if (gridRef2.current) {
      setMaxHeight(gridRef2.current.scrollHeight);
    }
  }, [projects, open]);

  // Filter projects: only show projects that include all selected filter options.
  useEffect(() => {
    if (filter.length > 0) {
      const filteredProjects = PROJECTS.filter((project) =>
        filter.every((option) => project.category.includes(option))
      );
      setProjects(filteredProjects);
    } else {
      setProjects(PROJECTS);
    }
  }, [filter]);

  // Calculate column count on resize
  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current.offsetWidth || 0;
        const fontSize = getComputedStyle(gridRef.current).fontSize;
        const fontSizeInPx = parseFloat(fontSize);
        const columns = Math.floor(gridWidth / (fontSizeInPx * 28));
        setColumnCount(columns);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [projects]);

  // Helper function to toggle an option in the filter array
  const toggleFilter = (option: string) => {
    setFilter((prevFilter) =>
      prevFilter.includes(option)
        ? prevFilter.filter((item) => item !== option)
        : [...prevFilter, option]
    );
  };

  return (
    <>
      <div className="lg:flex sm:hidden md:py-4 md:mt-4 justify-between items-center w-[90%] max-w-[90rem] mx-auto px-[2%]">
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
            {/* Update each FilterOption to use the toggleFilter function */}
            <FilterOption
              name={"Javascript"}
              option={"javascript"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Typescript"}
              option={"typescript"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Python"}
              option={"python"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Solidity"}
              option={"solidity"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Nextjs"}
              option={"nextjs"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Hardhat"}
              option={"hardhat"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"React"}
              option={"react"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
            <FilterOption
              name={"Golang"}
              option={"golang"}
              toggleFilter={toggleFilter}
              filter={filter}
            />
          </div>
        </div>
      </div>
      <div
        ref={gridRef}
        className={`sm:hidden lg:flex flex-wrap gap-4 justify-center pt-[3rem] mx-auto w-[90%] max-w-[90rem] gap-y-[3rem] gap-x-[2rem] `}
      >
        {projects.slice(0, columnCount).map((project, i) => (
          <Project
            project={project}
            key={`${filter.join(",")}-static-${i}`}
            index={i}
            columns={columnCount}
          />
        ))}
      </div>
      <motion.div
        className={`sm:hidden lg:flex flex-wrap gap-4 justify-center overflow-hidden mx-auto w-[90%] max-w-[90rem] gap-y-[3rem] gap-x-[2rem] ${
          open && "mt-[3rem]"
        }`}
        initial={false}
        animate={{ maxHeight: open ? maxHeight : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        ref={gridRef2}
      >
        {projects.slice(columnCount).map((project, i) => (
          <Project
            project={project}
            key={`${filter.join(",")}-${columnCount + i}`}
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
            setFilter([]); // Reset filter on toggle
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
