interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    year: number;
    category: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-gray-400">{project.year}</span>
      </div>

      <p className="mb-4 text-gray-600">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-2 py-1 text-xs"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-sm font-medium text-blue-600">{project.category}</p>
    </div>
  );
}