import React from 'react';

import { HiMapPin, HiEnvelope, HiPhone } from 'react-icons/hi2';

function Contact() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-6 w-80 sm:space-y-10 sm:w-2/4">
        <div className="space-y-10">
          <a
            href="tel:00447518503552"
            className="flex items-center space-x-5 justify-center"
          >
            <HiPhone className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+44 07518503552</p>
          </a>
          <div className="flex items-center space-x-5 justify-center">
            <HiMapPin className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Welwyn Garden City - UK</p>
          </div>
          <a
            href="mailto:ghobadi.arsham@gmail.com"
            className="flex items-center space-x-5 justify-center"
          >
            <HiEnvelope className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>ghobadi.arsham@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
