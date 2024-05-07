// Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
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
      <div className={`fixed inset-0 bg-green-400 p-4 flex flex-col z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden font-poppins`}>
        <div>
          <h1 className="text-black font-bold text-2xl">DANIEL MAGRO</h1>
          <h2 className="text-black font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Home</span></Link>
          <Link href="/blog"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Blog</span></Link>
          <Link href="/certifications"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Certifications</span></Link>
          <Link href="/education"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Education</span></Link>
          <Link href="/experience"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Experience</span></Link>
          <Link href="/portfolio"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Portfolio</span></Link>
          <Link href="/resume"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Resume</span></Link>
        </div>
      </div>

      {/* Button for opening the sidebar */}
      <div className="sm:hidden p-4 absolute top-0 right-0 z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Image src="/avatar.png" alt="Menu" width={32} height={32} className="w-8 h-8 rounded-full"/>
      </div>

      {/* Navbar for larger screens */}
      <div className="bg-green-400 p-4 justify-between items-center hidden sm:flex font-poppins">
        <div>
          <h1 className="text-black font-bold text-2xl">DANIEL MAGRO</h1>
          <h2 className="text-black font-bold italic text-xl">Blockchain Developer</h2>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center gap-4">
            <Link href="/"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Home</span></Link>
            <Link href="/blog"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Blog</span></Link>
            <Link href="/certifications"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Certifications</span></Link>
            <Link href="/education"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Education</span></Link>
            <Link href="/experience"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Experience</span></Link>
            <Link href="/portfolio"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Portfolio</span></Link>
            <Link href="/resume"><span className="text-black hover:text-green-400 hover:bg-black p-2 cursor-pointer">Resume</span></Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
