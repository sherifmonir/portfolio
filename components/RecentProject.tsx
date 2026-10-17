"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/app/data";
import { PinContainer } from "./ui/pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My Recent <span className="text-purple">Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
             title={"GitHub Repo"}
             href={item.link}>
              {/* Fixed aspect ratio; image fills it completely */}
              <div className="relative sm:w-96 w-[80vw] aspect-video overflow-hidden rounded-2xl mb-6 bg-[#13162D]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-base font-light text-sm line-clamp-2 mt-2 text-[#BEC1DD]">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 mb-1">
                <div className="flex items-center -space-x-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="shrink-0 border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="" className="p-2" />
                    </div>
                  ))}
                </div>

                
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;;