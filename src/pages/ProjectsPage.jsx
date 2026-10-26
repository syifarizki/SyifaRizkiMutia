import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ProjectTable from "../components/ProjectTable";
import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const displayUrl = (url) => {
    return url.replace("https://", "").replace("www.", "").split("/")[0];
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16 lg:py-24">
      <Link
        to="/"
        className="text-accent inline-flex items-center mb-8 gap-2 text-base font-edu font-bold tracking-widest  hover:text-cream transition-colors duration-300 group"
      >
        <FiArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform "
        />
        Syifa Rizki Mutia
      </Link>
      <h1 className="text-4xl font-bold text-cream sm:text-5xl tracking-wide">
        All Projects
        <span className="text-terracotta ml-1 animate-pulse duration-1000">
          .
        </span>
      </h1>
      <ProjectTable />
    </div>
  );
}
