import React from "react";
import { FaSearch, FaList, FaDownload, FaFilter, FaBell } from "react-icons/fa";

const VehicleHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 w-full max-w-xl">
        <div className="flex items-center w-80 bg-gray-100 border border-gray-300 rounded-md">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search by Vehicle No."
            className="bg-transparent p-2 w-full outline-none"
          />
        </div>
      </div>

      {/* Options */}
      <div className="flex items-center space-x-2 mr-20">
        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">Sort By:</span>
          <select className="border border-gray-300 bg-gray-100 rounded-md py-2 px-4 outline-none hover:bg-gray-200">
            <option value="default">Default</option>
            <option value="place">Place</option>
          </select>
        </div>

        {/* Search by Place */}
        <button className="flex items-center w-56  px-2 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
          <FaSearch className="text-gray-500" />
          <span>Search by Place</span>
        </button>

        {/* List View */}
        <button className="flex items-center w-40 space-x-2 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
          <FaList className="text-gray-500" />
          <span>List View</span>
        </button>

        {/* Download */}
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
          <FaDownload className="text-gray-500" />
          <span>Download</span>
        </button>

        {/* Filters */}
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
          <FaFilter className="text-gray-500" />
          <span>Filters</span>
        </button>

        {/* GPS Alerts */}
        <div className="relative">
          <button className="relative w-40 flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaBell />
            <span>GPS Alerts</span>
            <span className="absolute top-0 right-0 -mt-2 -mr-2 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleHeader;