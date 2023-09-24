'use client';
import React from 'react';
import Image from 'next/image';
import { Gambar, Ben } from '../../public/Image/img';
import { TypeAnimation } from 'react-type-animation';
import { BiLogoAws, BiLogoReact, BiLogoDocker } from 'react-icons/bi';
import { SiGooglepay } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Play = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black items-center">
      <div className=" flex flex-row justify-around gap-10 p-10 items-center max-md:flex-col max-md:gap-0">
        <div className="flex flex-col item-start max-md:items-center">
          <div className="flex flex-row gap-2">
            <h1 className="text-5xl text-white">Hi,</h1>
            <h1 className="text-5xl text-fontColor">Its Me</h1>
          </div>
          <h1 className="text-xl mt-2 text-white font-light ">Alan Solihin</h1>

          <div className="text-white">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Im Programmer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Im Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <p className="mt-3 text-xs  leading-loose text-white w-2/3 max-md:text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti vel laboriosam ipsa? Dicta, pariatur.</p>
        </div>

        <div className="Image">
          <div className="rounded-full  h-full">
            <Image src={Ben} width={500} alt="image" className="rounded-sm"></Image>
          </div>
        </div>
      </div>{' '}
      <div className="flex flex-row w-4/6 h-16 rounded-sm border-2 border-slate-300 mt-20 items-center justify-around max-sm:w-4/5">
        <BiLogoAws className="text-slate-300" size={50} />
        <BiLogoReact className="text-slate-300" size={50} />
        <DiJavascript1 className="text-slate-300" size={50} />
        <SiGooglepay className="text-slate-300" size={50} />
        <BiLogoDocker className="text-slate-300" size={50} />
      </div>
    </div>
  );
};

export default Play;
