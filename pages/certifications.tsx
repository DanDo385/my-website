// pages/certifications.tsx
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import certImages from '../data/certs';

const Certs = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Certificates Carousel</title>
      </Head>
      <div className="container mx-auto mt-8">
        <Carousel images={certImages} />
      </div>
    </>
  );
};

export default Certs;

