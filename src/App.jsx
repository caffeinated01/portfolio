import Header from "./Components/ui/Header";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import Transition from "./Components/ui/Transition";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Post from "./Components/blog/Post";
import Blog from "./views/Blog";
import Footer from "./Components/ui/Footer";

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
        <div className="dark:bg-background-dark bg-background-light select-none max-w-screen min-h-screen font-mplus dark:text-primary-dark text-primary-light">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Transition component={<Home />} />} />
              <Route
                path="blog"
                element={<Transition component={<Blog />} />}
              />
              <Route
                path="blog/:postName"
                element={<Transition component={<Post />} />}
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
