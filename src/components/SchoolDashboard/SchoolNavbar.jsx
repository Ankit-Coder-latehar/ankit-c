import React, { useState } from 'react';

const SchoolNavbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-800 w-10 h-10"></div> {/* Placeholder for logo */}
        <h1 className="text-lg font-semibold">Qiktrack</h1>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none"
          placeholder="Search"
        />
      </div>

      {/* Right Section: Links */}
      <div className="flex items-center space-x-6 text-gray-500">
        <a href="/realtime" className="hover:text-gray-800">Realtime</a>
        <a href="/dashboard" className="text-blue-500 font-medium">Dashboard</a>
        <a href="/dashboard-report" className="hover:text-gray-800">Report</a>
        <a href="/alert" className="hover:text-gray-800">Alerts</a>

        {/* User Profile Section */}
        <div className="relative">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
            {/* Profile Icon */}
           
            
            {/* User Icon and Name */}
            <img
              src="https://via.placeholder.com/30" // Placeholder image URL, replace with actual image
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
            <a href="#" className="hover:text-gray-800">User name</a>
            {/* Dropdown Arrow */}
        
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SchoolNavbar;