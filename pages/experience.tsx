// pages/experience.tsx
import Navbar from "../components/Navbar";
import Head from "next/head";
import ImageCards from "../components/ImageCards";
import workData from "../data/work";

const Experience = () => {
  return (
    <>
      <Navbar />
      <Head>
          <title>Experience</title>
      </Head>
      <div className="text-black h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bull-br.jpg)' }}>
          <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Experience</h2>
              <div className="mt-10">
                <ImageCards workData={workData} />
              </div>
          </div>
      </div>
    </>
  );
}

export default Experience;
