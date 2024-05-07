// pages/projects.js
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-10">Portfolio Projects</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
