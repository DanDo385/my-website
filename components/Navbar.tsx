// Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false); // Automatically close sidebar on larger screens
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 bg-green-400 p-4 flex text-montserrat flex-col z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <div>
          <h1 className="text-black font-bold text-2xl font-montserrat">DANIEL MAGRO</h1>
          <h2 className="text-black font-montserrat font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>

      {/* Button for opening the sidebar, now using an avatar image with Next.js Image component */}
      <div className="sm:hidden p-4 absolute top-0 right-0 z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Image src="/avatar.png" alt="Menu" width={32} height={32} className="w-8 h-8 rounded-full"/> {/* Adjusted to use Image */}
      </div>

      {/* Navbar for larger screens */}
      <div className="bg-green-400 p-4 justify-between items-center hidden sm:flex">
        <div>
          <h1 className="text-black font-bold text-2xl font-montserrat">DANIEL MAGRO</h1>
          <h2 className="text-black font-montserrat font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center gap-4 font-montserrat">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/education">Education</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </div>
        {/* This empty div ensures the flexbox space-between effect aligns the content properly */}
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
