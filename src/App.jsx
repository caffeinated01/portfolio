import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

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
        <div className="dark:bg-background light:bg-primary max-w-screen min-h-screen select-none dark:text-primary light:text-background">
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
