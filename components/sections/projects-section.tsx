import { information } from "@/assets/data";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section
      className="py-5 flex flex-col items-start border-b border-gray-500/20 px-8"
      id="projects"
    >
      <h2 className="text-xl text-gray-400 mb-5">Featured Projects</h2>

      <main className="w-full flex flex-col gap-4">
        {information.projects.map((project) => (
          <article
            key={project.links[0].url}
            className="border border-gray-500/20 rounded-xl group"
          >
            <div className="relative w-full h-40 mb-2 rounded-tl-xl overflow-hidden rounded-tr-xl">
              <img
                src={project.poster}
                alt=""
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Content */}
            <div className="px-3 py-2">
              <h3 className="text-white mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex gap-2 flex-wrap mb-5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center text-xs gap-1 px-3 py-1 border border-gray-500/30 "
                  >
                    <tech.icon />
                    {tech.name}
                  </span>
                ))}
              </div>

              <p className="text-sm text-balance text-gray-400 mb-8">
                {project.description}
              </p>

              <div className="flex gap-2 items-center">
                {project.links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.url}
                    className="px-4 py-3 border border-gray-500/30 rounded-lg text-gray-500 hover:bg-gray-500/5 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="nooopener noreferrer"
                  >
                    <link.icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};

export default ProjectsSection;
