import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "./Footer";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="root-layout">
      <header className="max-w-[1240px] mx-auto mt-5 px-5 h-24">
        <nav className=" flex justify-between gap-4">
          <h1 className="text-3xl font-bold text-[#bc4123]">
            <Link to="/">Bahkho</Link>
          </h1>
          <div className="hidden md:flex gap-6">
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
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </nav>
        <Breadcrumbs />
        <div
          className={
            isMenuOpen
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2b3452] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#bc4123] m-8">
            <Link to="/" onClick={handleMenu}>
              Bahkho
            </Link>
          </h1>
          <div className="p-4 flex flex-col uppercase">
            <NavLink
              to="/"
              className="p-4 border-b border-gray-600"
              onClick={handleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="p-4 border-b border-gray-600"
              onClick={handleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="help"
              className="p-4 border-b border-gray-600"
              onClick={handleMenu}
            >
              Help
            </NavLink>
            <NavLink to="careers" className="p-4" onClick={handleMenu}>
              Careers
            </NavLink>
          </div>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto px-5">
        <Outlet />
      </main>
      <footer className="bg-[#00000033]">
        <Footer />
      </footer>
    </div>
  );
};
export default RootLayout;
