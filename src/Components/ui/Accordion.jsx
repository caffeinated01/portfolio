import { useState } from "react";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="last:border-y border-t dark:border-primary-dark border-primary-light"
    >
      <button
        className={`flex justify-between w-full dark:hover:bg-background-light dark:hover:text-primary-light hover:bg-background-dark hover:text-primary-dark px-2 py-1 hover:px-5 transition-all duration-200 ${
          isOpen
            ? "dark:bg-background-light dark:text-primary-light bg-background-dark text-primary-dark px-5"
            : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.items.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </button>
      <div
        className={`grid overflow-hidden ease-in-out transition-all duration-500 text-sm ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-2xl">
          <div className="pt-1 pb-10 px-2">{props.body}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
