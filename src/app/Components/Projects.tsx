/* import Image from "next/image"; */

const projects = [
  // Come back to these. Add more as needed. Look into presenting them in a carousel
  {
    name: "Experimental Design Matrix Generator",
    description:
      "A commissioned web app for researchers and scientists to create and manage experimental design matrices.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/skudz96/design-of-experiment-frontend",
    demo: "https://design-of-experiment-frontend.vercel.app/",
  },
  {
    name: "Tasty Ten",
    description:
      "A full-stack recipe finder app that helps users discover new meals based on selected ingredients.",
    techStack: ["React", "Next.js", "Tailwind CSS", "React-Bootstrap"],
    github:
      "https://github.com/SchoolOfCode/week-8-hackathon-xaviersschoolofimutables",
    demo: "https://tasty-ten-hackathon.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping over projects array, creating a div for every project */}
          {projects.map((project, index) => (
            <div key={index} className="bg-highlight p-6 rounded-lg">
              {/* Image tag. Include img source object in projects array */}
              {/* Project title */}
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              {/* Project description */}
              <p className="mb-4">{project.description}</p>
              {/* Creating a seperate div for tech stack, mapping through that array in a similar way */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* github link */}
              <div className="flex justify-center gap-20">
                <a href={project.github}>GitHub</a>
                <a href={project.demo}>Deployed App</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
