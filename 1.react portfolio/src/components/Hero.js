import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "Im a Full-stack developer",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
    },
  };

  return (
    <section
      className="overflow-hidden flex items-center flex-wrap-reverse gap-10 px-5 py-20 lg:py-20
     bg-primary justify-around"
    >
      <div className="flex flex-col items-center animate-left">
        <h1 className=" text-white lg:text-6xl text-4xl text-center font-hero-font">
          <span className="block text-[#A3FFD6]">Hi,</span>I'm{" "}
          <span className="text-black">X</span> .Your Name
          <p className="text-2xl mt-3">{config.subtitle}</p>
        </h1>
        <div className="flex py-10 text-black">
          <a
            href={config.social.twitter}
            className="pr-5 duration-500 hover:text-white"
          >
            <AiOutlineTwitter size={40} />
          </a>
          <a
            href={config.social.linkedin}
            className="pr-5 duration-500 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href={config.social.github}
            className="duration-500 hover:text-white"
          >
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
      <div className="animate-right">
        <img className="lg:w-96 md:w-72 w-56 animate-wiggle" src={HeroImg} />
      </div>
    </section>
  );
}
