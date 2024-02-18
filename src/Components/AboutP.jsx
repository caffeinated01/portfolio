function AboutP(props) {
  return (
    <h1 className="text-3xl flex flex-col max-w-[1300px]">
      <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
        {props.title.toUpperCase()};{" "}
      </span>
      {props.body}
    </h1>
  );
}

export default AboutP;
