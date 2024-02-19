import AboutSection from "./Components/AboutSection";
import Reveal from "./Components/Reveal";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaRaspberryPi,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGnubash } from "react-icons/si";
import Icon from "/icon.jpeg";

function About() {
  const technologies = [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
    {
      name: "Shell",
      icon: <SiGnubash />,
    },
    {
      name: "Linux",
      icon: <FaLinux />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "Ras. Pi",
      icon: <FaRaspberryPi />,
    },
  ];

  const aboutParas = [
    {
      title: "A short intro",
      body: "I'm an aspiring front-end developer and a student at Xinmin Secondary School. I've always been interested in how to create software and websites and decided to learn to when I was 14. Since then, I treated it as a hobby, creating small yet fun projects over the years.",
    },
    {
      title: "Personality",
      body: "I bring a vibrant energy and a contagious optimism to every interaction. With a genuine and open heart, I can connecting with others, spreading positivity. Whether it's sparking conversations or rallying my team towards a common goal, I approach each opportunity with enthusiasm and a can-do attitude. I'm also able to connect with others on a personal level. I actively listen to people's problems and offer support. ",
    },
    {
      title: "Academics",
      body: "I'm dedicated to achieving my goals with hard work and determination, approaching each day with a drive to push myself to the limit. My commitment towards achieving my goals fuels my passion and propels me towards greatness, and I don't let mere setbacks stop me from doing so.",
    },
    {
      title: "Leadership",
      body: "As the HOD of Xinmin's Media Club Video Department, I have been instrumental in driving creativity and excellence, leading teams in producing videos for national competitions. By embracing innovation and creativity, I've contributed to the department's ability to create quality productions.",
    },
    {
      title: "Technologies",
      body: (
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">
          {technologies.map((technology, idx) => (
            <Reveal
              key={idx}
              component={
                <div
                  id={idx}
                  className="rounded-sm dark:bg-background-light dark:text-primary-light bg-background-dark text-primary-dark px-5 py-2 flex flex-row font-pixelify gap-2 justify-center items-center"
                >
                  <h1>{technology.name}</h1>
                  <div className="dark:text-secondary-light text-secondary-dark pt-1">
                    {technology.icon}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="p-5 py-12 flex flex-col gap-5 justify-center items-center min-h-[90vh]">
        <div>
          <img
            className="w-[200px] h-[200px] rounded-full object-cover border-2 dark:border-primary-dark border-primary-light"
            src={Icon}
          ></img>
        </div>
        <div className="rounded-md dark:bg-background-light dark:text-primary-light italic bg-background-dark text-primary-dark px-5 py-2">
          <h1>"Hi, I'm Javier. Welcome to my site!"</h1>
        </div>
        <div className="flex flex-col gap-12">
          {aboutParas.map((para, idx) => (
            <AboutSection key={idx} title={para.title} body={para.body} />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
