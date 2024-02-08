import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Section from "./Section";

const Duplex = () => {
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
  return (
    <Section>
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <AnimatePresence>
          <motion.div
            variants={variants.slideRight}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
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
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            variants={variants.slideLeft}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
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
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Duplex;
