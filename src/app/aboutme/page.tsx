"use client";

import AboutParagraph from "@/components/AboutParagraph";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  "Hello! I’m Jaka , a full-stack developer from Slovenia with a keen interest in both web2 and web3 technologies. Currently pursuing a master’s in business informatics at the School of Economics and Business Ljubljana, I combine solid business knowledge with technical expertise to create impactful digital solutions.",
  "Over the past 2.5 years, I have immersed myself in the development world, gaining hands-on experience and a deep understanding of various programming languages and frameworks. My educational journey is complemented by professional certifications, including a prestigious Full Stack Developer Career Path. This certification, among others, stands testament to my dedication and capability in tackling diverse and complex technical challenges.",
  "In the realm of development, I thrive on learning and employing cutting-edge technologies. My portfolio spans dynamic e-commerce platforms to sophisticated decentralized applications, showcasing my ability to handle complex technical tasks. My enthusiasm for the latest tech innovations keeps me continuously evolving and at the forefront of the industry.",
  "Outside of coding, I am an avid sports enthusiast and fitness buff, particularly passionate about basketball. This energy extends into my personal pursuits where I enjoy exploring the world and discovering new things. Whether it’s staying updated with the latest tech innovations or delving into books on personal growth, I am always learning.",
  "I am known for my devotion and reliability, consistently standing firm in my commitments. I thrive on setting myself challenges and overcoming them, which aligns with my professional work where I am dedicated to delivering projects with precision and passion.",
  "I am also a social individual who loves connecting with people from diverse backgrounds. Every interaction is an opportunity to learn and grow together, which is why I value my time collaborating with others, whether in hackathons or team projects.",
  "Feel free to connect with me or explore my work further through my site. Let’s collaborate to create something exceptional!",
];

