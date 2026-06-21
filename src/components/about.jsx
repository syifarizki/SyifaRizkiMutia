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
            interest in Front-End Development. I have experience building
            responsive and user-friendly websites through internships,
            independent study programs, and academic projects. I enjoy working
            with technologies such as HTML, CSS, JavaScript, ReactJS, Tailwind
            CSS, and Bootstrap to create modern web experiences.
          </p>
          <p className="mb-4 leading-7">
            I enjoy transforming designs into interactive and functional
            websites while paying attention to responsiveness and user
            experience. I enjoy exploring new technologies and applying them to
            real projects. My goal is to create modern, responsive interfaces
            with clean code and a strong focus on user experience.
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
