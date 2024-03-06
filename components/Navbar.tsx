import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (url) => {
    router.push(url);
  };

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-green-400 p-4 flex items-center justify-between">
        {/* Avatar - Click to toggle the sidebar */}
        <div onClick={toggleSidebar} className="z-50 cursor-pointer sm:flex">
          <Image src="/avatar.png" alt="Avatar" width="50" height="50" className="rounded-full" />
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-grow flex justify-center items-center">
          {!isSidebarOpen && (
            <div className="hidden sm:flex gap-4 font-electrolize">
              <span onClick={() => handleNavigation('/')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Home</span>
              <span onClick={() => handleNavigation('/blog')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Blog</span>
              <span onClick={() => handleNavigation('/certs')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Certifications</span>
              <span onClick={() => handleNavigation('/education')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Education</span>
              <span onClick={() => handleNavigation('/experience')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Experience</span>
              <span onClick={() => handleNavigation('/portfolio')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Portfolio</span>
              <span onClick={() => handleNavigation('/resume')} className="hover:text-slate-900 px-3 py-2 cursor-pointer">Resume</span>
            </div>
          )}
        </div>

        {/* Right-aligned Text */}
        <div className="text-right">
          <h1 className="text-slate-700 font-bold text-2xl font-electrolize">DANIEL MAGRO</h1>
          <h2 className="text-slate-700 font-electrolize font-bold italic text-xl">Blockchain Developer</h2>
        </div>
      </div>

      {/* Sidebar - Displayed based on state, for small screens */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-green-400 z-50 p-4 sm:hidden">
          <span onClick={() => handleNavigation('/')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Home</span>
          <span onClick={() => handleNavigation('/blog')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Blog</span>
          <span onClick={() => handleNavigation('/certs')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Certifications</span>
          <span onClick={() => handleNavigation('/education')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Education</span>
          <span onClick={() => handleNavigation('/experience')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Experience</span>
          <span onClick={() => handleNavigation('/portfolio')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Portfolio</span>
          <span onClick={() => handleNavigation('/resume')} className="block hover:text-slate-900 px-3 py-2 cursor-pointer">Resume</span>
        </div>
      )}
    </>
  );
};

export default Navbar;
