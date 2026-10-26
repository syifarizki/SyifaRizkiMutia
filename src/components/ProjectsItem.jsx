import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectItem({ project }) {
  const isReapository =
    project.link.includes("github.com") || project.link.includes("gitlab.com");
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 r">
      <a
        href={project.link}
        target="_blank"
        className="aspect-video overflow-hidden rounded-xl"
      >
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </a>
      <div className="lg:py-2">
        <h3 className="text-3xl mt-1 lg:mt-3 font-bold text-cream transition-colors group-hover:text-accent md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 leading-7 text-cream/65">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-md px-3 py-1.5 text-xs font-medium border border-cream/10 text-cream/75 transition group-hover:border-accent/50 group-hover:text-accent"
            >
              {technology}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-accent transition group-hover:text-cream"
          >
            {isReapository ? (
              <>
                <FaGithub size={18} /> View Source Code
                <FiArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </>
            ) : (
              <>
                View Live Website
                <FiArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
