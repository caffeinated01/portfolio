import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import Transition from "./Components/Transition";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

  const location = useLocation();
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <div className="dark:bg-background-dark bg-background-light max-w-screen min-h-screen select-none font-inter dark:text-primary-dark text-primary-light">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Transition component={<Home />} />} />
              <Route
                path="/about"
                element={<Transition component={<About />} />}
              />
              <Route
                path="/projects"
                element={<Transition component={<Projects />} />}
              />
              <Route
                path="/achievements"
                element={<Transition component={<Achievements />} />}
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
