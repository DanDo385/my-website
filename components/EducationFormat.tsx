// components/EducationFormat.tsx
import Image from 'next/image';


const EducationFormat = () => {
  // Images for the corners
  const cornerImages = [
    { src: '/pennst/psu1.jpg', position: 'top-0 left-0' },
    { src: '/pennst/psu2.jpg', position: 'top-0 right-0' },
    { src: '/pennst/psu3.jpg', position: 'bottom-0 left-0' },
    { src: '/pennst/psu4.jpg', position: 'bottom-0 right-0' },
  ];

  return (
  <>
    <div className="relative min-h-screen flex justify-center items-center pt-[56px]">
      {/* Corner Images */}
      {cornerImages.map((image, index) => (
        <Image key={index} src={image.src} alt={`Corner Image ${index + 1}`} className={`absolute ${image.position} w-[276px] h-[276px] object-contain`} width={333} height={333} />
      ))}

      {/* Centered Achievement Card */}
      <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-4 z-10">
        <div className="flex items-center mb-4">
          <Image src="/psu5.jpg" alt="Avatar" width={50} height={50} className="rounded-full" />
          <div className="ml-3">
            <div className="font-bold text-xl">The Pennsylvania State University</div>
            <p className="text-gray-700 text-base">University Park, PA</p>
          </div>
        </div>
        <table className="table-auto w-full">
          <tbody>
            <tr className="bg-slate-100">
              <td className="border px-4 py-2">Class:</td>
              <td className="border px-4 py-2">2006</td>
            </tr>
            <tr >
              <td className="border px-4 py-2">Major:</td>
              <td className="border px-4 py-2">Finance</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="border px-4 py-2">Honors:</td>
              <td className="border px-4 py-2">Magna Cum Laude</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">GPA:</td>
              <td className="border px-4 py-2">3.73</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="border px-4 py-2">Major GPA:</td>
              <td className="border px-4 py-2">3.93</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </>
  );
};

export default EducationFormat;
