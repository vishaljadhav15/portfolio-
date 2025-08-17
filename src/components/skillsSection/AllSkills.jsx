import SingleSkill from "./SingleSkill";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMaterialdesign, SiMui, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiNodejsFill, RiSeoFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaBootstrap } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "Mui",
    icon: SiMui,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },

  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "SEO",
    icon: TbSeo,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
