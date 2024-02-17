import AboutP from "./Components/AboutP";

function About() {
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
  ];

  return (
    <>
      <div className="p-5 flex flex-col justify-center items-center gap-5 min-h-[90vh]">
        {aboutParas.map((para, idx) => (
          <AboutP key={idx} title={para.title} body={para.body} />
        ))}
      </div>
    </>
  );
}

export default About;
