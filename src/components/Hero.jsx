import Sosmed from "./Sosmed";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 pt-18">
        <h3 className="font-poppins text-2xl tracking-wider text-cream sm:text-3xl md:text-4xl">
          Hello I'm
        </h3>
        <h1 className="font-caveat text-4xl font-black tracking-wider leading-tight text-terracotta sm:text-5xl md:text-7xl">
          Syifa Rizki Mutia
        </h1>
      </div>
      <p className="max-w-2xl text-center text-sm leading-7 text-light sm:text-base">
        <span className="relative mr-3.5 inline-block">
          <span className="font-semibold text-white">Web Developer</span>
          <svg
            className="pointer-events-none absolute -left-4.5 -top-3.5 h-[200%] w-[130%] text-rose"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M5,30 C5,5 95,5 95,30 C95,55 5,55 5,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        dedicated to building modern, responsive, and user-friendly web
        experiences. I combine clean code with thoughtful design to turn
        creative ideas into functional websites.
      </p>
      <Sosmed />
    </>
  );
}
