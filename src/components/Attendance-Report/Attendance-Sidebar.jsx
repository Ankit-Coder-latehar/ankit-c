import React, { useState } from 'react';

const AttendanceSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden p-2 bg-blue-600 text-white fixed top-4 left-4 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white shadow flex flex-col w-64 h-screen px-4 py-8 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static`}
      >
        {/* Sidebar Menu */}
        <div className="flex flex-col space-y-6 text-gray-600 text-sm">
          <a
            href="/attendance-report"
            className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-user-graduate"></i>
            <span>Attendance Report</span>
          </a>
          <a
            href="/tripreport"
            className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Trip Report</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AttendanceSidebar;