import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header
      className="header fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 px-4 sm:px-0"
      style={{ fontFamily: "Dosis, sans-serif" }}
    >
      <NavLink
        to="/"
        className="group flex items-center gap-2 sm:gap-4 transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 scale-150"></div>

          {/* Logo container with border */}
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] group-hover:p-[3px] transition-all duration-300">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-75"></div>
        </div>

        <div className="hidden sm:flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            Portfolio
          </span>
        </div>
      </NavLink>
      <nav className="flex text-sm sm:text-xl gap-2 sm:gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `group relative px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 overflow-hidden ${
              isActive
                ? "text-white font-bold"
                : "text-black font-semibold hover:text-blue-600 hover:-translate-y-1"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Gradient background for active state */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
              )}

              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Underline animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10">About</span>

              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></span>
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `group relative px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 overflow-hidden ${
              isActive
                ? "text-white font-bold"
                : "text-black font-semibold hover:text-blue-600 hover:-translate-y-1"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              <span className="relative z-10">Projects</span>
              {isActive && (
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></span>
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `group relative px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 overflow-hidden ${
              isActive
                ? "text-white font-bold"
                : "text-black font-semibold hover:text-blue-600 hover:-translate-y-1"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              <span className="relative z-10">Blog</span>
              {isActive && (
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></span>
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `group relative px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 overflow-hidden ${
              isActive
                ? "text-white font-bold"
                : "text-black font-semibold hover:text-blue-600 hover:-translate-y-1"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              <span className="relative z-10">Contact</span>
              {isActive && (
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></span>
              )}
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

// More files will be added next: tailwind.config.js, components/index.js, index.css updates
