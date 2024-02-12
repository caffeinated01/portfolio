import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="flex justify-end">
        <div className="hidden w-full justify-between gap-4 md:flex">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/achievements">ACHIEVEMENTS</Link>
        </div>
        <div className="md:hidden">
          <button className="text-2xl" onClick={toggleNavbar}>{isOpen ? <IoClose /> : <IoMenu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <Link to="/" onClick={toggleNavbar} className="border-b w-full">
            HOME
          </Link>
          <Link to="/about" onClick={toggleNavbar} className="border-b w-full">
            ABOUT
          </Link>
          <Link to="/projects" onClick={toggleNavbar} className="border-b w-full">PROJECTS</Link>
          <Link to="/achievements" onClick={toggleNavbar} className="border-b w-full">ACHIEVEMENTS</Link>
        </div>
      )}
    </>
  );
}
export default Nav;
