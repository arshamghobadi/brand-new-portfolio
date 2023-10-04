import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Hero from './components/Hero';
import { WorkExperienceType } from '../typing';
import db from '../db.json';
export default function Home() {
  const DataForExp: WorkExperienceType[] = db.dataExp;

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
    </div>
  );
}
