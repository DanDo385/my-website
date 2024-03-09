import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>Home</title>
            </Head>
            
            {/* Setting the background image */}
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./blockchaindots.jpg)' }}>
                {/* Text with montserrat font and TailwindCSS text color and size */}
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="font-montserrat text-green-300 text-center text-xl" style={{ fontFamily: 'montserrat, sans-serif' }}>
                        Hello, my name is Dan and this is my website to showcase my credentials as a blockchain developer. My brain cannot stop thinking about code or use cases for blockchain technology.
                    </h2>
                    {/* Image under the text */}
                    <div className="mt-10">
                        <Image src="/landing.jpg" alt="Landing Image" width={459} height={411} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
