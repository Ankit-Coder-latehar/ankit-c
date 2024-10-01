import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BusNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white shadow-md flex justify-between items-center px-4 md:px-8 py-3 w-full relative z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="font-bold text-lg text-blue-600">QikTrack</span>
      </div>

      {/* Desktop Navigation Links - Hidden on Small Screens */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-600 text-sm items-center mr-80">
        <a href="/school" className="hover:text-blue-600  pb-1 ">
          My School
        </a>
        <a href="/dashboard" className="hover:text-blue-600 mr-80">
          Dashboard
        </a>
        <a href="/bus" className="text-blue-600 border-b-2 border-blue-600">
          Buses
        </a>
        <a href="/route" className="hover:text-blue-600">
          Routes
        </a>
        <a href="/report" className="hover:text-blue-600">
          Reports
        </a>
        <a href="/banner" className="hover:text-blue-600">
          Banner
        </a>
        <a href="/bills" className="hover:text-blue-600">
          Bills
        </a>
      </div>

      {/* Profile Section - Hidden on Small Screens */}
      <div className="hidden md:flex items-center space-x-2 text-gray-600">
        <img
          src="https://via.placeholder.com/30"
          alt="User Profile"
          className="h-8 w-8 rounded-full border-2 border-gray-300"
        />
        <span>School Name</span>
        <i className="fas fa-chevron-down"></i>
      </div>

      {/* Mobile Menu Toggle Button - Absolute on Small Screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-600 absolute top-3 right-4 z-50 focus:outline-none"
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
      </button>

      {/* Background Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 max-w-xs h-full bg-white shadow-md p-6 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-4 mt-12">
          <a href="/school" className="text-blue-600">
            My School
          </a>
          <a href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </a>
          <a href="/bus" className="hover:text-blue-600">
            Buses
          </a>
          <a href="/route" className="hover:text-blue-600">
            Routes
          </a>
          <a href="/report" className="hover:text-blue-600">
            Reports
          </a>
          <a href="/banner" className="hover:text-blue-600">
            Banner
          </a>
          <a href="/bills" className="hover:text-blue-600">
            Bills
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BusNavbar;