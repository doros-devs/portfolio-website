const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-transparent fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        <img
          src="/src/images/TERENCE-LOGO.png"
          alt="Terence Ouma Logo"
          className="h-12 w-auto"
        />
        <div className="space-x-6">
          <a href="#hero" className="text-gray-800 hover:text-[#E2FF7D]">
            Home
          </a>
          <a href="#skills" className="text-gray-800 hover:text-[#E2FF7D]">
            Skills
          </a>
          <a href="#projects" className="text-gray-800 hover:text-[#E2FF7D]">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
