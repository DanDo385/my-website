// components/EducationFormat.tsx
import Image from 'next/image';
import { cornerImages, educationDetails } from '../data/psu';

const EducationFormat = () => {
  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center pt-[56px]">
        {/* Corner Images */}
        {cornerImages.map((image, index) => (
          <Image key={index} src={image.src} alt={`Corner Image ${index + 1}`} className={`absolute ${image.position} w-[276px] h-[276px] object-contain`} width={500} height={500} />
        ))}

        {/* Centered Achievement Card */}
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-4 z-10">
          <div className="flex items-center mb-4">
            <Image src="/psu5.jpg" alt="Avatar" width={100} height={100} className="rounded-full" />
            <div className="ml-3">
              <div className="font-bold text-xl">{educationDetails.universityName}</div>
              <p className="text-slate-700 text-base">{educationDetails.location}</p>
            </div>
          </div>
          <table className="table-auto w-full">
            <tbody>
              <tr className="bg-slate-300">
                <td className="border px-4 py-2">Class:</td>
                <td className="border px-4 py-2">{educationDetails.classYear}</td>
              </tr>
              <tr >
                <td className="border px-4 py-2">Major:</td>
                <td className="border px-4 py-2">{educationDetails.major}</td>
              </tr>
              <tr className="bg-slate-300">
                <td className="border px-4 py-2">Honors:</td>
                <td className="border px-4 py-2">{educationDetails.honors}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GPA:</td>
                <td className="border px-4 py-2">{educationDetails.gpa}</td>
              </tr>
              <tr className="bg-slate-300">
                <td className="border px-4 py-2">Major GPA:</td>
                <td className="border px-4 py-2">{educationDetails.majorGPA}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EducationFormat;
