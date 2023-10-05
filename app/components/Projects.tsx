'use client';
import { useRef } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectType } from '../../typing';

interface ProjectsType {
  projects: ProjectType[];
}
const Projects: React.FC<ProjectsType> = ({ projects }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  function scrollHandle() {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full  flex overflow-x-scroll overflow-y-hidden   scrollbar-smooth scrollbar z-30  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -150,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              alt={project.title}
              src={`/image/projects/${project.id}.jpg`}
              className=" w-36 h-36 sm:w-2/6 sm:h-1/5 md:w-3/6 md:h-3/6 object-cover"
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl  text-center">{project.title}</h4>
              <div className=" flex flex-row space-x-4 justify-evenly text-[#F7AB0A]">
                <Link target="_blank" href={project.demo}>
                  Demo
                </Link>
                <Link target="_blank" href={project.SourceCode}>
                  SourceCode
                </Link>
              </div>
              <div className=" grid grid-cols-2 gap-3">
                {project.technology.map((item, i) => (
                  <div key={i}>
                    <button className="bg-yellow-950 w-32  text-yellow-400 border border-yellow-400 border-b-4  overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div
                ref={ref}
                onClick={() => scrollHandle()}
                className=" mx-4 text-[#F7AB0A] cursor-pointer "
              >
                scroll right
              </div>

              <HiArrowLongRight className=" text-[#F7AB0A]" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
