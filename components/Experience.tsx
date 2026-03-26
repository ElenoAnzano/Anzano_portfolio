const experiences = [
  {
    id: 1,
    title: "Full Stack Frontend Developer",
    types: "Next.js, React, Tailwind CSS, TypeScript",
    description: "A developer specializing in building full stack and frontend web applications using Next.js, React, Tailwind CSS, and TypeScript, with a focus on performance, scalability, and user-friendly design."
  },
  {
    id: 2,
    title: "Full Stack Backend Developer",
    types: "Node.js, Express, MySQL",
    description: "A developer specializing in building full stack and backend web applications using Node.js, Express, and MySQL, with a focus on performance, scalability, and user-friendly design."
  },
  {
    id: 3,
  title: "Full Stack Developer",
  types: "Next.js, React, Node.js, Express, MySQL",
  description: "A developer specializing in building complete web applications from frontend to backend, integrating databases and APIs, with a focus on performance, scalability, and delivering user-friendly solutions."
}
];

export function Experience() {
  return (
    <div className="flex items-center gap-5 justify-center h-100px w-200px bg-gray-100">
      {experiences.map((experience) => (
        <div key={experience.id} className="bg-gray-200 rounded-lg shadow-md p-6 mb-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">{experience.title}</h2>
          <p className="text-gray-600">{experience.description}</p>
        </div>
      ))}
    </div>
  );
}