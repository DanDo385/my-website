// pages/edu.tsx
import Navbar from "../components/Navbar";
import CornerImages from "../components/CornerImages";
import Head from "next/head";
import AchievementCard from "@/components/AchievementCard";
import EduFmt from "@/components/EduFmt";

const edu = () => {
  return (
    <>
      
        <Head>
        <title>Education</title>
        </Head>
        <EduFmt />
    </>
  )
}

export default edu;