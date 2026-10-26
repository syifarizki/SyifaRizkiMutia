export default function About() {
  return (
    <>
      <div className="mx-auto grid  grid-cols-1 items-center gap-12 px-6 py-20 md:pb-40 md:pt-50 md:grid-cols-2">
        <div>
          <h4 className="text-accent uppercase font-semibold tracking-wider text-base block mb-3">
            Get to know me
          </h4>
          <h3 className="capitalize text-cream text-3xl font-bold mb-4">
            About me
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hi! I'm Syifa, a Web Developer who enjoys building modern,
            responsive, and user-friendly websites. I love turning ideas into
            functional digital experiences that are both visually appealing and
            easy to use.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            I focus on writing clean code, creating well-structured interfaces,
            and paying attention to detail. I'm always looking for opportunities
            to improve my skills and build better web experiences.
          </p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-xl font-mono text-sm text-slate-300 border border-gray-800">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <pre className="overflow-x-auto text-left">
            <code>
              {`const developer = {
                  role: "Web Developer",
                  focus: [
                    "Frontend Development",
                    "Web Development",
                    "Responsive Design",
                    "Website Improvement"
                  ],
                  values: [
                    "Clean Code",
                    "Attention to Detail",
                    "User Experience"
                  ],
                  mindset: "Always learning and improving"
              };`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
