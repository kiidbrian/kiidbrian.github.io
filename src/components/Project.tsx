import type { ProjectItem } from "../types";

type ProjectProps = {
  project: ProjectItem;
};

const Project = ({ project }: ProjectProps) => {
  // const [stars, setStars] = useState();

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="flex-auto p-4 border border-[#e5e7eb] hover:bg-[#f3f4f6] hover:border-transparent">
        <div className="flex items-center flex-wrap">
          <div className="whitespace-nowrap mr-3 text-lg font-extralight">{project.name}</div>
          <div className="flex space-x-2">
            {project.tech &&
              project.tech.map((icon) => (
                <span className={`${icon} text-lg font-extralight`}></span>
              ))}
          </div>
        </div>
        <div className="text-sm text-c-lighter/30 text-lg-lighter">
          {project.desc}
        </div>
      </div>
    </a>
  );
};

export default Project;
