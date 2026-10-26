import projects from "../data/projects";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectTable() {
  const displayUrl = (url) => {
    return url.replace("https://", "").replace("www.", "").split("/")[0]; // Mengambil domain utama saja agar rapi
  };
  return (
    <div className="w-full">
        <table className="w-full text-left mt-12 border-collapse">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-navy/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-cream">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-cream">
                Project
              </th>
              <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-cream">
                Built with
              </th>
              <th className="hidden sm:table-cell py-4 pr-8 text-sm font-semibold text-cream">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.slice(3).map((project) => (
              <tr
                key={project.title}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="py-4 pr-4 align-top text-sm text-cream/30 font-mono">
                  {project.year}
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-cream">
                  <div>
                    <div className="block sm:hidden">
                      <a
                        href={project.link}
                        className="inline-flex items-baseline font-medium leading-tight text-cream sm:hidden text-base hover:text-accent hover:underline transition-colors group/link"
                        target="_blank"
                      >
                        <span className="inline-block">
                          {project.title}
                          <FiArrowUpRight
                            size={16}
                            className="inline-block ml-1.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform group-hover/link:text-accent"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="hidden sm:block"> {project.title}</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 font-medium leading-tight text-cream/50 text-sm hover:text-accent hover:underline transition-colors group/link"
                  >
                    <span className="font-mono">
                      {displayUrl(project.link)}
                    </span>
                    <FiArrowUpRight
                      size={14}
                      className="inline shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-cream/50 group-hover/link:text-accent"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
    </div>
  );
}
