import { useState } from "react";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (section) => {
    scrollToSection(section);
    setIsOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="h-15 px-6 flex items-center justify-between md:justify-center">
        {/* Nama */}
        <h1 className="text-white font-bold text-lg md:hidden">
          Syifa Rizki Mutia
        </h1>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
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
              className="w-7 h-7"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li
            onClick={() => handleScroll("home")}
            className="text-[#e6e4e2] text-[16px] font-semibold uppercase px-3 py-2 hover:bg-[#8199bd] hover:text-amber-400 hover:rounded-2xl cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("about")}
            className="text-[#e6e4e2] text-[16px] font-semibold uppercase px-3 py-2 hover:bg-[#8199bd] hover:text-amber-400 hover:rounded-2xl cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("experience")}
            className="text-[#e6e4e2] text-[16px] font-semibold uppercase px-3 py-2 hover:bg-[#8199bd] hover:text-amber-400 hover:rounded-2xl cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => handleScroll("skills")}
            className="text-[#e6e4e2] text-[16px] font-semibold uppercase px-3 py-2 hover:bg-[#8199bd] hover:text-amber-400 hover:rounded-2xl cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleScroll("project")}
            className="text-[#e6e4e2] text-[16px] font-semibold uppercase px-3 py-2 hover:bg-[#8199bd] hover:text-amber-400 hover:rounded-2xl cursor-pointer"
          >
            Project
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-[#273267] mx-6 px-6 py-4 gap-3 shadow-lg rounded-lg border border-white">
          <li
            onClick={() => handleScroll("home")}
            className="text-white font-semibold uppercase cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("about")}
            className="text-white font-semibold uppercase cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("experience")}
            className="text-white font-semibold uppercase cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => handleScroll("skills")}
            className="text-white font-semibold uppercase cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleScroll("project")}
            className="text-white font-semibold uppercase cursor-pointer"
          >
            Project
          </li>
        </ul>
      )}
    </div>
  );
}
