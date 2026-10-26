import ProjectItem from "./ProjectsItem";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project() {
  return (
    <div className="px-6 py-20">
      <div className="mb-10 md:mb-14">
        <h4 className="text-accent uppercase font-semibold tracking-wider text-base block mb-3">
          Things I've Created
        </h4>
        <h3 className="capitalize text-cream text-3xl font-bold mb-4">
          My Projects
        </h3>
        <p className="mt-4 leading-relaxed text-slate-300">
          A collection of web projects built with a focus on functionality and
          user experience.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="flex justify-end mt-20">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 pb-1 border-b border-b-accent font-medium text-accent transition duration-300 hover:text-cream hover:border-b-cream tracking-widest"
        >
          View All Projects
          <FiArrowUpRight
            size={18}
            className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
