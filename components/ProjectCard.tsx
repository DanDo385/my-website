// components/ProjectCard.tsx

const ProjectCard = ({ name, languages, description, repoLink }) => {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-white rounded-lg border border-green-200 shadow-md hover:bg-green-100">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-greennn-800">Technologies Used: {languages}</p>
      <p className="text-sm text-green-400">{description}</p>
      <a href={repoLink} className="mt-4 text-green-400 hover:underline">GitHub Repository</a>
    </div>
  );
};

export default ProjectCard;
