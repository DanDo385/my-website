import Link from 'next/link';

const ProjectCard = ({ name, languages, description, repoLink }) => {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-black rounded-lg border border-green-400 shadow-md text-green-400 hover:font-bold">
      <h3 className="text-lg">{name}</h3>
      <p className="text-sm">{languages}</p>
      <p className="text-sm">{description}</p>
      <Link href={repoLink} passHref>
        <span className="mt-4 hover:underline">GitHub Repository</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
