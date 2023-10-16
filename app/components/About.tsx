'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className=" absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h2>
      <div className="w-full flex flex-col items-center ">
        <motion.img
          alt="Arsham About picture"
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/about.jpg"
          className="  bg-black mt-14 md:mb-0 md:mt-14 
          object-cover 
        rounded-lg   "
        />
      </div>
      <div className="space-y-8 px-0 md:px-10 ">
        <h4 className="text-3xl fort-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm line-clamp-4 hover:line-clamp-none">
          I embarked on my professional journey as a Junior Software and IT
          Specialist, eager to explore the dynamic world of technology. Over
          time, I discovered my passion for SEO, e-commerce, and WordPress
          websites, delving into the intricacies of online visibility and
          user-friendly design. My journey led me to the realm of web
          development, where I found my true calling. With a dedication to
          crafting exceptional web experiences, I&apos;ve honed my skills in
          creating efficient, elegant, and responsive websites. My mission is to
          transform ideas into digital reality, combining creativity with
          technical expertise. Join me on this exciting journey as we explore
          the limitless possibilities of web development. Let&apos;s turn your
          vision into a stunning reality, one pixel at a time.
        </p>
      </div>
    </motion.div>
  );
}
