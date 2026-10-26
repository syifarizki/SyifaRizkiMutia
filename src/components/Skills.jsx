import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiPostman,
  SiWordpress,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { FiLayers } from "react-icons/fi";
import { FaCode, FaPalette, FaDatabase, FaWrench } from "react-icons/fa";
export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: FaCode,
      skills: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss }, // DIPERBAIKI: Dipetakan ke objek SiCss yang sah
        { name: "JavaScript", icon: SiJavascript },
        { name: "React JS", icon: SiReact },
      ],
    },
    {
      title: "Styling & UI",
      description: "Creating clean layouts and responsive designs.",
      icon: FaPalette,
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Sass", icon: SiSass },
      ],
    },
    {
      title: "Backend Development",
      description: "Developing website features and server-side functionality.",
      icon: FaDatabase,
      skills: [
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Managing code, testing, and development workflows.",
      icon: FaWrench,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: VscVscode }, // DIPERBAIKI: Ikon VS Code berfungsi penuh
        { name: "Postman", icon: SiPostman },
      ],
    },
    {
      title: "CMS & Website Management",
      description:
        "Building and managing websites with a content management system.",
      icon: FiLayers,
      skills: [{ name: "WordPress", icon: SiWordpress }],
    },
  ];
  return (
    <div className="px-6 py-20">
      <div className="mb-10 md:mb-14">
        <h4 className="text-accent uppercase font-semibold tracking-wider text-base block mb-3">
          What I Work With
        </h4>
        <h3 className="capitalize text-cream text-3xl font-bold mb-4">
          Skills
        </h3>
        <p className="mt-4 leading-relaxed text-slate-300">
          Technologies and tools I use to build, maintain, and improve modern
          web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <div
              key={group.title}
              className="border border-white/5 bg-white/2 rounded-2xl transition duration-300 hover:border-accent/40 hover:bg-white/4 shadow-xl group hover:-translate-y-1 p-6"
            >
              <div className="h-11 w-11 mb-5 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:text-terracotta group-hover:bg-accent transition-colors duration-300">
                <GroupIcon size={20} />
              </div>

              <h3 className="font-semibold text-lg text-cream group-hover:text-accent transition-colors duration-300">
                {group.title}
              </h3>

              <div className="text-sm min-h-12.5 text-slate-300 leading-relaxed mt-2">
                {group.description}
              </div>

              <div className="flex flex-wrap mt-5 gap-2">
                {group.skills.map((skill) => {
                  const TechIcon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-md border border-white/8 bg-white-1 px-3 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 "
                    >
                      <TechIcon scale={14} className="shrink-0" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
