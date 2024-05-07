// pages/experience.edu
import ImageCard from "../components/ImageCards";
import Navbar from "../components/Navbar";
import Head from "next/head";

const experience = () => {
  return (
    <>
        <Navbar />
        <Head>
            <title>Experience</title>
        </Head>

        <div className="text-black h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./bull-br.jpg)' }}>
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="font-poppind text-black text-center text-2xl" style={{ fontFamily: 'poppins, sans-serif' }}></h2>
                <div className="mt-10">
                <ImageCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default experience;

