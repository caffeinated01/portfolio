import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-5 flex flex-col justify-center items-center h-[90vh] text-center">
        <h1 className="font-bodoniModa text-5xl font-bold">JAVIER</h1>
        <h1 className="font-bodoniModa text-5xl">ASPIRING FRONT-END</h1>
        <h1 className="font-pixelify text-5xl">
          DEVELOPER <span className="font-bodoniModa">&</span>
        </h1>
        <h1 className="font-cookie text-5xl">
          STUDENT <span className="pl-3 font-bodoniModa">IN</span>
        </h1>
        <h1 className="font-bodoniModa text-5xl">SINGAPORE</h1>
      </div>
    </motion.div>
  );
}

export default Home;
