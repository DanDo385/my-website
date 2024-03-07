// pages/edu.tsx
import Navbar from "../components/Navbar";
import Head from "next/head";
import EduFmt from "@/components/EduFmt";

const edu = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue-950 min-h-screen">
        <Head>
        <title>Education</title>
        </Head>
        <EduFmt />
      </div>
    </>
  )
}

export default edu;