import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import School from "./School";

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <div className="dark:bg-background-dark bg-background-light max-w-screen min-h-screen select-none font-inter dark:text-primary-dark text-primary-light">
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/school" element={<School />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
