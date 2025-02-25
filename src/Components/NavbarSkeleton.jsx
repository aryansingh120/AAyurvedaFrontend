import { useState } from "react";

const NavbarSkeleton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 p-4 shadow-md z-50 animate-pulse">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="bg-gray-300 h-8 w-32 rounded-md"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 flex-grow ml-8">
          {/* Search Box */}
          <div className="relative flex-grow">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 h-5 w-5 rounded-md"></div>
            <div className="p-3 pl-12 rounded-full w-full bg-gray-300 h-10"></div>
          </div>

          {/* City Selector */}
          <div className="bg-gray-300 h-10 w-32 rounded-full"></div>

          {/* Login Button */}
          <div className="bg-gray-300 h-10 w-24 rounded-full"></div>

          {/* Cart Icon */}
          <div className="relative bg-gray-300 h-10 w-10 rounded-full"></div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden bg-gray-300 h-8 w-8 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>

      {/* Search Box for Mobile */}
      <div className="md:hidden p-4">
        <div className="relative w-full bg-gray-300 h-10 rounded-full"></div>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-gray-200 shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 animate-pulse`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="bg-gray-300 h-10 w-32 rounded-full"></div>
          <div
            className="bg-gray-300 h-8 w-8 rounded-md"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>

        <nav className="mt-4 space-y-4 p-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="bg-gray-300 h-10 w-full rounded-md"></div>
            ))}
          <div className="bg-gray-300 h-12 w-full rounded-md mt-4"></div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
    </nav>
  );
};

export default NavbarSkeleton;
