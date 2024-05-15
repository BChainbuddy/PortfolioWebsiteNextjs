import SKILLS from "../../data/skills.json";
import Skill from "@/components/Skill";
import LearningResource from "@/components/LearningResource";
import resources from "../../data/resources.json";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col lg:space-y-12 sm:space-y-16 sm:pb-20 pb-8">
        <div className="lg:p-8 lg:mt-4 sm:mt-14">
          <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
            TECHNOLOGIES
          </h1>
        </div>
        <div className="lg:flex place-items-center sm:hidden lg:space-y-20 lg:flex-col px-12 items-start">
        <div className="flex ml-20">
            <div className="flex-row flex items-center space-x-10 w-full">
              <h2 className="w-48 cursor-default text-3xl text-LightBlue text-center border-LightBlue border-2 rounded-2xl font-mono">
                BACKEND
              </h2>
              <div className="space-x-6">
                {SKILLS["backend"].map((skill, i) => (
                  <Skill skill={skill} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex ml-20">
            <div className="flex-row flex items-center space-x-10 w-full">
              <h2 className="w-48 cursor-default text-3xl text-LightBlue text-center font-mono border-LightBlue border-2 rounded-2xl">
                FRONTEND
              </h2>
              <div className="space-x-6">
                {SKILLS["frontend"].map((skill, i) => (
                  <Skill skill={skill} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex ml-20">
            <div className="flex flex-row items-center space-x-10 w-full">
              <h2 className="w-48 cursor-default text-3xl text-LightBlue text-center font-mono border-LightBlue border-2 rounded-2xl">
                DATABASE
              </h2>
              <div className="space-x-6">
                {SKILLS["database"].map((skill, i) => (
                  <Skill skill={skill} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex lg:hidden justify-center px-4">
          <div className="grid grid-cols-3 place-items-center gap-10">
            {SKILLS["frontend"].map((skill, i) => (
              <Skill skill={skill} key={i} />
            ))}
            {SKILLS["backend"].map((skill, i) => (
              <Skill skill={skill} key={i} />
            ))}
            {SKILLS["database"].map((skill, i) => (
              <Skill skill={skill} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden lg:flex flex-col space-y-16 p-8 pb-44">
        <div className="lg:p-8 lg:mt-10 sm:mt-14">
          <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
            CERTIFICATES / LEARNING RESOURCES
          </h1>
        </div>
        <div id="resources" className="flex mx-auto w-3/4 flex-col space-y-32">
          <LearningResource
            color="text-cyan-200"
            borderColor="border-cyan-200"
            text={resources[0].text}
            title={resources[0].name}
            url={resources[0].url}
            img_src="/codecademylogo.jpeg"
            even={false}
          />
          <LearningResource
            color="text-white"
            borderColor="border-white"
            text={resources[1].text}
            title={resources[1].name}
            url={resources[1].url}
            img_src="/freecodecampwhite.png"
            even={true}
          />
          <LearningResource
            color="text-lime-600"
            borderColor="border-lime-600"
            text={resources[2].text}
            title={resources[2].name}
            url={resources[2].url}
            img_src="/cryptoZombiesLogo.png"
            even={false}
          />
          <LearningResource
            color="text-emerald-400"
            borderColor="border-emerald-400"
            text={resources[3].text}
            title={resources[3].name}
            url={resources[3].url}
            img_src="/Moralis.webp"
            even={true}
          />
          <LearningResource
            color="text-violet-400"
            borderColor="border-violet-400"
            text={resources[4].text}
            title={resources[4].name}
            url={resources[4].url}
            img_src="/udemyLogo.jpeg"
            even={false}
          />
        </div>
      </div>
    </>
  );
}
