// pages/edu.tsx
import Navbar from "../components/Navbar";
import CornerImages from "../components/CornerImages";
import Head from "next/head";
import AchievementCard from "@/components/AchievementCard";
import EduFmt from "@/components/EduFmt";

const edu = () => {
  return (
    <>
      <div className="bg-blue-900 min-h-screen">
        <Head>
        <title>Education</title>
        </Head>
        <EduFmt />
      </div>
    </>
  )
}

export default edu;