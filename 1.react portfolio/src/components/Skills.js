// import React from "react";

import { useObserver } from "./Observer";

const skills = [
  "html5",
  "css3",
  "javascript",
  "bootstrap",
  "jquery",
  "react",
  "redux",
  "tailwindcss",
  "nodejs",
  "express",
  "mongodb",
  "firebase",
  "git",
  "figma",
  "flutter",
];

const Skills = () => {
  const { isSkillInView } = useObserver();

  return (
    <section
      id="skills"
      className="overflow-hidden flex flex-col items-center w-full py-20 lg:px-20 px-5 bg-secondary"
    >
      <div className="px-10">
        <h1
          className="text-4xl border-b-4 border-primary mb-10 w-24 font-bold
      text-white"
        >
          Skills
        </h1>
      </div>
      <div
        className="lg:p-8 p-5 bg-opacity-90 w-full h-1/2 flex
      items-end justify-center flex-wrap lg:gap-5 gap-3"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className={
              isSkillInView
                ? i % 2 === 0
                  ? "animate-left opacity-100"
                  : "animate-right opacity-100"
                : "opacity-0"
            }
          >
            <div
              className="p-3 bg-white bg-opacity-5 rounded-full shadow-md 
            transition-transform duration-300 hover:-translate-y-3"
            >
              <div className="transition-transform duration-300 hover:scale-110">
                <div
                  className={i % 2 === 0 ? "animate-wiggle" : "animate-vibrate"}
                >
                  <img
                    className={`lg:w-20 lg:h-20 w-16 h-16 p-2 rounded-md cursor-pointer`}
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill}/${skill}-original.svg`}
                    alt={skill}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
