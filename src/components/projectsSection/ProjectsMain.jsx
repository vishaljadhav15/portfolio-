import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Startup Mitra",
    year: "Mar2024",
    align: "right",
    image: "/images/project 1.png",
    link: "#",
  },
  {
    name: "Flipzon",
    year: "Sept2024",
    align: "left",
    image: "/images/project 2.png",
    link: "#",
  },
  {
    name: "Mr Burger Wala",
    year: "Jan2025",
    align: "right",
    image: "/images/mr burger wala.png",
    link: "#",
  },
  {
    name: "upcoming project ... ",
    year: "202X",
    align: "left",
    image: "/images/project.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
