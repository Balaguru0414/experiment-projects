import { FaArrowUp } from "react-icons/fa";
import AboutImg from "../assets/about.png";
import { useObserver } from "./Observer";
import { useEffect, useState } from "react";

export default function About() {
  const { isAboutInView } = useObserver();
  const [scrollY, setScrollY] = useState(0);
  const [upArrowShow, setUpArrowShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 250) {
      setUpArrowShow(true);
    } else {
      setUpArrowShow(false);
    }
  }, [scrollY]);

  function up() {}

  const config = {
    line1:
      "Hi, My name is [Your name]. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap",
    line2:
      "I am proficient in Frontend skills like React.js, Redux Tool Kit, Axios, Tailwind CSS, Css3 and many more.",
    line3:
      "I am intermediate in backend I know Node.js, Express.js, MongoDB, and Mongoose.",
  };

  return (
    <section
      className="overflow-hidden flex justify-around flex-wrap bg-secondary px-5 lg:py-32 py-20"
      id="about"
    >
      <div className="py-5">
        <div
          className={isAboutInView ? "animate-left opacity-100" : "opacity-0"}
        >
          <img
            src={AboutImg}
            className="lg:animate-wiggle lg:w-72 w-56 rounded-full"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 flex justify-center max-sm:px-10 ${
          isAboutInView ? "animate-right opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 font-bold">
            About Me
          </h1>
          <p className="pb-5 text-justify">{config.line1}</p>
          <p className="pb-5 text-justify">{config.line2}</p>
          <p className="pb-5 text-justify">{config.line3}</p>
        </div>
      </div>
      {upArrowShow && (
        <div
          onClick={up}
          className="w-10 h-10 rounded-full flex items-center justify-center
      border-[4px] border-violet-400 fixed right-5 bottom-5 bg-white
      text-black hover:text-white hover:bg-black duration-300"
        >
          <FaArrowUp />
        </div>
      )}
    </section>
  );
}
