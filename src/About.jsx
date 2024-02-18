import AboutP from "./Components/AboutP";
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
  FaDiscord,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiGnubash,
  SiVisualstudiocode,
} from "react-icons/si";

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
      name: "Visual Studio Code",
      icon: <SiVisualstudiocode />,
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
      name: "Raspberry Pi",
      icon: <FaRaspberryPi />,
    },
  ];

  const aboutParas = [
    {
      title: "A short intro",
      body: "Hi, I'm Javier, an aspiring front-end developer and a student at Xinmin Secondary School. I've always been interested in how to create software and websites and decided to learn to when I was 14. Since then, I treated it as a hobby, creating small yet fun projects over the years.",
    },
    {
      title: "Academics",
      body: "I am dedicated to achieving my goals with hard work and determination, approaching each day with a drive to push myself to the limit. My commitment towards achieving my goals fuels my passion and propels me towards greatness, and I don't let mere setbacks stop me from doing so.",
    },
    {
      title: "Personality",
      body: "I bring a vibrant energy and a contagious optimism to every interaction. With a genuine and open heart, I can connecting with others, spreading positivity. Whether it's sparking conversations or rallying my team towards a common goal, I approach each opportunity with enthusiasm and a can-do attitude. I am also able to connect with others on a personal level. I actively listen to people's problems and offer support. ",
    },
    {
      title: "Leadership",
      body: "As the HOD of Xinmin's Media Club Video Department, I have been instrumental in driving creativity and excellence, leading teams in producing videos for national competitions. By embracing innovation and creativity, I've contributed to the department's ability to create quality productions.",
    },
    {
      title: "Technologies",
      body: (
        <div className="flex flex-wrap gap-5">
          {technologies.map((technology, idx) => (
            // TODO: Clean up styling over here
            // TODO: Add reveal animations with framer motion
            <Reveal
              component={
                <div id={idx} className="flex flex-row gap-2">
                  <h1>{technology.name}</h1>
                  <div className="dark:text-secondary-dark text-secondary-light">
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
      {/* TODO: Add "skills" section */}
      <div className="p-5 py-12 flex flex-col justify-center items-center gap-12 min-h-[90vh]">
        {aboutParas.map((para, idx) => (
          <AboutP key={idx} title={para.title} body={para.body} />
        ))}
      </div>
    </>
  );
}

export default About;
