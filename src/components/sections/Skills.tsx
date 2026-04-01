const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-bold">Yetenekler</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-gray-800 dark:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}