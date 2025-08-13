import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const education = [
  {
    job: "BBA in Computer Applications (BBA-CA)",
    company: "Savitribai Phule Pune University",
    date: "2021 - 2024",
    responsibilities: [
      "Graduated with a CGPA of 7.5.",
      "Built academic projects including a portfolio and an e-commerce application.",
    ],
  },
  {
    job: "HSC - Commerce",
    company: "Late Bandoji Khandoji Chavan School, Pune",
    date: "2020 - 2021",
    responsibilities: [
      "Completed Higher Secondary Education in Commerce stream.",
      "Achieved 90.67%.",
    ],
  },
  {
    job: "SSC - Maharashtra State Board",
    company: "P. P. Chintamani Maharaj Madhyamik Vidyalaya, Parbhani",
    date: "2018 - 2019",
    responsibilities: ["Completed Secondary Education.", "Achieved 78.20%."],
  },
];

const AllEducation = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center text-orange font-bold mt-10">
        Education
      </h2>
      <div className="flex md:flex-row sm:flex-col items-center justify-between mt-6">
        {education.map((edu, index) => (
          <>
            <SingleExperience key={index} experience={edu} />
            {index < education.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default AllEducation;
