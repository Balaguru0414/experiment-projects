// Images
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.png";

// Icons
import { FaGithub } from "react-icons/fa";
import { TbView360 } from "react-icons/tb";
import SliderProjects from "./Slider";
import { useObserver } from "./Observer";

function Projects() {
  const { isProjectsInView } = useObserver();
  const config = {
    projects: [
      {
        image: Project1,
        description: "A Ecommerce Buy And Sell Website. Built with MERN Stack.",
        link: "",
        live: "",
      },
      {
        image: Project2,
        description:
          "Food Ecommerce website like Swiggy, Built with MERN Stack.",
        link: "",
        live: "",
      },
      {
        image: Project3,
        description:
          "Code Craft HTML, CSS, JS code editor. Built with React.js",
        link: "",
        live: "",
      },
      {
        image: Project4,
        description: "B-Bankist Langing Page. Built with HTML, CSS, JS.",
        link: "",
        live: "",
      },
    ],
  };

  return (
    <section
      id="project"
      className="overflow-hidden flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col items-center px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            {" "}
            These are some of my best projects. I have built these with React,
            MERN and Tailwind CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="hidden md:block w-full">
        {/* <div className="w-full"> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center px-10 gap-5">
          {config.projects.map((project, i) => (
            <div
              key={i}
              className={`relative opacity-0
            ${isProjectsInView ? "animate-bottom opacity-100" : ""}`}
            >
              <img
                className="h-[250px] w-[500px] rounded-md"
                src={project.image}
              />
              <div className="project-desc justify-center">
                <p className="text-center px-5">{project.description}</p>
                <div className="flex gap-5 justify-center relative">
                  <a
                    data-tip="View Code"
                    className="plink"
                    target="_blank"
                    href={project.link}
                  >
                    <FaGithub className="text-2xl" />
                  </a>

                  <a
                    data-tip="Live Preview"
                    className="plink"
                    target="_blank"
                    href={project.live}
                  >
                    <TbView360 className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SliderProjects projects={config.projects} />
    </section>
  );
}

export default Projects;
