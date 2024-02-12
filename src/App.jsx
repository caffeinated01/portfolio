import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";

function App() {
  return (
    <>
      <div className="bg-[#131213] max-w-screen min-h-screen select-none text-[#ececed]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
