// pages/exp.edu
import Navbar from "@/components/Navbar";
import Head from "next/head";

const experience = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Experience</title>
      </Head>
      <div className="h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('./ipfs-br4.jpg')" }}>
      
      </div>
    
    </>
    
  )
}

export default experience;