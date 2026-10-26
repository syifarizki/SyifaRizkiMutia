import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const menuItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
  ];

  const handleClick = (id) => {
    setActiveMenu(id);
    setIsOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-navy">
      <nav className="flex h-20 items-center justify-between px-6 md:px-4 lg:px-12">
        <a href="#home">
          <img src="/images/logo-srm.png" alt="SRM Logo" className="w-40" />
        </a>
        <div className="hidden md:flex gap-12 md:gap-8">
          <ul className="flex gap-8 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`group flex flex-col ${activeMenu === item.id ? "active" : ""}`}
                >
                  <span className="text-xs uppercase font-bold text-cream tracking-widest transition-color group-hover:text-light group-focus-visible:text-slate-500 group-[.active]:text-terracotta">
                    {item.label}
                  </span>
                  <span className="h-px w-full mt-2 bg-cream self-center transition-all group-hover:bg-light group-hover:w-[calc(100%+22px)] group-focus-visible:bg-slate-500  group-focus-visible:w-[calc(100%+22px)] group-[.active]:w-[calc(100%+22px)] group-[.active]:bg-terracotta"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-cream font-medium text-sm hover:border-terracotta px-4 py-2 rounded-md tracking-widest text-cream hover:text-terracotta"
          >
            Resume
          </a>
        </div>

        {/* BURGER BUTTON */}
        <button
          className="text-cream md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="md:hidden mx-6 flex flex-col gap-4 rounded-lg border border-light bg-navy px-6 py-5 shadow-lg">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`group flex items-center py-1 ${
                  activeMenu === item.id ? "active" : ""
                }`}
              >
                {/* Garis menu */}
                <span className="mr-2 h-px w-6 self-center bg-cream transition-all group-hover:bg-light group-hover:w-12 group-focus-visible:bg-slate-500 group-focus-visible:w-12 group-[.active]:w-12 group-[.active]:bg-terracotta" />

                {/* Teks menu */}
                <span className="text-xs uppercase font-bold text-cream tracking-widest transition-colors group-hover:text-light group-focus-visible:text-slate-500 group-[.active]:text-terracotta">
                  {item.label}
                </span>
              </a>
            </li>
          ))}

          <li className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center border border-cream font-medium text-sm hover:border-terracotta px-4 py-2 rounded-md tracking-widest text-cream hover:text-terracotta"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
