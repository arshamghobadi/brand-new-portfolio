'use client';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from './BackGroundCricles';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ['Welcome To My Portfolio', 'I am Arsham', 'Front-End Developer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className={` h-screen  flex flex-col text-center space-y-8 items-center justify-center overflow-hidden`}
    >
      <BackgroundCircles />
      <Image
        priority
        className="relative rounded-lg h-52 w-52  sm:rounded-full sm:h-32 sm:w-32 mx-auto  object-cover"
        src="/hero.jpeg"
        alt="Picture of the arsham"
        width={500}
        height={500}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] sm:tracking-[15px]">
          Front-End Developer
        </h2>
        <h1 className=" text-lg sm:text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#About">
            <button className="heroButton">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
