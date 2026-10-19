"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { projects } from "@/app/data";
import GithubButton from "./ui/GithubButton";
import LiveButton from "./ui/LiveButton";

export default function ThreeDCardDemo() {
  return (
    <>
      {projects.map((project, index) => (
        <CardContainer key={project?.id ?? index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.des}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl border             border-white/10 bg-black">
                <img src={project.img} 
                alt={project.title} 
                className="h-full w-full object-cover"
                />
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
                <GithubButton code={project.code} />
                <LiveButton  link={project.link}/>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
}
