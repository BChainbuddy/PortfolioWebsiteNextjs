import EmailForm from "@/components/GmailForm";
import ImageAction from "@/components/ImageAction";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="sm:items-center lg:h-[80vh] flex flex-row justify-center lg:space-x-28 md:my-0 my-[8vh] md:mt-0">
      <div className="space-y-10 sm:px-4 md:px-16 pb-12 pt-2 rounded-3xl border-contact">
        <PageTitle title="CONTACT ME" />
        <EmailForm />
        <div
          id="actionItems"
          className="flex flex-row mx-auto w-[80%] justify-around items-center mt-8 lg:hidden"
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
