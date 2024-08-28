import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    {
      document
        .querySelector(".navLinks")
        ?.addEventListener("click", function (e) {
          e.preventDefault();
          console.log("lapLink *******", e.target);

          // matching strategy
          if (e.target.classList.contains("lapLink")) {
            const id = e.target.getAttribute("href");
            document.querySelector(id).scrollIntoView();
          }
        });
    }
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    const btnUp = document.querySelector(".btnUp");
    btnUp.addEventListener("click", function (e) {
      header.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <header
      className="flex items-center justify-between px-10 py-3 bg-violet-950 
      sticky top-0 shadow-lg z-50 text-white"
    >
      <a className="font-bold text-xl flex items-center gap-3 btnUp">
        <img src="" className="w-8 h-8 rounded-full" />
        Your Name
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 navLinks">
          <li>
            <a href="#about" className="lapLink">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="lapLink">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="lapLink">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="lapLink">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="lapLink">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden rounded">
          <ul
            // onClick={() => setToggleMenu(!toggleMenu)}
            className={`flex flex-col justify-center text-secondary fixed top-16 
            right-5 z-50 bg-white w-1/2  shadow-md  rounded mobilenavLinks
            animate-mob-nav`}
          >
            <a href="#about" className="mobileLink">
              About
            </a>
            <a href="#project" className="mobileLink">
              Projects
            </a>
            <a href="#skills" className="mobileLink">
              Skills
            </a>
            <a href="#experience" className="mobileLink">
              Experience
            </a>
            <a href="#contact" className="mobileLink">
              Contact
            </a>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        {toggleMenu ? (
          <XMarkIcon className="text-white h-5" />
        ) : (
          <Bars3Icon className="text-white h-5" />
        )}
      </button>
    </header>
  );
}
