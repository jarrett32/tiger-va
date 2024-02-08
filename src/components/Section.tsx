import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  animationVariant?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideRight"
    | "slideLeft"
    | "scaleUp";
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  animationVariant = "fadeIn",
}) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    },
    slideUp: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    },
    slideDown: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    },
    slideRight: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    },
    slideLeft: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    },
    scaleUp: {
      hidden: { scale: 0.95, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
    },
  };

  // Choose the correct variant based on the animationVariant prop
  const selectedVariant = variants[animationVariant] || variants.fadeIn;

  return (
    <AnimatePresence>
      <motion.div
        className={`px-4 py-8 md:px-8 lg:px-16 ${className}`}
        variants={selectedVariant}
        initial="hidden"
        whileInView="visible"
        exit="hidden" // Define exit animations in your variants if needed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Section;
