import React from 'react';
import { projectConf } from './projectConf';
import Image from 'next/image';
const Project = () => {
  return (
    <div className="flex flex-col min-h-screen gap-10 items-center w-full bg-black p-20 ">
      <h1 className="text-2xl text-white">Project</h1>
      <div className="flex flex-wrap items-center justify-center gap-10  p-10">
        {projectConf.map((project) => (
          <div className="bg-white/10  w-80 h-80 flex flex-col items-center justify-between rounded-lg gap-3 " key={project.id}>
            <div className="w-full ">
              <Image src={project.img} alt="image"></Image>
            </div>
            <div className=" p-3 flex flex-col items-center gap-3">
              <p className="text-white text-sm">{project.text}</p>
              <button className="w-32 h-8  rounded-2xl bg-slate-100  hover:">{project.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
