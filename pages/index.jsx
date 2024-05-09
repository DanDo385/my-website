//pages/index.jsx
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
        <h2 className="font-poppins text-green-300 text-center text-2xl" style={{ fontFamily: 'poppins, sans-serif' }}>
          Hello, my name is Dan, and welcome to my website. <br />
          Here, I showcase my credentials as a blockchain developer. <br />
          I am deeply passionate about the vast potential of blockchain <br />
          technology, especially in tokenizing various assets - a theme <br />
          central to my portfolio. I am excited playing a role in <br />
          advancing the decentralization of finance, striving to forge <br />
          a fairer and more inclusive finacial system in the future.
                
        <h2 className="font-poppins text-green-300 text-center text-2xl" style={{ fontFamily: 'poppins, sans-serif' }}></h2></h2>
      <div className="mt-10">
            <Image src="/landing.jpg" alt="Landing Image" width={459} height={411} />
                    </div>
            </div>
        </div>
    </>
    );
}
export default Home;
