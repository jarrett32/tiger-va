import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { cn } from "~/lib/utils";

interface CardProps {
  title: string;
  subtitle: string;
  Icon?: React.ElementType; // Optional icon prop
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  Icon = UserCircleIcon,
  className,
}) => {
  const finalClassName = cn(
    "bg-white p-4 rounded-lg shadow-md flex items-center space-x-4",
    className,
  );

  return (
    <div className={finalClassName}>
      <div className="w-20">
        {Icon && <Icon className="h-12 w-12 text-gray-500" />}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
