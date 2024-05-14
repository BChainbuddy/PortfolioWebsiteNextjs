import Image from "next/image";

interface technologyProps {
  skill: {
    img_src: string,
    name: string
  }
}

export default function Technology({ skill } : technologyProps) {
  return (
    <div className="relative group inline-block">
      <div
        className="sm:h-20 sm:w-20 md:h-24 md:w-24 skill-shadow rounded-xl overflow-hidden relative"
      >
        <Image src={skill.img_src} alt={(skill.name, " logo")} fill />
      </div>
      <div className="cursor-default flex opacity-0 hover:opacity-100 absolute inset-0 justify-center text-center items-center hover:backdrop-blur-xl rounded-xl text-DarkBlue font-mono font-bold">
        <p>{skill.name}</p>
      </div>
    </div>
  );
}
