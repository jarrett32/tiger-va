import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
          {/* Logo or Title */}
          {/* <div>
            <h2 className="text-lg font-semibold">Tiger VA</h2>
          </div> */}
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          <div></div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Tiger VA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
