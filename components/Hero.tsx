"use client"
import { Spotlight } from "@/app/components/ui/SpotLight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagneticButton } from "./ui/magnetic-button";
import { FaLocationArrow } from "react-icons/fa6";



const Hero = () => {
  const handleClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-20 pt-36">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div

          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sherif, a Next.js Developer based in UAE.
          </p>

          <MagneticButton>
            <button
              onClick={handleClick}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-b from-blue-500 to-blue-700 px-4 py-2 font-medium text-white ring-1 ring-white/20 ring-offset-1 ring-offset-blue-500 transition-transform duration-150 ring-inset active:scale-98"
            >
              <FaLocationArrow />
              Show My Work
            </button>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;