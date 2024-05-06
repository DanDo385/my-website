// components/ProjectCard.js
import Link from 'next/link';

const ProjectCard = ({ name, languages, description, repoLink, internalLink }) => {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-800">Languages Used: {languages}</p>
      <p className="text-sm text-gray-600">{description}</p>
      {internalLink ? (
        <Link href={internalLink}>
          <span className="mt-4 text-blue-600 hover:underline cursor-pointer">Learn More</span>
        </Link>
      ) : (
        <a href={repoLink} className="mt-4 text-blue-600 hover:underline">GitHub Repository</a>
      )}
    </div>
  );
};

export default ProjectCard;
