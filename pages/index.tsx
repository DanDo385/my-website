import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DanMagro</title>
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet"></link>
      </Head>
      
      {/* Setting the background image */}
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./blockchaindots.jpg)' }}>
        {/* Text with Electrolize font and TailwindCSS text color and size */}
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="font-electrolize text-green-300 text-center text-4xl" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            Hello, my name is Dan Magro and this is my website to showcase my credentials as a Blockchain Developer.
          </h2>
          {/* Image under the text */}
          <div className="mt-10">
            <Image src="/landing.jpg" alt="Landing Image" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
