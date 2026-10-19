"use client";

import ThreeDCardDemo from "./3d-card-demo";

const RecentProjects = () => {
  return (
    <section className="" id="projects">
      <h1 className="heading">
        My Recent <span className="text-purple">Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-8 ">
        <ThreeDCardDemo />
      </div>
    </section>
  );
};

export default RecentProjects;