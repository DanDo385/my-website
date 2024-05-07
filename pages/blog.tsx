// pages/blog.tsx
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Blog</title>
      </Head>
            
      <div className="h-screen bg-repeat bg-center" style={{ backgroundImage: 'url(./br.jpg)', backgroundSize: 'auto' }}>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="font-poppins text-green-300 text-center text-2xl" style={{ fontFamily: 'poppins, sans-serif' }}>
            Click on the image below to see my blog, C2DeFi.com
          </h2>
          <div className="mt-10">
            <a href="https://www.c2defi.com" target="_blank" rel="noopener noreferrer">
              <Image src="/blog.jpg" alt="Blog Image" width={459} height={411} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
