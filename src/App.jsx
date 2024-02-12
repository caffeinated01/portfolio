import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import About from "./About";

function App() {
  return <>
    <div className="bg-[#131213] max-w-screen min-h-screen select-none text-[#ececed]">
      <Header/>
      <Routes>
        <Route path="/" element={
          <div className="mx-5 flex flex-col justify-center items-center h-[90vh] text-center">
            <h1 className="font-bodoniModa text-5xl"><span className="italic">J</span>AVIER</h1>
            <h1 className="font-bodoniModa text-5xl">ASPIRING FRONTEND</h1>
            <h1 className="font-pixelify text-5xl">DEVELOPER <span className="font-bodoniModa">&</span></h1>
            <h1 className="font-cookie text-5xl">STUDENT <span className="pl-3 font-bodoniModa">IN</span></h1>
            <h1 className="font-bodoniModa text-5xl">SINGAPORE</h1>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>;
}

export default App;
