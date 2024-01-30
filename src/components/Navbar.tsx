import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-start bg-transparent px-6 py-4 md:justify-between">
      <div className="flex items-center">
        {/* Logo Placeholder */}
        {/* <img src="/logo.png" alt="Logo" className="mr-6 h-8" /> */}

        {/* Desktop Menu */}
        <div className="hidden space-x-8 md:flex">
          <MenuHeader text="Use Cases" />
          <MenuHeader text="Solutions" />
          <MenuHeader text="Pricing" />
        </div>
      </div>

      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </Menu.Button>
          {isMenuOpen && (
            <Menu.Items className="absolute left-0 mt-2 w-60 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col space-y-4 px-4 py-2 text-center">
                <MenuHeader text="Use Cases" />
                <MenuHeader text="Solutions" />
                <MenuHeader text="Pricing" />
                <Button
                  text="Get Started"
                  link="get-started"
                  className="w-full bg-blue-200 text-black"
                />
              </div>
            </Menu.Items>
          )}
        </Menu>
      </div>

      <Button
        text="Get Started"
        link="get-started"
        className="hidden md:inline-block"
      />
    </nav>
  );
};

interface MenuHeaderProps {
  text: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ text }) => {
  return (
    <a
      href="#"
      className="w-full text-black transition duration-300 ease-in-out hover:text-gray-300 md:w-[100px] md:text-white"
    >
      {text}
    </a>
  );
};

export default Navbar;
