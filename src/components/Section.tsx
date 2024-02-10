import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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

  React.useEffect(() => {
    if (inView) {
      controls
        .start("visible")
        .catch((error) => console.error("Animation failed", error));
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`px-4 py-8 md:px-8 lg:px-16 ${className}`}
      variants={variants[animationVariant] || variants.fadeIn}
      initial="hidden"
      animate={controls}
      // Removed exit="visible" as it's not needed for this use case
    >
      {children}
    </motion.div>
  );
};

export default Section;
