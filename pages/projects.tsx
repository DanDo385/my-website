// pages/projects.js
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      name: "De-Zillow",
      languages: "Solidity, React.js, Hardhat, Ethers, Chai",
      description: "Tool for minting properties inspired by Zillow",
      repoLink: "https://github.com/DanDo385/de-zillow"
    },
    {
      name: "Decentralized Bond Auction Simulation",
      languages: "Solidity, Python, Web3.py, Ganache-CLI",
      description: "Ability to mint bonds as NFTs upon auction result",
      repoLink: "https://github.com/DanDo385/nft-eth-bond"
    },
    {
      name: "DALL-E 3 AI Image Generator/NFT Minter",
      languages: "Solidity, Next.js, TailwindCSS. DALL-E 3 API",
      description: "Generate an AI Image with option to mint NFT",
      repoLink: "https://github.com/DanDo385/dalle-nft-minter"
    }
  ];

  return (
    <Navbar />
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <h1 className="text-center">Portfolio Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
