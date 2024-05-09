// pages/edu.tsx
import Navbar from "../components/Navbar";
import Head from "next/head";
import EducationFormat from "@/components/EducationFormat";

const education = () => {
  return (
    <>
        <Navbar />
        <div className="bg-blue-950 min-h-screen">
            <Head>
                <title>Education</title>
            </Head>
            <EducationFormat />
        </div>
    </>
  );
};

export default education;