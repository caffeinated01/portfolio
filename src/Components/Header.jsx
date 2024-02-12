import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {

  function toggleMode(){
    props.setDarkMode(!props.darkMode)
  }

  return (
    <header className="sticky top-0 z-[10] mx-auto flex w-full flex-wrap font-inter text-sm items-center justify-between px-6 py-2 backdrop-blur-md">
      <button onClick={toggleMode}>
        {props.darkMode? "DARKMODE [✓]" : "DARKMODE [✗]"}
      </button>
      <Nav />
    </header>
  );
}

export default Header;
