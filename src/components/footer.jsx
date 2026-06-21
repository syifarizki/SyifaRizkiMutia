export default function Footer({ scrollToSection }) {
  const handleScroll = (section) => {
    scrollToSection(section);
  };
  return (
    <div className="border-t border-[#D6E4FF]">
      <div className="max-w-6xl mx-auto my-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-30 max-w-6xl ">
          <div className="flex flex-col gap-4">
            <div className="text-[25px] text-white font-bold">
              Syifa Rizki Mutia
            </div>
            <div className="text-[15px] text-white/80 font-medium">
              Frontend Developer focused on crafting modern interfaces &
              user-friendly web experiences
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className=" text-white font-bold">NAVIGATE</h2>
            <ul className="space-y-3 pl-3">
              <li
                onClick={() => handleScroll("home")}
                className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll("about")}
                className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => handleScroll("experience")}
                className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer"
              >
                Experience
              </li>
              <li
                onClick={() => handleScroll("skills")}
                className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer"
              >
                Skills
              </li>
              <li
                onClick={() => handleScroll("project")}
                className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer"
              >
                Project
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className=" text-white font-bold">CONTACT</h2>
            <ul className="space-y-3 pl-3">
              <li className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/syifa-rizki-mutia-a0355729a/"
                  className="flex gap-3 items-center"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path d="M0 0h256v256H0z" fill="none" />
                    <g fill="none">
                      <rect width="256" height="256" fill="#0a66c2" rx="60" />
                      <path
                        fill="#fff"
                        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                      />
                    </g>
                  </svg>
                  <div>LinkedIn</div>
                </a>
              </li>
              <li className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer">
                <a
                  href="https://github.com/syifarizki"
                  className="flex gap-3 items-center"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M8.854 21.57a9.9 9.9 0 0 0 6.29.001a.493.493 0 0 1-.644-.475c0-.338.013-1.413.013-2.75a2.37 2.37 0 0 0-.675-1.85c2.225-.25 4.562-1.1 4.562-4.938a3.87 3.87 0 0 0-1.025-2.687a3.6 3.6 0 0 0-.1-2.65s-.838-.275-2.75 1.025a9.43 9.43 0 0 0-5 0C7.612 5.958 6.775 6.22 6.775 6.22a3.6 3.6 0 0 0-.1 2.65a3.9 3.9 0 0 0-1.025 2.687c0 3.825 2.325 4.688 4.55 4.938a2.1 2.1 0 0 0-.638 1.337a2.137 2.137 0 0 1-2.91-.82l-.002-.005a2 2 0 0 0-1.538-1.025c-.837.013-.337.475.013.663c.451.38.803.865 1.025 1.412c.2.563.85 1.638 3.362 1.175c0 .838.013 1.625.013 1.863c0 .259-.185.551-.67.475z"
                      opacity=".5"
                    />
                    <path
                      fill="currentColor"
                      d="M12 2.083c-5.523 0-10 4.477-10 10c0 4.423 2.875 8.169 6.855 9.488c.485.075.67-.216.67-.475c0-.238-.012-1.025-.012-1.863c-2.513.463-3.163-.612-3.363-1.175a3.64 3.64 0 0 0-1.025-1.412c-.35-.188-.85-.65-.013-.663a2 2 0 0 1 1.538 1.025l.003.006a2.137 2.137 0 0 0 2.91.82c.043-.51.27-.984.637-1.338c-2.225-.25-4.55-1.113-4.55-4.938a3.9 3.9 0 0 1 1.025-2.687a3.6 3.6 0 0 1 .1-2.65s.837-.263 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025c.37.838.406 1.786.1 2.65a3.87 3.87 0 0 1 1.025 2.687c0 3.838-2.338 4.688-4.562 4.938c.482.49.729 1.164.675 1.85c0 1.337-.013 2.412-.013 2.75a.493.493 0 0 0 .643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10"
                    />
                  </svg>
                  <div>Github</div>
                </a>
              </li>
              <li className="text-[#e6e4e2] text-[16px] font-semibold hover:text-amber-400 cursor-pointer">
                <a
                  href="https://www.instagram.com/syifarizki14?igsh=MzZtMzNvNjZoYWIx"
                  className="flex gap-3 items-center"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path d="M0 0h256v256H0z" fill="none" />
                    <g fill="none">
                      <rect
                        width="256"
                        height="256"
                        fill="url(#SVGKdMMobCR)"
                        rx="60"
                      />
                      <rect
                        width="256"
                        height="256"
                        fill="url(#SVGqYUiQbXV)"
                        rx="60"
                      />
                      <path
                        fill="#fff"
                        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                      />
                      <defs>
                        <radialGradient
                          id="SVGKdMMobCR"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fd5" />
                          <stop offset=".1" stopColor="#fd5" />
                          <stop offset=".5" stopColor="#ff543e" />
                          <stop offset="1" stopColor="#c837ab" />
                        </radialGradient>
                        <radialGradient
                          id="SVGqYUiQbXV"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3771c8" />
                          <stop offset=".128" stopColor="#3771c8" />
                          <stop offset="1" stopColor="#60f" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </g>
                  </svg>
                  <div>Instagram</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
