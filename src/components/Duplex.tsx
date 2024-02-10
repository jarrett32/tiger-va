import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Section from "./Section";

const Duplex = () => {
  const controlsRight = useAnimation();
  const controlsLeft = useAnimation();
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    slideRight: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    },
    slideLeft: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    },
  };

  React.useEffect(() => {
    if (inViewRight) {
      controlsRight
        .start("visible")
        .catch((error) => console.error("Animation failed", error));
    }
    if (inViewLeft) {
      controlsLeft
        .start("visible")
        .catch((error) => console.error("Animation failed", error));
    }
  }, [controlsRight, controlsLeft, inViewRight, inViewLeft]);

  return (
    <Section>
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <motion.div
          ref={refRight}
          variants={variants.slideRight}
          initial="hidden"
          animate={controlsRight}
          className="w-full md:w-1/2"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Innovative Design
          </h2>
          <p className="text-secondary-foreground">
            Discover the seamless integration of aesthetics and functionality
            with our cutting-edge design approach.
          </p>
        </motion.div>

        <motion.div
          ref={refLeft}
          variants={variants.slideLeft}
          initial="hidden"
          animate={controlsLeft}
          className="w-full md:w-1/2"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Unmatched Performance
          </h2>
          <p className="text-secondary-foreground">
            Experience unparalleled efficiency and speed with our advanced
            technology solutions.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Duplex;
