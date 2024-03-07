// components/CornerImages.tsx
import Image from 'next/image';

const CornerImages = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      <div className="relative w-[200px] h-[200px]"> {/* Adjust the width and height as needed */}
        <Image src="/pennst/psu1.jpg" alt="Image 1" fill className="object-contain" />
      </div>
      <div className="relative w-[200px] h-[200px]">
        <Image src="/pennst/psu2.jpg" alt="Image 2" fill className="object-contain" />
      </div>
      <div className="relative w-[200px] h-[200px]">
        <Image src="/pennst/psu3.jpg" alt="Image 3" fill className="object-contain" />
      </div>
      <div className="relative w-[200px] h-[200px]">
        <Image src="/pennst/psu4.jpg" alt="Image 4" fill className="object-contain" />
      </div>
    </div>
  );
};

export default CornerImages;

