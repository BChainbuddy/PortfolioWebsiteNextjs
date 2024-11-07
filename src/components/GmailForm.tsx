"use client";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useEffect, useState } from "react";
import PrettyInput from "./PrettyInput";
import PrettyText from "./PrettyText";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMP
    ) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
          process.env.NEXT_PUBLIC_EMAILJS_TEMP,
          { name: name, email: email, content: content },
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PK }
        );
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        console.log("SUCCESS!");
      } catch (err) {
        if (err instanceof EmailJSResponseStatus) {
          console.log("EMAILJS FAILED...", err);
          return;
        }

        console.log("ERROR", err);
      }
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PK,
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        // The variable contains the email address
        watchVariable: "userEmail",
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  return (
    <>
      <form
        className="flex flex-1 flex-col w-full space-y-10"
        onSubmit={handleSubmit}
      >
        <PrettyInput
          type="text"
          name="name"
          min={0}
          max={0}
          label="Name"
          input={name}
          setInput={setName}
          height="h-[2.2rem]"
          width="w-[20rem]"
        />
        <PrettyInput
          type="email"
          name="email"
          min={0}
          max={0}
          label="Email account"
          input={email}
          setInput={setEmail}
          height="h-[2.2rem]"
          width="w-[20rem]"
        />
        <PrettyText
          type="text"
          name="content"
          min={0}
          max={0}
          label="Email content"
          input={content}
          setInput={setContent}
          width="w-[20rem]"
          height="h-[10rem]"
        />
        <input
          type="submit"
          className={`h-8 w-32 self-center bg-[#008573] rounded-xl cursor-pointer text-lg transition-all duration-300 opacity-80 ${
            name &&
            email &&
            content &&
            "bg-LightBlue opacity-100 hover:opacity-80"
          }`}
          value={"Send"}
        />
      </form>
      {success ? (
        <div className="h-[100vh] w-[100vw] fixed z-[100] top-0 left-0 flex justify-center items-center backdrop-blur-sm">
          <div className="h-32 w-auto px-10 bg-DarkBlue flex justify-center items-center flex-row space-x-2 border-green-500 border-2 rounded-2xl">
            <p className="text-3xl text-white">The email has been sent! </p>
            <p className="text-5xl animateSuccess">✉️</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
