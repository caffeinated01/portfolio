import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animator = useAnimation();
  const delay = props.delay ? props.delay : 0.25;

  useEffect(() => {
    if (isInView) {
      animator.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animator}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay }}
      >
        {props.component}
      </motion.div>
    </div>
  );
}

export default Reveal;
