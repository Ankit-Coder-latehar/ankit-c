import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const BannerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 bg-blue-600 text-white rounded-md fixed top-4 left-4 z-50"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white shadow flex flex-col w-64 h-screen px-4 py-8 fixed top-0 left-0 z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:flex md:flex-col md:space-y-6 md:text-gray-600 md:text-sm`}
      >
        <div className="flex flex-col space-y-6 text-gray-600 text-sm">
          <a
            href="/attendance-report"
            className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-user-graduate"></i>
            <span>My Banner</span>
          </a>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default BannerSidebar;
