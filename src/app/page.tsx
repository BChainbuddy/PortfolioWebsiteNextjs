import ImageAction from "@/components/ImageAction";
import NameIntro from "@/components/NameIntro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[65vh] flex flex-row justify-center sm:items-center">
        <div className="flex flex-col mt-10 sm:w-11/12 md:w-auto lg:min-w-max justify-evenly">
          <NameIntro />
          <div id="developer" className="homepage-start2 md:space-y-1 mt-4">
            <p className="cursor-default sm:text-lg md:text-xl text-white sm:text-center md:text-start">
              <span className="text-glow sm:text-xl md:text-2xl font-serif font-semibold">
                "
              </span>
              Web2 & Web3 developer blending{" "}
              <span className="glowing-underline">technical skill</span>{" "}
            </p>
            <p className="cursor-default sm:text-lg md:text-xl text-white sm:text-center md:text-start">
              with a deep passion for{" "}
              <span className="glowing-underline"> blockchain innovation.</span>
              <span className="text-glow sm:text-xl md:text-2xl font-serif font-semibold">
                "
              </span>
            </p>
          </div>
          <div
            id="actionItems"
            className="flex flex-row mx-auto w-[80%] justify-around items-center mt-8"
          >
            <ImageAction
              src="/gmail-icon-509x512-ikquhn8l.png"
              alt="Gmail Logo"
              href="mailto:jakapotokar50@gmail.com"
              animation="contact1"
            />
            <ImageAction
              src="/linkedin-icon-1024x1024-z5dvl47c.png"
              alt="LinkedIn Logo"
              href="https://www.linkedin.com/in/jaka-potokar-14452627b/"
              animation="contact2"
            />
            <ImageAction
              src="/githubLogoForBackground.jpg"
              alt="Github Logo"
              href="https://github.com/BChainbuddy"
              special="invert"
              animation="contact3"
            />
          </div>
        </div>
        <div className="lg:ml-48 md:ml-6 md:mt-6 lg:mt-0 md:flex sm:hidden">
          <div className="lg:h-[45vh] lg:w-[45vh] md:h-60 md:w-60 relative">
            <Image
              src="/man-technologist-light-skin-tone-svgrepo-com.svg"
              sizes="100%"
              fill
              alt="programmingEmoji"
              className="img-shadow"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-10 flex justify-center items-center h-[15vh]">
        <p
          id="quote"
          className="homepage-start3 cursor-default sm:text-base md:text-lg lg:text-xl text-center font-thin font-mono text-transparent bg-clip-text custom-gradient-right"
        >
          "TURNING CHALLENGES INTO OPPORTUNITIES, ONE PROJECT AT A TIME."
          {/* "BUILDING THE FUTURE, ONE LINE OF CODE AT A TIME." */}
        </p>
      </div>
    </>
  );
}
