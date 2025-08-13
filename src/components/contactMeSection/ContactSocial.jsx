import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/vishal-jadhav-4074112b6/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/vishaljadhav15" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/j_vishal_11/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
