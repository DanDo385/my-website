// components/CornerImages.tsx
import Image from 'next/image';

const CornerImages = () => {
  // Your images remain the same
  const images = [
    { src: '/pennst/psu1.jpg', position: 'top-16 left-0' },
    { src: '/pennst/psu2.jpg', position: 'top-16 right-0' },
    { src: '/pennst/psu3.jpg', position: 'bottom-0 left-0' },
    { src: '/pennst/psu4.jpg', position: 'bottom-0 right-0' },
  ];

  return (
    <div className="relative min-h-screen pt-[56px]"> {/* Adjust for your navbar height */}
      {images.map((image, index) => (
        <div key={index} className={`absolute ${image.position} w-[276px] h-[276px]`}>
          {/* Next.js 13+ compliant Image usage */}
          <Image src={image.src} alt={`Image ${index + 1}`} className="w-full h-full object-contain" width={333} height={333}/>
        </div>
      ))}
    </div>
  );
};

export default CornerImages;

