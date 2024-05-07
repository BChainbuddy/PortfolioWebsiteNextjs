import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="lg:h-[65vh] flex flex-row lg:px-16 lg:py-32 md:py-40 sm:py-20 justify-center sm:items-center">
        <div className="flex flex-col mt-10 sm:w-11/12 md:w-auto lg:min-w-max">
          <div className="md:space-y-2 sm:space-y-5">
            <div
              id="name"
              className="homepage-start1 sm:items-end md:items-center space-x-1 md:text-start sm:text-center md:justify-normal sm:justify-center"
            >
              <p className="flex sm:justify-center md:justify-normal items-center cursor-default sm:text-4xl md:text-5xl text-white text-transparent bg-clip-text">
                Hello
                <span className="inline-block sm:h-14 sm:w-14 md:h-20 md:w-20 relative">
                  <Image
                    src="/1F44B.svg"
                    width={0}
                    height={0}
                    fill
                    alt="wavingEmoji"
                  />
                </span>
                , MY
              </p>
              <p className="sm:text-5xl md:text-6xl text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom md:text-start md:w-auto sm:text-center">
                NAME IS JAKA
              </p>
            </div>
            <div id="developer" className="homepage-start2 md:space-y-1">
              <p className="cursor-default sm:text-lg md:text-xl text-white sm:text-center md:text-start">
                <span className="text-glow sm:text-xl md:text-2xl font-serif font-semibold">
                  "
                </span>
                I'm an aspiring{" "}
                <span className="glowing-underline">blockchain enthusiast</span>{" "}
                on a
              </p>
              <p className="cursor-default sm:text-lg md:text-xl text-white sm:text-center md:text-start">
                mission to become a versatile{" "}
                <span className="glowing-underline">full-stack developer</span>
                <span className="text-glow sm:text-xl md:text-2xl font-serif font-semibold">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-48 md:ml-6 md:mt-6 lg:mt-0 md:flex sm:hidden">
          <div className="lg:h-80 lg:w-80 md:h-60 md:w-60 relative">
            <Image
              src="/man-technologist-light-skin-tone-svgrepo-com.svg"
              width={0}
              height={0}
              fill
              alt="programmingEmoji"
            />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-10 flex justify-center items-center lg:h-[15vh]">
        <p
          id="quote"
          className="homepage-start3 cursor-default sm:text-base md:text-lg lg:text-xl text-center font-thin font-mono text-transparent bg-clip-text custom-gradient-right"
        >
          "DON'T BE AFRAID TO FAIL, IT IS THE ONLY WAY TO SUCCEED"
        </p>
      </div>
    </>
  );
}
