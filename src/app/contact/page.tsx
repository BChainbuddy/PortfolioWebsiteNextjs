import Image from "next/image";

// To do comments:
// Make a form
// Description, name
// Alert that I have received the mail

export default function Contact() {
  return (
    <div className="sm:items-center lg:h-[80vh] sm:h-[90vh] flex flex-row justify-center lg:space-x-28">
      <div className="space-y-10">
        <div className="">
          <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
            CONTACT ME
          </h1>
        </div>
        <div className="space-y-8">
          <div className="flex flex-row items-center space-x-4 contact1">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12 relative">
              <Image
                src="/gmail-icon-509x512-ikquhn8l.png"
                fill
                alt="gmailLogo"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <a href="mailto:jakapotokar50@gmail.com">
              <p className="md:text-2xl sm:text-xl text-white underline hover:text-cyan-900">
                jaka.potokar50@gmail.com
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4 contact2">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12 relative">
              <Image
                src="/linkedin-icon-1024x1024-z5dvl47c.png"
                fill
                alt="linkedInLogo"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <a href="https://www.linkedin.com/in/jaka-potokar-14452627b/">
              <p className="md:text-2xl sm:text-xl text-white underline hover:text-cyan-900">
                Jaka Potokar
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4 contact3">
            <div className="md:w-16 md:h-16 sm:h-12 sm:w-12 invert relative">
              <Image
                src="/githubLogoForBackground.jpg"
                fill
                alt="githubLogo"
                style={{
                  objectFit: "cover",
                }}
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
        <div className="lg:flex md:hidden sm:hidden relative lg:h-[45vh] lg:w-[45vh] md:h-60 md:w-60 ">
          <Image
            src="/contactmeimg5.png"
            fill
            alt="contactImg"
            className="img-shadow"
          />
        </div>
      </div>
    </div>
  );
}
