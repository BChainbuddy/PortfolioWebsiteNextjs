"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuButton from "./MenuButton";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="header"
        className="z-20 sm:h-[10vh] lg:h-[20vh] flex flex-row justify-between sm:items-center sm:pb-4 pt-4 lg:pb-0 border-bottom-LightBlue lg:border-b-0 sm:bg-teal-950 w-screen lg:bg-transparent"
      >
        <div className="flex lg:ml-20 md:ml-8 sm:ml-2 items-center p-0">
          <div className="lg:h-12 lg:w-12 sm:h-10 sm:w-10">
            <Image
              src="/jakapLogoTransparent.png"
              width={0}
              height={0}
              layout="responsive"
            />
          </div>
          <p className="sm:self-center cursor-default text-3xl font-thin font-mono text-transparent bg-clip-text custom-gradient-left">
            JAKA
          </p>
        </div>
        <div className="lg:flex justify-end md:hidden sm:hidden">
          <div className="space-x-10 ml-auto mr-36 text-xl">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-white font-bold" : "text-LightBlue"
              } hover:text-teal-900`}
            >
              Home
            </Link>
            <Link
              href="/mywork"
              className={`${
                pathname === "/mywork"
                  ? "text-white font-bold"
                  : "text-LightBlue"
              } hover:text-teal-900`}
            >
              My work
            </Link>
            <Link
              href="/skills"
              className={`${
                pathname === "/skills"
                  ? "text-white font-bold"
                  : "text-LightBlue"
              } hover:text-teal-900`}
            >
              Skills
            </Link>
            <Link
              href="/aboutme"
              className={`${
                pathname === "/aboutme"
                  ? "text-white font-bold"
                  : "text-LightBlue"
              } hover:text-teal-900`}
            >
              About me
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-white font-bold"
                  : "text-LightBlue"
              } hover:text-teal-900`}
            >
              Contact
            </Link>
          </div>
        </div>
        <MenuButton />
      </div>
    </>
  );
}
