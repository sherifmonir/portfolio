"use client"
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import MagicButton from "./ui/magic-button";
import { FaAnglesDown, FaDownload } from "react-icons/fa6";
import ResumeButton from "./ResumeBtn";



const Hero = () => {
  const projectsBtn = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full lg:my-55 ">
      <BackgroundRippleEffect />
      <div className="flex justify-center relative  my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Front-End Developer · React · TypeScript
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sherif, a Next.js Developer open to entry-level roles.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 py-10">
            <MagicButton title={"My Projects"} handleClick={projectsBtn} icon={<FaAnglesDown />} position={"right"} />
            <a
              href="/Sherif_Monir_Frontend_Developer_Resume.pdf"
              download="Sherif_Monir_Frontend_Developer_Resume.pdf"
            >
              <MagicButton title={"Download Resumé"} icon={<FaDownload />}  position={"right"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;