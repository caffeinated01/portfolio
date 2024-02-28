import About from "./About";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <>
      <div>
        <div className="w-full dark:bg-background-dark bg-background-light dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background-dark bg-background-light md:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>

          <div className="mx-5 flex flex-col justify-center items-center h-[100vh] text-center ">
            <h1 className="font-inter text-5xl font-semibold">JAVIER</h1>
            <h1 className="font-bodoniModa text-5xl font-semibold">
              ASPIRING FRONT-END
            </h1>
            <h1 className="font-pixelify md:text-6xl text-5xl">
              DEVELOPER{" "}
              <span className="font-bodoniModa font-semibold text-5xl">&</span>
            </h1>
            <h1 className="font-cookie md:text-6xl text-5xl">
              STUDENT{" "}
              <span className="pl-3 font-bodoniModa font-semibold text-5xl">
                IN
              </span>
            </h1>
            <h1 className="font-mplus text-5xl font-semibold">SINGAPORE</h1>
            <div className="py-6">
              <BsMouse size={30} className="animate-bounce" />
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Home;
