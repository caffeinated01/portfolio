import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
