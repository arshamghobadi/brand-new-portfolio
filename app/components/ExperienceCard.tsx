'use client';

import { WorkExperienceType } from '../../typing';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface ExperienceCard {
  data: WorkExperienceType;
}
export default function ExperienceCard({ data }: ExperienceCard) {
  return (
    <article
      className="flex flex-col rounded-lg items-center 
    space-y-2 flex-shrink-0 w-[320px]  sm:h-auto  md::w-[600px] 
    xl:w-[900px] bg-[#292929] p-4 hover:opacity-100 
    opacity-40 transition-opacity duration-200 "
    >
      <motion.img
        rel="preload"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-20 h-20 sm:w-28 sm:h-28 rounded-md xl:w-[200px] xl:h-[200px]  object-center"
        src={`/image/image-exp/${data.id}.webp`}
        alt={data.company}
      />
      <div className="px-0 md:px-10">
        <h4 className=" text-lg sm:text-2xl font-light">{data.title}</h4>
        <p className=" font-semibold text-lg mt-1">{data.company}</p>
      </div>
      <p>
        {data.start} - {data.end}
      </p>
      <ul className="list-disc space-y-4 ml-5 text-sm sm:text-lg">
        {data.summry.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <Link className=" text-[#F7AB0A]" href={data.url} target="_blank">
        Website
      </Link>
      <span className=" animate-bounce">For more scroll right</span>
    </article>
  );
}
