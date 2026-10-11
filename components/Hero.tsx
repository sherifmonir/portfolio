import { Spotlight } from "@/app/components/ui/SpotLight";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-40 md:-left-32 md:-top-20 h-screen" fill="blue" />
      <div className="relative z-10 text-center">
     </div>
    </div>
  );
};

export default Hero;