import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="root-layout max-w-[1200px] mx-auto my-0">
      <header className="">
        <nav className=" flex justify-between gap-4">
          <h1 className="text-3xl font-bold text-[#bc4123]">
            <Link to="/">Bahkho</Link>
          </h1>
          <div className="hidden md:flex">
            <NavLink to="/" className="p-1.5 rounded">
              Home
            </NavLink>
            <NavLink to="about" className="p-1.5 rounded">
              About
            </NavLink>
            <NavLink to="help" className="p-1.5 rounded">
              Help
            </NavLink>
            <NavLink to="careers" className="p-1.5 rounded">
              Careers
            </NavLink>
          </div>
          <div onClick={handleMenu} className="md:hidden">
            {isMenuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </nav>
        <Breadcrumbs />
      </header>
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#2b3452] ease-in-out duration-500 "
            : "hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#bc4123] m-8">Bahkho</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Help</li>
          <li className="p-4">Careers</li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
