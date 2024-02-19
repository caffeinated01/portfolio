import Reveal from "./Reveal";

function AboutSection(props) {
  return (
    <h1 className="md:text-2xl sm:text-xl  flex flex-col max-w-[1100px] px-5">
      <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
        {props.title.toUpperCase()};{" "}
      </span>
      <Reveal component={props.body} />
    </h1>
  );
}

export default AboutSection;
