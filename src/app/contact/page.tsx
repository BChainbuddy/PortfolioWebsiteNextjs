import Image from "next/image";

export default function Contact() {
  return (
    <div className="sm:items-center sm:flex-grow lg:flex-1 flex flex-row justify-center lg:space-x-28">
      <div className="space-y-10">
        <div className="">
          <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
            CONTACT ME
          </h1>
        </div>
        <div className="space-y-8">
          <div className="flex flex-row items-center space-x-4 contact1">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12">
              <Image
                src="/gmail-icon-509x512-ikquhn8l.png"
                width={0}
                height={0}
                layout="responsive"
                alt="gmailLogo"
              />
            </div>
            <a href="mailto:jakapotokar50@gmail.com">
              <p className="md:text-2xl sm:text-xl text-white underline hover:text-cyan-900">
                jaka.potokar50@gmail.com
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4 contact2">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12">
              <Image
                src="/linkedin-icon-1024x1024-z5dvl47c.png"
                width={0}
                height={0}
                layout="responsive"
                alt="linkedInLogo"
              />
            </div>
            <a href="https://www.linkedin.com/in/jaka-potokar-14452627b/">
              <p className="md:text-2xl sm:text-xl text-white underline hover:text-cyan-900">
                Jaka Potokar
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4 contact3">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12 invert">
              <Image
                src="/githubLogoForBackground.jpg"
                width={0}
                height={0}
                layout="responsive"
                alt="githubLogo"
              />
            </div>
            <a href="https://github.com/BChainbuddy?tab=repositories">
              <p className="md:text-2xl sm:text-xl text-white underline hover:text-cyan-900">
                BChainBuddy
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="md:p-8">
        <div className="w-80 h-80 lg:flex md:hidden sm:hidden">
          <Image
            src="/contactmeimg5.png"
            width={0}
            height={0}
            layout="responsive"
            alt="contactImg"
            className="img-shadow"
          />
        </div>
      </div>
    </div>
  );
}
