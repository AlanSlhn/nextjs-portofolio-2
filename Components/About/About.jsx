import React from 'react';
import { Setup } from '../../public/Image/img';
import Image from 'next/image';
const About = () => {
  return (
    <div className=" bg-black flex items-center flex-col" id="about">
      <h1 className="text-white text-3xl mb-10">About Me</h1>

      <div className="flex flex-row items-center bg-white/10 rounded-lg  p-10 w-4/5 h-2/4 justify-between gap-10 max-md:flex-col max-md:gap-5">
        <div className="flex flex-col items-center justify-start  w-2/4 max-md:w-5/6">
          <Image src={Setup} alt="setup" width={450}></Image>
        </div>
        <div className="w-2/4  max-md:w-5/6">
          <p className="leading-loose text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quos totam doloremque praesentium dolore quia expedita ad ut. Unde perspiciatis accusamus, voluptate labore veniam nesciunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
