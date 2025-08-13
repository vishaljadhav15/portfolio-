const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-orange font-bold mb-10">About Me</h2>
      <p>
        I’m Vishal Jadhav, a recent BBA in Computer Applications graduate with a
        strong passion for web development. Skilled in HTML, CSS, JavaScript,
        React.js, Tailwind CSS, Bootstrap, Node.js, and MongoDB, I enjoy
        creating responsive and user-friendly websites. As a fresher, I’m eager
        to apply my knowledge, learn from real-world projects, and contribute to
        building impactful digital solutions. My goal is to grow as a developer
        while delivering value through creativity and clean code.
      </p>
      <a
        href="public/VISHAL JADHAV.pdf"
        download
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan transition-all duration-500"
      >
        My Resume
      </a>
    </div>
  );
};

export default AboutMeText;
