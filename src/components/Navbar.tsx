import Dropdown from "./NavbarDropdown";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center pl-10 pr-10 bg-white shadow-md">
      <div className="flex items-center">
        <img src="navlogo.png" alt="HABOT logo" className="h-16 " />
      </div>
      <nav className="flex items-center flex-row space-x-6 text-gray-600 ">
        <Dropdown />
        <button className="px-10 py-3 border-1 border-green-700 text-green-700 rounded-md hover:bg-green-500 hover:text-white transition-all font-bold">
          Login / Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
