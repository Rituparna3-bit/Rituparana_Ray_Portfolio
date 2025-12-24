import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50">
      {/* Full-width container */}
      <div className="w-full flex justify-between items-center h-16 px-4 md:px-8">

        {/* Logo */}
        <h1 className="text-white text-xl font-bold">
          Ritu<span className="text-pink-400">⚡</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><a href="#home" className="hover:text-pink-400">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-pink-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col gap-4 text-white">
            <li><a onClick={() => setIsOpen(false)} href="#home" className="hover:text-pink-400">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#about" className="hover:text-pink-400">About</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#portfolio" className="hover:text-pink-400">Portfolio</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
