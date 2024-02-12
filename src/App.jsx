import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import About from "./About";

function App() {
  return <>
    <div className="bg-[#131213] max-w-screen min-h-screen select-none text-[#ececed]">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Home</h1>
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>;
}

export default App;
