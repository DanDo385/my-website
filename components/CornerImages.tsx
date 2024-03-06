import Image from 'next/image';

const CornerImages = () => {
  return (
    <div className="fixed inset-0">
      <div className="absolute top-0 left-0">
        <Image src="/pennst/psu1.jpg" alt="Image 1" width={400} height={400} />
      </div>
      <div className="absolute top-0 right-0">
        <Image src="/pennst/psu2.jpg" alt="Image 2" width={400} height={400} />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src="/pennst/psu3.jpg" alt="Image 3" width={400} height={400} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src="/pennst/psu4.jpg" alt="Image 4" width={400} height={400} />
      </div>
    </div>
  );
};

export default CornerImages;
