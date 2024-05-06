// pages/projects.js
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      name: "DALL-E 3 AI Image Generator/NFT Minter",
      languages: "Solidity, Next.js, TailwindCSS",
      description: "Smart contract for a unique NFT collection.",
      repoLink: "https://github.com/DanDo385/dalle-nft-minter",
      internalLink: "/project-details/bond-auction"
    },
    {
      name: "Decentralized Bond Auction Simulation",
      languages: "Solidity, Python",
      description: "Ability to mint bonds as NFTs upon auction result",
      repoLink: "https://github.com/DanDo385/nft-eth-bond",
      internalLink: "/project-details/bond-auction"
    },
    {
      name: "Blockchain Analytics Tool",
      languages: "Python, JavaScript",
      description: "Tool for analyzing blockchain transactions.",
      repoLink: "https://github.com/yourusername/project3"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
