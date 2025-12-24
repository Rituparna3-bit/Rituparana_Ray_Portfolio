export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50">
      {/* Full-width container */}
      <div className="w-full flex justify-between items-center h-16 px-4 md:px-8">

        <h1 className="text-white text-xl font-bold">
          Ritu<span className="text-pink-400">⚡</span>
        </h1>

        <ul className="flex gap-6 text-white">
          <li>
            <a href="#home" className="hover:text-pink-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-400">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-pink-400">Skills</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-pink-400">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </li>
        </ul>

      </div>
    </div>
  );
}
