import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, UserCircleIcon } from "@heroicons/react/24/solid";
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
    "p-4 rounded-lg shadow-md flex items-center space-x-4",
    className,
  );

  return (
    <div className={finalClassName}>
      <div className="w-20">
        {Icon && <Icon className="h-12 w-12 text-gray-500" />}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

export const DisclosureCard = ({
  title,
  children,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  onToggle: () => void;
}) => {
  return (
    <Disclosure as="div" onChange={onToggle}>
      <div className="space-y-4 rounded-lg border-t-2 border-primary bg-white p-4 shadow-md">
        <Disclosure.Button className="flex w-full flex-row">
          <h3 className="flex-grow text-left text-lg font-semibold">{title}</h3>
          <PlusIcon className="h-6 w-6" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            <div className="space-y-4">{children}</div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
};
