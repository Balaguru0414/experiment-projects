// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { TbView360 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { useObserver } from "./Observer";

function SliderProjects({ projects }) {
  const { isProjectsInView } = useObserver();
  return (
    <div
      className={`block md:hidden mt-5 space-y-5 ${
        isProjectsInView ? "animate-bottom" : ""
      } `}
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <img className="w-full h-full" src={project.image} />
            <div className="project-desc justify-between py-7">
              <p className="text-center px-5">{project.description}</p>
              <div className=" flex gap-5">
                <a
                  data-tip="View Code"
                  className="tooltip tooltip-top tooltip-primary p-2 rounded bg-primary 
                  flex items-center justify-center"
                  target="_blank"
                  href={project.link}
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  data-tip="Live Preview"
                  className=" tooltip tooltip-top tooltip-primary p-2 rounded bg-primary 
                  flex items-center justify-center"
                  target="_blank"
                  href={project.live}
                >
                  <TbView360 className="text-2xl" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center ">
        <p className="text-sm text-secondary font-bold lowercase">
          &lt;-- SWIPE LEFT OR RIGHT TO SEE OTHER PROJECTS --&gt;
        </p>
      </div>
    </div>
  );
}
export default SliderProjects;
