"use client"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png"

import { useState } from "react";

const HeroSection = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="font-acorn flex flex-col items-center max-[1024px]:mt-60 lg:min-h-[1000px] justify-center">
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
        className="web mt-5 text-lg text-center text-neutral-500 max-w-4xl hover:text-white hover:before:nothing  transition-all duration-300">
        {hidden ? <span>Web developer</span> : <span>Nothing Over here</span>}
      </p>
      <div className="flex  justify-center my-10 flex-wrap gap-5  mt-40 lg:mt-64">
        <Link href="https://github.com/jayadeep12/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaGithub className="w-8  h-8" /></Link>
        <Link href="https://www.linkedin.com/in/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaLinkedin className="w-8  h-8" /></Link>
        <Link href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaInstagram className="w-8  h-8" /></Link>
        <Link href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaTwitter className="w-8  h-8" /></Link>
      </div>
    </div>
  );
};

export default HeroSection;
