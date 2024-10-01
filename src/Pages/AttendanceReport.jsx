import React from 'react'
import ReportNavbar from '../components/Report/ReportNavbar';
import AttendanceSidebar from '../components/Attendance-Report/Attendance-Sidebar';
import AttendanceTable from '../components/Attendance-Report/Attendance-Report';

const AttendanceReport = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top, fixed */}
      <div className="fixed top-0 left-0 w-full z-20">
        <ReportNavbar/>
      </div>

      <div className="flex flex-1 pt-16"> {/* Add padding to offset the navbar height */}
        {/* Sidebar on the left, fixed and scrollable */}
        <div className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-800 text-white z-10">
          <AttendanceSidebar/>
        </div>

        {/* Main content area with scrollbar */}
        <div className="ml-64 flex-1 overflow-y-auto p-6 bg-gray-100 h-[calc(100vh-4rem)]">
          <AttendanceTable/>
        </div>
      </div>
    </div>
  )
}

export default AttendanceReport;