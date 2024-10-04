import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="lg:space-y-8 sm:space-y-10 md:pb-14 sm:pb-8 overflow-hidden">
      <div className="lg:p-8 lg:mt-4 sm:mt-14">
        <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
          ABOUT ME
        </h1>
      </div>
      <div className="lg:flex flex-row justify-center space-x-32 sm:hidden">
        <div className="backdrop-blur-2xl darkGreenBackground w-[38rem] rounded-3xl border-LightBlue p-3">
          <p className="text-justify text-xl text-white m-3 indent-8 ">
            Hello! I’m Jaka , a full-stack developer from Slovenia with a keen
            interest in both web2 and web3 technologies. Currently pursuing a
            master’s in business informatics at the School of Economics and
            Business Ljubljana, I combine solid business knowledge with
            technical expertise to create impactful digital solutions.<br></br>
            <br></br>
            Over the past 1.5 years, I have immersed myself in the development
            world, gaining hands-on experience and a deep understanding of
            various programming languages and frameworks. My educational journey
            is complemented by professional certifications, including a
            prestigious Full Stack Developer Career Path{" "}
            <Link
              href={
                "https://www.codecademy.com/profiles/JakaPotokar/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
              }
              className="text-cyan-400 hover:text-cyan-600 underline"
              target="_blank"
            >
              certificate from Codecademy
            </Link>
            . This certification, among others, stands testament to my
            dedication and capability in tackling diverse and complex technical
            challenges.<br></br>
            <br></br>
            In the realm of development, I thrive on learning and employing
            cutting-edge technologies. My portfolio spans dynamic e-commerce
            platforms to sophisticated decentralized applications, showcasing my
            ability to handle complex technical tasks. My enthusiasm for the
            latest tech innovations keeps me continuously evolving and at the
            forefront of the industry.<br></br>
            <br></br>
            Outside of coding, I am an avid sports enthusiast and fitness buff,
            particularly
          </p>
        </div>
        <div className="backdrop-blur-2xl darkGreenBackground w-[38rem] rounded-3xl border-LightBlue">
          <p className="text-justify text-xl text-white m-3 p-3">
            passionate about basketball. This energy extends into my personal
            pursuits where I enjoy exploring the world and discovering new
            things. Whether it’s staying updated with the latest tech
            innovations or delving into books on personal growth, I am always
            learning.<br></br>
            <br></br>I am known for my devotion and reliability, consistently
            standing firm in my commitments. I thrive on setting myself
            challenges and overcoming them, which aligns with my professional
            work where I am dedicated to delivering projects with precision and
            passion.<br></br>
            <br></br>I am also a social individual who loves connecting with
            people from diverse backgrounds. Every interaction is an opportunity
            to learn and grow together, which is why I value my time
            collaborating with others, whether in hackathons or team projects.
            <br></br>
            <br></br>
            Feel free to connect with me or explore my work further through my
            site. Let’s collaborate to create something exceptional!<br></br>
            <br></br>
          </p>
          <div className="p-10 flex flex-row justify-center space-x-1">
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
      </div>
      <div className="flex justify-center lg:hidden">
        <div className="darkGreenBackground sm:w-11/12 md:w-8/12 rounded-3xl border-LightBlue sm:mb-16 pb-10">
          <p className="text-justify md:text-xl text-base  text-white m-3 md:m-4 indent-8 ">
            Hello! I’m Jaka , a full-stack developer from Slovenia with a keen
            interest in both web2 and web3 technologies. Currently pursuing a
            master’s in business informatics at the School of Economics and
            Business Ljubljana, I combine solid business knowledge with
            technical expertise to create impactful digital solutions.<br></br>
            <br></br>
            Over the past 1.5 years, I have immersed myself in the development
            world, gaining hands-on experience and a deep understanding of
            various programming languages and frameworks. My educational journey
            is complemented by professional certifications, including a
            prestigious Full Stack Developer Career Path{" "}
            <Link
              href={
                "https://www.codecademy.com/profiles/JakaPotokar/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
              }
              className="text-cyan-400 hover:text-cyan-600 underline"
              target="_blank"
            >
              certificate from Codecademy
            </Link>
            . This certification, among others, stands testament to my
            dedication and capability in tackling diverse and complex technical
            challenges.<br></br>
            <br></br>
            In the realm of development, I thrive on learning and employing
            cutting-edge technologies. My portfolio spans dynamic e-commerce
            platforms to sophisticated decentralized applications, showcasing my
            ability to handle complex technical tasks. My enthusiasm for the
            latest tech innovations keeps me continuously evolving and at the
            forefront of the industry.<br></br>
            <br></br>
            Outside of coding, I am an avid sports enthusiast and fitness buff,
            particularly passionate about basketball. This energy extends into
            my personal pursuits where I enjoy exploring the world and
            discovering new things. Whether it’s staying updated with the latest
            tech innovations or delving into books on personal growth, I am
            always learning.<br></br>
            <br></br>I am known for my devotion and reliability, consistently
            standing firm in my commitments. I thrive on setting myself
            challenges and overcoming them, which aligns with my professional
            work where I am dedicated to delivering projects with precision and
            passion.<br></br>
            <br></br>I am also a social individual who loves connecting with
            people from diverse backgrounds. Every interaction is an opportunity
            to learn and grow together, which is why I value my time
            collaborating with others, whether in hackathons or team projects.
            <br></br>
            <br></br>
            Feel free to connect with me or explore my work further through my
            site. Let’s collaborate to create something exceptional!<br></br>
            <br></br>
          </p>
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
