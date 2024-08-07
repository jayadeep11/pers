import HeroSection from '@/components/special/Hero';
import NavBar from '@/components/Navbar';
import React from 'react'
import About from '../about/page';
import Skills from '@/components/special/Skills';
import Notes from '@/components/Notes';

const page = () => {
  return (
    <>
      <div className="hel w-full mx-auto  px-9 relative z-50 ">
        <HeroSection />
        <About />
        <Notes />
      </div>

    </>
  );
}

export default page
