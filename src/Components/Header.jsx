import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  function toggleMode() {
    props.setDarkMode(!props.darkMode);
  }

  const links = [
    { display: "HOME", endpoint: "/" },
    { display: "ABOUT", endpoint: "/about" },
    { display: "SCHOOL", endpoint: "/school" },
    { display: "PROJECTS", endpoint: "/projects" },
    { display: "ACHIEVEMENTS", endpoint: "/achievements" },
  ];

  return (
    <header className="sticky top-0 z-[10] mx-auto flex w-full flex-wrap font-inter text-sm items-center justify-between px-6 py-2 backdrop-blur-md">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} toggleNavbar={toggleNavbar} links={links} />
      <button onClick={toggleMode}>
        {props.darkMode ? "DARKMODE [✓]" : "DARKMODE [✗]"}
      </button>
      {isOpen && (
        <div className="flex flex-col basis-full items-center">
          {links.map((link, idx) => (
            <Link key={idx} to={link.endpoint} onClick={toggleNavbar} className="border-b w-full">
              {link.display}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
