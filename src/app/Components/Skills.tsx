const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Git",
  "CI/CD",
  "Agile Methodologies",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-highlight">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Mapping through skills array, creating a span with styling per skill */}
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-accent px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