export default function AboutMe() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Europe/Ljubljana",
        hour: "numeric" as "numeric",
        minute: "numeric" as "numeric",
        hour12: true,
      };
      const sloveniaTime = new Date().toLocaleTimeString("en-US", options);
      setTime(sloveniaTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:space-y-8 sm:space-y-10 md:pb-14 sm:pb-8 overflow-hidden">
      <PageTitle title="ABOUT ME" />
      <div className="md:flex flex-row justify-center lg:gap-x-32 md:gap-x-14 hidden md:px-[2%] lg:px-[0]">
        <div className="backdrop-blur-2xl darkGreenBackground w-[38rem] rounded-3xl border-LightBlue p-3">
          <div className="flex flex-col gap-y-10 m-3">
            {data.map((paragraph, index) => (
              <AboutParagraph value={paragraph} key={index} />
            ))}
          </div>
          <div className="p-10 pb-24 flex flex-row justify-center space-x-1">
            <a
              href="/CV_Jaka_Potokar.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white glowing-underline">
                Click here to check my CV |
              </p>
            </a>
            <a
              href="/CV_Jaka_Potokar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="invert"
            >
              <Image
                src="/linkclick.png"
                width={21}
                height={21}
                alt="clickPhoto"
              />
            </a>
          </div>
        </div>
        <div className="w-[32rem] flex flex-col gap-y-4">
          <div className="bg-DarkBlue w-full flex flex-col rounded-lg border-LightBlue overflow-hidden">
            <div className="w-full flex flex-row items-start">
              <div className="bg-white lg:w-[14rem] lg:h-[15rem] md:w-[12rem] md:h-[15rem] relative rounded-md overflow-hidden">
                <Image
                  src="/JakaOsebna.jpg"
                  alt="Picture of Jaka"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-3">
                <AboutData subTitle="name" title="Jaka Potokar" />
                <AboutData subTitle="a.k.a." title="BChainBuddy" />
                <AboutData subTitle="location" title="Slovenia" />
                <AboutData subTitle="timezone" title="CET" />
                <AboutData subTitle="time" title={time} />
              </div>
            </div>
            <div className="flex flex-col text-white p-8 gap-y-3">
              <AboutData
                subTitle="education"
                title="Masters of Business Informatics(last year)"
              />
              <AboutData
                subTitle="hobbies"
                title="Basketball, Technology, Fishing and Reading"
              />
              <div className="flex flex-col gap-y-2 mt-2">
                <p className="text-LightBlue text-xl font-mono">Expertise</p>
                <div className="flex flex-row gap-x-3">
                  <ExpertiseImage src="/react3.png" alt="React" />
                  <ExpertiseImage src="/nextjs.png" alt="Nextjs" />
                  <ExpertiseImage src="/solidity.png" alt="Solidity" />
                  <ExpertiseImage src="/hardhat.png" alt="Hardhat" />
                </div>
              </div>
            </div>
          </div>
          <div className="darkGreenBackground w-full flex flex-col rounded-lg border-LightBlue overflow-hidden p-8 gap-y-5">
            <p className="text-LightBlue text-2xl font-mono text-center">
              Experience
            </p>
            <ExperienceInfo
              description="Mainly focused on front-end technologies such as React, React Native, Nextjs, also done little Solidity with Hardhat framework"
              company="Niov Labs"
              title="Front-end Developer"
              start="Aug 2024"
              end="Present"
            />
            <ExperienceInfo
              description="This was project made for hackaton ETH Toronto, I was in charge of creating the frontend for our Dapp"
              company="Run Bro"
              title="Front-end Developer"
              start="Jul 2024"
              end="Aug 2024"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-[5%] gap-y-6 md:hidden">
        <div className="bg-DarkBlue w-full flex flex-col rounded-3xl  border-LightBlue overflow-hidden">
          <div className="w-full flex flex-row items-start">
            <div className="bg-white h-[13rem] w-[11rem] relative rounded-md overflow-hidden">
              <Image
                src="/JakaOsebna.jpg"
                alt="Picture of Jaka"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-3">
              <AboutData subTitle="name" title="Jaka Potokar" />
              <AboutData subTitle="a.k.a." title="BChainBuddy" />
              <AboutData subTitle="location" title="Slovenia" />
              <AboutData subTitle="timezone" title="CET" />
              <AboutData subTitle="time" title={time} />
            </div>
          </div>
          <div className="flex flex-col text-white p-8 gap-y-3">
            <AboutData
              subTitle="education"
              title="Masters of Business Informatics(last year)"
            />
            <AboutData
              subTitle="hobbies"
              title="Basketball, Technology, Fishing and Reading"
            />
            <div className="flex flex-col gap-y-2 mt-2">
              <p className="text-LightBlue lg:text-xl md:text-lg text-base font-mono">
                Expertise
              </p>
              <div className="flex flex-row gap-x-3">
                <ExpertiseImage src="/react3.png" alt="React" />
                <ExpertiseImage src="/nextjs.png" alt="Nextjs" />
                <ExpertiseImage src="/solidity.png" alt="Solidity" />
                <ExpertiseImage src="/hardhat.png" alt="Hardhat" />
              </div>
            </div>
            <div className="flex flex-col gap-y-5 mt-8">
              <p className="text-LightBlue text-xl font-mono text-center">
                Experience
              </p>
              <ExperienceInfo
                description="Mainly focused on front-end technologies such as React, React Native, Nextjs, also done little Solidity with Hardhat framework"
                company="Niov Labs"
                title="Front-end Developer"
                start="Aug 2024"
                end="Present"
              />
              <ExperienceInfo
                description="This was project made for hackaton ETH Toronto, I was in charge of creating the frontend for our Dapp"
                company="Run Bro"
                title="Front-end Developer"
                start="Jul 2024"
                end="Aug 2024"
              />
            </div>
          </div>
        </div>
        <div className="darkGreenBackground w-full rounded-3xl border-LightBlue sm:mb-16 pb-10">
          <div className="flex flex-col gap-y-10 m-[5%]">
            {data.map((paragraph, index) => (
              <AboutParagraph value={paragraph} key={index} />
            ))}
          </div>
          <div className="p-2 rounded-2xl flex flex-row justify-center space-x-1">
            <a href="/CV_Jaka_Potokar.pdf" target="_blank">
              <p className=" text-white glowing-underline">
                Click here to check my CV
              </p>
            </a>
            <a
              href="/CV_Jaka_Potokar.pdf"
              target="_blank"
              className="mt-1 invert"
            >
              <Image
                src="/linkclick.png"
                width={15}
                height={15}
                alt="clickPhoto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutData = ({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) => {
  return (
    <p className="text-white lg:text-lg text-base md:mb-1 lg:mb-0">
      <span className="text-LightBlue lg:text-sm text-xs font-mono block lg:inline">
        {subTitle}{" "}
      </span>
      {title}
    </p>
  );
};

const ExpertiseImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10 relative md:rounded-xl rounded-lg overflow-hidden">
      <Image src={src} fill className="object-cover" alt={alt} />
    </div>
  );
};

const ExperienceInfo = ({
  description,
  company,
  title,
  start,
  end,
}: {
  description: string;
  company: string;
  title: string;
  start: string;
  end: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="md:text-lg text-base font-mono text-white">{company}</p>
        <p className="text-white md:text-sm text-xs">
          {start} - {end}
        </p>
      </div>
      <p className="md:text-2xl text-lg font-mono font-black text-LightBlue">
        {title}
      </p>
      <p className="md:text-base text-sm text-white">{description}</p>
    </div>
  );
};
