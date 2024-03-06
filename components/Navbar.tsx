import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Effect to add event listener for window resize
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
      <div className={`fixed inset-0 bg-green-400 p-4 flex flex-col z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <div>
          <h1 className="text-slate-700 font-bold text-2xl font-electrolize">DANIEL MAGRO</h1>
          <h2 className="text-slate-700 font-electrolize font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/certs">Certifications</Link>
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>

      {/* Button for opening the sidebar, now using an avatar image */}
      <div className="sm:hidden p-4 absolute top-0 right-0 z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <img src="/avatar.png" alt="Menu" className="w-8 h-8"/>
      </div>

      {/* Navbar for larger screens */}
      <div className="bg-green-400 p-4 flex justify-between items-center hidden sm:flex">
        <div>
          <h1 className="text-slate-700 font-bold text-2xl font-electrolize">DANIEL MAGRO</h1>
          <h2 className="text-slate-700 font-electrolize font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center gap-4 font-electrolize">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/certs">Certifications</Link>
            <Link href="/education">Education</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/portfolio">Portfolio</Link>
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
