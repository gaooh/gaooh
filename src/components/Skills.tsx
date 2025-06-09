const skills = ["React", "TypeScript", "Rails", "Tailwind CSS"];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill} className="bg-white shadow px-4 py-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
