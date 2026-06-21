export default function ProjectCard({
  image,
  title,
  description,
  technologies,
}) {
  return (
    <div className="bg-amber-400 rounded-xl border border-[#D6E4FF]">
      <div className="overflow-hidden rounded-t-xl cursor-pointer">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-57.5 transition duration-500 hover:scale-105"
        />
      </div>

      <div className="px-4 pb-6">
        <div className="flex flex-wrap gap-2 py-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="border-2 border-[#273267] rounded-full px-2 py-1 text-[12px] font-semibold text-[#273267]"
            >
              {tech}
            </div>
          ))}
        </div>

        <h3 className="pb-2 text-[24px] font-bold text-[#273267] tracking-tight">
          {title}
        </h3>

        <p className="text-[16px] font-normal text-[#273267] tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
