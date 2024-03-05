import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  const handleRedirect = (url) => () => {
    window.location.href = url;
  };

  return (
    <div className="bg-green-400 flex items-center justify-between p-4">
      <div>
        <h1 className="text-slate-700 font-bold text-xl font-electrolize">DANIEL MAGRO</h1>
        <p className="text-slate-700 font-electrolize font-bold italic text-lg">Blockchain Developer</p>
      </div>
      <div className="flex gap-4 font-electrolize">
        <span onClick={() => router.push('/')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Home</span>
        {/* Handle external redirect programmatically */}
        <span onClick={handleRedirect('https://www.c2defi.com')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Blog</span>
        <span onClick={() => router.push('/certs')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Certifications</span>
        <span onClick={() => router.push('/education')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Education</span>
        <span onClick={() => router.push('/experience')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Experience</span>
        <span onClick={() => router.push('/portfolio')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Portfolio</span>
        <span onClick={() => router.push('/resume')} className="text-slate-700 hover:text-green-400 px-3 py-2 rounded cursor-pointer">Resume</span>
      </div>
      <div>
        <Image src="/avatar.png" alt="Avatar" width="50" height="50" className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
