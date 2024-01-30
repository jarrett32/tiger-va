import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { text, link, className } = props;

  const classes = cn(
    "inline-block rounded px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600 font-bold",
    className,
  );

  return (
    <Link href={link}>
      <div className={classes}>{text}</div>
    </Link>
  );
};

export default Button;
