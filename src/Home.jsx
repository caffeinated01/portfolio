import About from "./About";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <>
      <div className="mx-5 flex flex-col justify-center items-center h-[100vh] text-center">
        <h1 className="font-bodoniModa text-5xl font-bold">JAVIER</h1>
        <h1 className="font-bodoniModa text-5xl font-semibold">
          ASPIRING FRONT-END
        </h1>
        <h1 className="font-pixelify text-5xl">
          DEVELOPER <span className="font-bodoniModa font-semibold">&</span>
        </h1>
        <h1 className="font-cookie text-5xl">
          STUDENT <span className="pl-3 font-bodoniModa font-semibold">IN</span>
        </h1>
        <h1 className="font-bodoniModa text-5xl font-semibold">SINGAPORE</h1>
        <div className="py-6">
          <BsMouse size={30} className="animate-bounce" />
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
