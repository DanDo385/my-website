import Head from "next/head";
import Navbar from "../components/Navbar";
import ResumeSelect from "../components/ResumeSelect";

const resume = () => {
  return (
    <>
    <Navbar />
        <Head>
            <title>Resume</title>
        </Head>
            <div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url('./ipfs-br4.jpg')" }}>
            <ResumeSelect />  
    </div>
  </>
  );
};

export default resume;