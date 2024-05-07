import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <button
        id="menu-btn"
        className={`block hamburger sm:mt-3 mr-16 lg:hidden focus:outline-none ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span className="hamburger-top bg-LightBlue"></span>
        <span className="hamburger-middle bg-LightBlue"></span>
        <span className="hamburger-bottom bg-LightBlue"></span>
      </button>
      <div
        id="menu"
        className={`lg:hidden fixed z-10 top-[10vh] left-8 right-8 overflow-hidden menuClose ${
          menuOpen ? "menuOpen" : ""
        }`}
      >
        <div className="border-LightBlue border-x-2 border-b-2 flex-col flex items-center py-8 space-y-6 font-bold text-DarkBlue bg-teal-500 sm:self-center drop-shadow-md rounded-b-lg text-black text-lg">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-white" : ""}`}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/mywork"
            className={`${pathname === "/mywork" ? "text-white" : ""} `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            My work
          </Link>
          <Link
            href="/skills"
            className={`${pathname === "/skills" ? "text-white" : ""} `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Skills
          </Link>
          <Link
            href="/aboutme"
            className={`${
              pathname === "/aboutme" ? "text-white" : ""
            } font-bold `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            About me
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "text-white" : ""
            } font-bold `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
