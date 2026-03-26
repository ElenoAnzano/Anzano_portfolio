type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

import Image from "next/image";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-3 max-w-full max-h-50 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="border p-4 rounded-lg">
          <Image src={project.image} alt={project.title} width={400} height={400} className="mb-4 p-2 border border-gray-500 max-h-50 max-w-full rounded-lg" />
          <h2 className="mb-2 font-bold">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}