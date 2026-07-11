import syifa from "../assets/images/syifa.jpg";

export default function About() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 lg:gap-30 md:gap-10">
      <div className="md:col-span-2 ">
        <div className="text-[#e6e4e2] text-[35px] font-bold tracking-wide">
          About Me
        </div>
        <div className="gap-3 text-[#e6e4e2] text-[16px] font-medium my-2">
          <p className="mb-4 leading-7">
            Hi, I'm Syifa, an Informatics Engineering graduate with a strong
            interest in Web Development. I have experience building responsive
            and functional web applications through internships, independent
            study programs, and academic projects. I work with technologies such
            as HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Bootstrap, PHP, and
            Laravel to develop modern web solutions.
          </p>
          <p className="mb-4 leading-7">
            I enjoy turning ideas and designs into functional web applications
            while paying attention to clean code, responsiveness, and usability.
            I also enjoy learning new technologies and applying them to
            real-world projects. My goal is to build modern, reliable, and
            user-friendly web applications that provide a great experience for
            users.
          </p>
        </div>
      </div>
      <div className="rounded-xl mt-6">
        <img
          width="300"
          height="200"
          src={syifa}
          alt="Syifa Rizki Mutia"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
