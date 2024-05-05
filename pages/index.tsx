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
            
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./blockchaindots.jpg)' }}>
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="font-montserrat text-green-300 text-center text-2xl" style={{ fontFamily: 'montserrat, sans-serif' }}>
                Hello, my name is Dan, and welcome to my website. <br />
                Here, I showcase my expertise as a blockchain developer. I am deeply passionate about the vast potential of blockchain technology, especially in tokenizing various assets—a theme central to my portfolio. I am excited about the role I can play in advancing the decentralization of finance, striving to forge a fairer and more inclusive future.
                
                </h2>
                     <div className="mt-10">
                <Image src="/landing.jpg" alt="Landing Image" width={459} height={411} />
                    </div>
            </div>
        </div>
    </>
    );
}
export default Home;
