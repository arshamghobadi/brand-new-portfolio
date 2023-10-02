'use client';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7x1 mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.instagram.com/ghobadi.arsham"
          target="_blank"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.linkedin.com/in/arsham-ghobadi-044b8aa1"
          target="_blank"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://github.com/arshamghobadi"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <Link href="#contact">
          <p className="uppercase mx-3 md:inline-flex text-sm text-gray-400">
            GET IN TOUCH
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
