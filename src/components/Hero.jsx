"use client"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

import logo from "../../public/logo.png"

import { useState } from "react";

const HeroSection = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="he flex font-acorn flex-col items-center justify-between gap-24 min-[425px]:gap-32">
      <Image src={logo} alt="Image" className="w-32 h-32 opacity-0" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="im text-6xl sm:text-6xl lg:text-[10rem] font-bold  text-center tracking-wide">
          Im
          <span className=" name font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Jayadeep
          </span>
        </h1>
        <p
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
          className="web mt-5 text-lg text-center font-acorn text-neutral-500 max-w-4xl hover:text-white hover:before:nothing  transition-all duration-300">
          {hidden ? <span>Web developer</span> : <span>Nothing Over here</span>}
        </p>
      </div>
      <div className="flex  justify-center my-10 flex-wrap gap-5">
        <a href="https://github.com/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaGithub className="w-8  h-8" /></a>
        <a href="https://www.linkedin.com/in/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaLinkedin className="w-8  h-8" /></a>
        <a href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaInstagram className="w-8  h-8" /></a>
        <a href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaTwitter className="w-8  h-8" /></a>
      </div>
    </div>
  );
};

export default HeroSection;
