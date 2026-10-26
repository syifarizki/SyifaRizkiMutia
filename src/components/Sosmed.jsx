import { FaGithub, FaLinkedin, FaInstagram, FaGitlab } from "react-icons/fa";
export default function Sosmed() {
  return (
    <div className="flex gap-8 my-5">
      <a
        href="https://github.com/syifarizki"
        className="text-light hover:text-terracotta"
      >
        <FaGithub className="w-8 h-8" />
      </a>
      <a
        href="https://gitlab.com/syifarizkimutia"
        className="text-light hover:text-terracotta"
      >
        <FaGitlab className="w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/syifa-rizki-mutia-a0355729a"
        className="text-light hover:text-terracotta"
      >
        <FaLinkedin className="w-8 h-8" />
      </a>
      <a
        href="https://www.instagram.com/syifarizki14?obrf=MzZtMzNvNjZoYWIx"
        className="text-light hover:text-terracotta"
      >
        <FaInstagram className="w-8 h-8" />
      </a>
    </div>
  );
}
