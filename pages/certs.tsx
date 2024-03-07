// pages/certs.tsx
import Head from 'next/head';
import Carousel from '../components/Carousel';

const images = [
  '/certs/rutgers.jpg',
  '/certs/udemy.jpg',
  '/certs/dappu.jpg',
  '/certs/upenn.jpg',
  '/certs/duke-full.jpg',
  '/certs/insead-full.jpg',
  '/certs/cryptography.jpg',
];

const Certs = () => {
  return (
    <>
      <Head>
        <title>Certificates Carousel</title>
      </Head>
      <div className="container mx-auto mt-8">
        <Carousel images={images} />
      </div>
    </>
  );
};

export default Certs;

