import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set isSmallScreen true if window width is less than 768px
      setIsSmallScreen(window.innerWidth < 768);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      <div className="bg-green-400 p-4 flex items-center justify-between">
        {isSmallScreen && (
          <div onClick={toggleSidebar} className="z-50 cursor-pointer">
            <Image src="/avatar.png" alt="Avatar" width="50" height="50" className="rounded-full" />
          </div>
        )}
        <div className="flex-grow flex justify-center items-center">
          {!isSidebarOpen && (
            <div className="hidden sm:flex gap-4 font-electrolize">
              <Link href="/" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Home</Link>
              <Link href="/blog" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Blog</Link>
              <Link href="/certs" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Certifications</Link>
              <Link href="/education" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Education</Link>
              <Link href="/experience" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Experience</Link>
              <Link href="/portfolio" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Portfolio</Link>
              <Link href="/resume" className="hover:text-slate-900 px-3 py-2 cursor-pointer">Resume</Link>
            </div>
          )}
        </div>
        <div className="text-right">
          <h1 className="text-slate-700 font-bold text-2xl font-electrolize">DANIEL MAGRO</h1>
          <h2 className="text-slate-700 font-electrolize font-bold italic text-xl">Blockchain Developer</h2>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-green-400 z-50 p-4 sm:hidden">
          <Link href="/" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Home</Link>
          <Link href="/blog" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Blog</Link>
          <Link href="/certs" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Certifications</Link>
          <Link href="/education" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Education</Link>
          <Link href="/experience" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Experience</Link>
          <Link href="/portfolio" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Portfolio</Link>
          <Link href="/resume" className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Resume</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
