// pages/certs.tsx
import Carousel from '../components/Carousel'; // Ensure correct path to the Carousel component

const Certs = () => {
  // Assuming you have an array of image paths. Adjust paths as necessary.
  const images = [
    '/certs/udemy.jpg',
    '/certs/dappu.jpg',
    '/certs/upenn.jpg',
    '/certs/duke-full.jpg',
    '/certs/insead-full.jpg',
    '/certs/cryptography.jpg',
  ];

  return (
    <>
      <div className="bg-education-background bg-cover bg-center h-screen">
        <div className="container mx-auto px-4">
          <Carousel images={images} />
        </div>
      </div>
    </>
  );
}

export default Certs;
