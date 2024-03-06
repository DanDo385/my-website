import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-green-400 p-4 flex items-center justify-between">
        {/* Avatar: Only visible on small screens */}
        <div onClick={toggleSidebar} className="z-50 cursor-pointer sm:hidden">
          <Image src="/avatar.png" alt="Avatar" width="50" height="50" className="rounded-full" />
        </div>

        <div className="flex-grow flex justify-center items-center">
          {!isSidebarOpen && (
            <div className="hidden sm:flex gap-4 font-electrolize">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/certs">Certifications</Link>
              <Link href="/education">Education</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/resume">Resume</Link>
            </div>
          )}
        </div>
        <div className="text-right">
          <h1 className="text-slate-700 font-bold text-2xl font-electrolize">DANIEL MAGRO</h1>
          <h2 className="text-slate-700 font-electrolize font-bold italic text-xl">Blockchain Developer</h2>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-green-400 z-50 p-4 sm:hidden">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/certs">Certifications</Link>
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/resume">Resume</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
