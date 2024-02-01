import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardData {}

const ProjectCard = ({}: ProjectCardData) => {
  return (
    <div
      className="w-full aspect-[4/3] bg-no-repeat bg-cover border border-border-color relative"
      style={{ background: "url(/test.png)" }}
    >
      <Link
        href="#"
        className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2"
      >
        <ArrowUpRight />
      </Link>
      <div className="absolute bottom-4 px-4 w-full">
        <div className="p-4 flex justify-between items-center gap-6 backdrop-blur-[30px] border border-border-color bg-background-lighter max-w-full w-full">
            <p>Smart</p>
            <p>Landing Page</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
