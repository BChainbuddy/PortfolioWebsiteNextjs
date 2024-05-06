import { useInView } from "react-intersection-observer";

export default function ProjectSm({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
          <p className="text-sm sm:hidden md:flex">👇</p>
        </p>
        <a
          href={project.github_url}
          className="sm:flex md:hidden flex-row space-x-0.5"
        >
          <p>Click here for code</p>
          <img src="Img/linkclick.png" className="invert h-3 w-3 mt-0.5" />
        </a>
        {project.demo_url ? (
          <a
            href={project.demo_url}
            className="sm:flex md:hidden flex flex-row space-x-0.5"
            target="_blank"
          >
            <p>Click here for demo</p>
            <img src="Img/linkclick.png" className="invert h-3 w-3 mt-0.5" />
          </a>
        ) : (
          <></>
        )}
      </div>
      <img
        src={project.img_src}
        className="h-48 w-full shadow-lg shadow-cyan-500/50 group-hover:shadow-none"
      />
      <div className="backdrop-blur-lg border-LightBlue rounded-xl">
        <p className="text-justify text-white m-3">{project.description}</p>
      </div>
    </div>
  );
}
