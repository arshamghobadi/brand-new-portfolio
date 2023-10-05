import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Hero from './components/Hero';
import { WorkExperienceType, SkillType, ProjectType } from '../typing';
import db from '../db.json';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Link from 'next/link';
import { HiArrowUpCircle } from 'react-icons/hi2';
export default function Home() {
  const DataForExp: WorkExperienceType[] = db.dataExp;
  const DataForSkill: SkillType[] = db.data;
  const DataForProject: ProjectType[] = db.projectsData;

  return (
    <div
      className="text-white h-screen snap-y 
  snap-mandatory overflow-y-scroll 
  overflow-x-hidden z-0 scrollbar 
  scrollbar-smooth scrollbar-track-gray-400/20 
  scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="experience">
        <WorkExperience data={DataForExp} />
      </section>
      <section id="skills">
        <Skills data={DataForSkill} />
      </section>
      <section id="projects">
        <Projects projects={DataForProject} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="sticky bottom-12 sm:bottom-5 z-0 ">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <HiArrowUpCircle className=" w-14 h-14  rounded-full cursor-pointer z-20" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
