import Image from 'next/image';
import { cornerImages, educationDetails } from '../data/psu';

const EducationFormat = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        {/* Image above */}
        <div className="w-full flex justify-center">
          <Image
            src={cornerImages[0].src}
            alt="Top Image"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Side by side (image, card, image) */}
        <div className="flex flex-grow items-center justify-between w-full px-10">
          {/* Image to the left */}
          <Image
            src={cornerImages[2].src}
            alt="Left Image"
            width={300}
            height={300}
            className="object-contain"
          />
          
          {/* Centered Achievement Card */}
          <div className="text-black max-w-md rounded overflow-hidden shadow-lg bg-white p-4 z-10">
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
                <tr>
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

          {/* Image to the right */}
          <Image
            src={cornerImages[3].src}
            alt="Right Image"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Image below */}
        <div className="w-full flex justify-center">
          <Image
            src={cornerImages[1].src}
            alt="Bottom Image"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default EducationFormat;
