import Image from "next/image";
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

export default function ProjectSm({ project, index }: projectProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div
      className={`${
        index % 2 === 1 ? "start-resource-even" : "start-resource-odd"
      } smproject flex flex-col sm:w-72 md:w-96 lg:w-3/12 space-y-4 ${
        inView ? "end-resource" : ""
      }`}
      ref={ref}
    >
      <div className="sm:justify-between md:justify-center text-xs text-white flex sm:flex-row">
        <p className="sm:hidden md:flex">
          Hover on picture to choose a code file
          <span className="text-sm sm:hidden md:flex">👇</span>
        </p>
        <div
          className={`sm:flex md:hidden ${
            project.demo_url ? "" : "w-full justify-center items-center"
          }`}
        >
          <a
            href={project.github_url}
            className="flex flex-row space-x-0.5"
            target="_blank"
          >
            <p>Click here for code</p>
            <span className="h-3 w-3 relative my-auto">
              <Image
                src="/linkclick.png"
                className="invert"
                sizes="100%"
                priority
                fill
                alt="clickPhoto"
              />
            </span>
          </a>
        </div>
        {project.demo_url ? (
          <div className="sm:flex md:hidden">
            <a
              href={project.demo_url}
              className="flex flex-row space-x-0.5"
              target="_blank"
            >
              <p>Click here for demo</p>
              <span className="h-3 w-3 relative my-auto">
                <Image
                  src="/linkclick.png"
                  className="invert"
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                  alt="clickPhoto"
                />
              </span>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="h-48 w-full project-shadow relative">
        <Image
          src={project.img_src}
          alt={`Photo of project ${index}`}
          fill
          sizes="100%"
          priority
        />
      </div>
      <div className="backdrop-blur-lg border-LightBlue rounded-xl">
        <p className="text-justify text-white m-3">{project.description}</p>
      </div>
    </div>
  );
}
