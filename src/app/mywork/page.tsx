"use client";
import ProjectList from "@/components/ProjectList";
import { useState } from "react";
import FilterOption from "@/components/FilterOption";
import PROJECTS from "../../data/projects.json";
import ProjectSm from "@/components/ProjectSm";

export default function MyWork() {
  const [filter, setFilter] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col pb-8 overflow-hidden">
      <div className="lg:p-8 lg:mt-4 sm:mt-14">
        <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
          MY WORK PORTFOLIO
        </h1>
      </div>
      <div className="lg:flex sm:hidden md:py-4 md:mt-4 justify-between items-center px-[10%]">
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
              openFilter ? "filterMenuOpen h-56" : "filterMenuClose"
            } `}
          >
            <FilterOption
              name={"Javascript"}
              option={"javascript"}
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
      <ProjectList
        open={open}
        setOpen={setOpen}
        filter={filter}
        setFilter={setFilter}
        setOpenFilter={setOpenFilter}
      />
      <div className="sm:flex lg:hidden sm:mt-20 md:mt-0 sm:flex-col sm:pb-20 md:pb-10 md:px-16 md:pt-16 md:py-10 sm:space-y-20 md:space-y-20 sm:items-center md:items-center">
        {PROJECTS.map((project, i) => (
          <ProjectSm project={project} index={i} key={i} />
        ))}
      </div>
    </div>
  );
}
