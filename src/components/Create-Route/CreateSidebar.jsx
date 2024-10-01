import React, { useState } from 'react';

const CreateSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button for Small Screens */}
      <button 
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow flex flex-col w-64 px-4 py-8 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:flex sm:w-64 sm:h-screen`}
      >
        {/* Sidebar Menu */}
        <div className="flex flex-col space-y-6 text-gray-600 text-sm">
          <a
            href="/my-route"
            className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-user-graduate"></i>
            <span>My Route</span>
          </a>
          <a
            href="/create-route"
            className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-user-graduate"></i>
            <span>Create Route</span>
          </a>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default CreateSidebar;