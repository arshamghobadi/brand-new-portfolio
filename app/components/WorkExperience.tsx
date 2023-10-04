'use client';
import { WorkExperienceType } from '../../typing';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
interface WorkExperience {
  data: WorkExperienceType[];
}
const WorkExperience: React.FC<WorkExperience> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Experience
      </h3>
      <div className="w-full  flex space-x-5 overflow-x-scroll  p-10 scrollbar-smooth  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {data.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
