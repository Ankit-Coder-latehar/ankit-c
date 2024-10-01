import React, { useState } from 'react';

const TeacherSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Sidebar Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-blue-600 text-white rounded-full"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-md px-4 py-8 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 md:block`}
      >
        <div className="flex flex-col space-y-6 text-gray-600 text-sm overflow-x-hidden">
          <a href="/student" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-user-graduate"></i>
            <span>Students</span>
          </a>
          <a href="/class" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Classes</span>
          </a>
          <a href="/teacher" className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-user-tie"></i>
            <span>Teachers</span>
          </a>
          <a href="/parents" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-user-friends"></i>
            <span>Parents</span>
          </a>
          <a href="/driver" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-bus"></i>
            <span>Driver</span>
          </a>
          <a href="/helper" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-handshake"></i>
            <span>Helper</span>
          </a>
          <a href="/" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-calendar-alt"></i>
            <span>Holiday</span>
          </a>
          <a href="/announcement" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-bullhorn"></i>
            <span>Announcement</span>
          </a>
          <a href="/remainder" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-bell"></i>
            <span>Reminder</span>
          </a>
          <a href="/notice" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
            <i className="fas fa-exclamation-circle"></i>
            <span>Notice</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;