import { VscPrimitiveSquare } from "react-icons/vsc";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "PT Jurnalindo Aksara Grafika",
      period: "Nov 2025 — May 2026",
      location: "Jakarta, Indonesia",
      description: [
        "Maintained and improved existing websites, including Bisnis.com, e-Paper, and TokoBisnis.",
        "Migrated the Jakarta channel interface from Bootstrap to Tailwind CSS.",
        "Developed and refined responsive layouts for desktop and mobile devices.",
        "Worked with Laravel, PHP, JavaScript, Tailwind CSS, Bootstrap, and Sass.",
      ],
    },
    {
      role: "Independent Study - Web Development",
      company: "PT Presentologics",
      period: "Feb 2024 — Jun 2024",
      location: "Bandung, Indonesia",
      description: [
        "Developed a Purelipuran tourism village website as part of a capstone project.",
        "Implemented responsive web interfaces using JavaScript and Tailwind CSS.",
        "Contributed to frontend and backend development activities, testing, and project collaboration.",
      ],
    },
  ];
  const renderDescriptionWithLinks = (text) => {
    if (text.includes("Bisnis.com")) {
      return (
        <>
          Maintained and improved existing websites, including
          <a
            href="https://bisnis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terracotta font-medium mx-1"
          >
            Bisnis.com
          </a>
          ,
          <a
            href="https://bisnis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terracotta font-medium mx-1"
          >
            e-Paper
          </a>
          , and
          <a
            href="https://tokobisnis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terracotta font-medium mx-1"
          >
            TokoBisnis
          </a>
          .
        </>
      );
    }

    if (text.includes("Purelipuran")) {
      return (
        <>
          Developed a
          <a
            href="https://purelipuran.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terracotta font-medium mx-1"
          >
            Purelipuran
          </a>
          tourism village website as part of a capstone project.
        </>
      );
    }

    return text;
  };
  return (
    <div className="px-6 py-20 md:py-32">
      <div className="mb-10">
        <h4 className="text-accent uppercase font-semibold tracking-wider text-base block mb-3">
          where i've worked
        </h4>
        <h3 className="capitalize text-cream text-3xl font-bold mb-4">
          Experience
        </h3>
      </div>
      <div>
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-8 group"
            >
              <div className="text-sm font-medium text-slate-300 pt-1 group-hover:text-cream transition-colors duration-300">
                {experience.period}
              </div>
              <div className="flex ">
                <div className="border-l-2 border-gray-800  pl-6 group-hover:border-terracotta transition-colors duration-300 pb-2"></div>
                <div>
                  <h3 className="text-xl font-bold text-cream group-hover:text-terracotta border-terracotta transition-colors duration-300">
                    {experience.role}
                  </h3>
                  <div className="flex flex-wrap items0center gap-x-2 mt-1 text-sm">
                    <div className="font-semibold text-accent">
                      {experience.company}
                    </div>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <div className="text-slate-300">{experience.location}</div>
                  </div>
                  <ul className="mt-5 space-y-3.5">
                    {experience.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-slate-300 group-hover:text-cream transition-colors duration-300"
                      >
                        <span className="mt-1.5 text-terracotta text-[10px] shrink-0 select-none">
                          <VscPrimitiveSquare />
                        </span>
                        <span>{renderDescriptionWithLinks(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
