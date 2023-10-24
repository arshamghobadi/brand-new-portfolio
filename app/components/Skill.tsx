'use client';
import { SkillType } from '../../typing';
interface SkillDataType {
  data: SkillType;
}
import { motion } from 'framer-motion';

const Skill: React.FC<SkillDataType> = ({ data }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        rel="preload"
        alt={data.name}
        initial={{ x: true ? -180 : 180, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`/image/skill-image/${data.id}.jpg`}
        className=" rounded-md border border-gray-500 object-cover  w-14 h-14 md:w-24 md:h-24 xl:w-26 xl:h-26 filter group-hover:grayscale"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white 
      h-14 w-14 md:w-24 md:h-24 xl:h-26 xl:w-26 rounded-md z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-lg sm:text-2xl font-bold text-black opacity-100">
            {data.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
