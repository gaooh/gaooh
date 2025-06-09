const projects = [
  {
    name: "Project One",
    description: "Description of project one.",
    url: "#",
  },
  {
    name: "Project Two",
    description: "Description of project two.",
    url: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              className="block border rounded p-4 hover:shadow"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
