import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <nav className="flex justify-end">
        <div className="hidden w-full justify-between gap-4 md:flex">
          {props.links.map((link, idx) => (
            <Link
              key={idx}
              to={link.endpoint}
              className="hover:-translate-y-1 duration-150"
            >
              {link.display}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-2xl pt-1" onClick={props.toggleNavbar}>
            {props.isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
export default Nav;
