// pages/certs.tsx
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';  

const Certs = () => {
    //Images for the carousel
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
        <Navbar />
        <div className="container mx-auto px-4">
            <Carousel images={images} />
        </div>
    </>
);
}

export default Certs;
