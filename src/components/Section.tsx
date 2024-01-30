import React from "react";
import { cn } from "~/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  const finalClassName = cn("py-8 px-4 md:px-8 lg:px-16", className);

  return <section className={finalClassName}>{children}</section>;
};

export default Section;
