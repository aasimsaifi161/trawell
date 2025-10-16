import { IoPlanetOutline } from "react-icons/io5";
import SearchBox from "../Helper/SearchBox";
import { FaSearchLocation } from "react-icons/fa";

function Navbar() {

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-1 border-b-gray-300 px-6 md:px-14 py-3 backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-sky-500  rounded-full flex items-center justify-center flex-col">
          <IoPlanetOutline className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl tracking-widest md:text-xl bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent uppercase font-bold">
          Trawell
        </h1>
      </div>

      {/* Search Box */}
        <SearchBox />

      <div className="flex items-center justify-center space-x-12 text-[14px]">
          <div className="hidden md:flex gap-2 items-center cursor-pointer justify-center">
            <FaSearchLocation className="w-4 h-4 text-blue-700" />
            <a href="https://maps.google.com/" target="_blank" className="font-semibold tracking-wider">Map</a>
          </div>
          <div className="bg-sky-900 h-9 w-20 tracking-widest flex justify-center items-center rounded-full text-white cursor-pointer">Login</div>
      </div>
    </nav>
  );
}

export default Navbar;
