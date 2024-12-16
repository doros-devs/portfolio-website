

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-lg">
      <h1 className="text-2xl font-bold">Terence Ouma</h1>
      <div className="space-x-6">
        <a href="#services" className="text-gray-800 hover:text-red-500">
          Services
        </a>
        <a href="#works" className="text-gray-800 hover:text-red-500">
          Works
        </a>
        <a href="#notes" className="text-gray-800 hover:text-red-500">
          Notes
        </a>
        <a href="#experience" className="text-gray-800 hover:text-red-500">
          Experience
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
