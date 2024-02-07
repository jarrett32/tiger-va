import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-start bg-white px-6 py-4 md:justify-between">
      <div className="items-center">
        {/* Logo Placeholder */}
        {/* <img src="/logo.png" alt="Logo" className="mr-6 h-8" /> */}

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-4 md:flex">
          <h1 className="mr-4 text-2xl font-bold text-primary">Tiger VA</h1>
          <MenuHeader text="Use Cases" />
          <MenuHeader text="Solutions" />
          <MenuHeader text="Pricing" />
        </div>
      </div>

      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bars3Icon className="h-6 w-6 text-foreground" />
          </Menu.Button>
          {isMenuOpen && (
            <Menu.Items className="absolute left-0 mt-2 w-60 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col space-y-4 px-4 py-2 text-center">
                <MenuHeader text="Use Cases" />
                <MenuHeader text="Solutions" />
                <MenuHeader text="Pricing" />
                <Button className="w-full" variant={"accent"}>
                  Get Started
                </Button>
              </div>
            </Menu.Items>
          )}
        </Menu>
      </div>

      <Button variant={"accent"} className="hidden md:inline-block">
        Get Started
      </Button>
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
      className="w-full font-bold text-primary transition duration-300 ease-in-out hover:text-primary/40 md:w-[100px]"
    >
      {text}
    </a>
  );
};

export default Navbar;
