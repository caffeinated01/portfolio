import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-[10] mx-auto flex w-full flex-wrap font-inter text-sm items-center justify-between px-6 py-2 backdrop-blur-md">
      <Link to="/">
        JAVIER
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
