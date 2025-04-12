import Image from "next/image";
import projects from "@/data/project";
import Link from "@/components/ui/Link";

const ProjectCard = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-6 p-2 text-black dark:text-white">
      {projects.map((item, index) => (
        <li
          key={index}
          className=" p-8 rounded-xl shadow-lg dark:shadow-white/10 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
            className="rounded-lg object-center"
          />
          <h3 className="text-xl font-bold mt-4">{item.title}</h3>
          <p className="text-gray-400 mt-2">{item.description}</p>
          <p className="text-sm mt-2">
            <span className="font-semibold text-gray-300">Built with:</span>{" "}
            {item.tags.join(", ")}
          </p>
          <div className="flex items-center justify-between mt-4">
            <Link
              href={item.url}
              newTab
              className="text-blue-400 hover:underline"
            >
              View Project →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCard;
