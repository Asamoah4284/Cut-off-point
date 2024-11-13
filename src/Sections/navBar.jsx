import { useState } from "react";
import "../CSS/NavBar.css"; // Import custom styles
import Button from "../components/Button";
function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((prevState) => !prevState);
  }

  return (
    <nav className="relative flex items-center justify-between  px-8 py-4">
      <div className="secondary-header z-20 font-bold">LOGO</div>

      {/* Toggle Menu Icon */}
      {!isNavOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#263ADE"
          className="w-6 h-6 cursor-pointer text-white md:hidden z-20"
          onClick={toggleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#263ADE"
          className="w-6 h-6 cursor-pointer text-white md:hidden z-50"
          onClick={toggleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 h-screen w-full bg-white flex flex-col justify-center md:justify-end items-center space-y-6 transform transition-all duration-500 ease-in-out ${
          isNavOpen ? "fade-in" : "fade-out"
        } md:flex-row mr-0 md:items-center md:space-x-6 md:static md:opacity-100 md:transition-none md:space-y-0 md:h-full`}
      >
        <li className="text-lg ">
          <a href="#previous-checks">Previous Checks</a>
        </li>
        <li className=" text-lg">
          <a href="">About</a>
        </li>
        <Button>Login</Button>
      </ul>
    </nav>
  );
}

export default NavBar;
