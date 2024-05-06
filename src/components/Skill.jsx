import Image from "next/image";

export default function Technology({ skill }) {
  return (
    <div className="relative group inline-block">
      <img
        src={skill.img_src}
        className="sm:h-20 sm:w-20 md:h-24 md:w-24 shadow-lg shadow-cyan-500/50 rounded-xl"
      />
      <div className="cursor-default flex opacity-0 hover:opacity-100 absolute inset-0 justify-center text-center items-center hover:backdrop-blur-xl rounded-xl text-DarkBlue font-mono font-bold">
        <p>{skill.name}</p>
      </div>
    </div>
  );
}
