import Reveal from "./Reveal";

function AboutSection(props) {
  return (
    <h1 className="text-3xl flex flex-col max-w-[1100px] px-5">
      <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
        {props.title.toUpperCase()};{" "}
      </span>
      <Reveal component={props.body} />
    </h1>
  );
}

export default AboutSection;
