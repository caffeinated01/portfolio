import AboutP from "./Components/AboutP";
import { motion } from "framer-motion";

function About() {
  const aboutParas = [
    {
      title: "I am Javier",
      body: "an aspiring front-end developer and a student at Xinmin Secondary School. I enjoy creating small sites and software.",
    },
    {
      title: "I am hardworking",
      body: "dedicated to achieving my life goals with hard work and determination, approaching each day with a drive to push myself to the limit. My commitment towards achieving my life goals fuels my passion and propels me towards greatness.",
    },
    {
      title: "I am compassionate",
      body: "I am able to connect with others on a personal level. I work hard to achieve my goals and I do not let mere setbacks stop me from doing so. Beyond the confines of textbooks, I excel in actively listening to people's problems and offering support.",
    },
    {
      title: "I am a leader",
      body: "As the HOD of Xinmin's Media Club Video Department, I have been instrumental in driving creativity and excellence, leading teams in producing videos for national competitions. By embracing innovation and creativity, I've contributed to the department's ability to create quality productions.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="p-5 flex flex-col justify-center items-center gap-5 min-h-[90vh]">
        {aboutParas.map((para, idx) => (
          <AboutP key={idx} title={para.title} body={para.body} />
        ))}
      </div>
    </motion.div>
  );
}

export default About;
