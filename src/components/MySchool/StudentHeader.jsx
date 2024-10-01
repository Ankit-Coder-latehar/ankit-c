import React from 'react';

const StudentHeader = () => {
  return (
    <div className="flex flex-col space-y-4 mt-[-6]">
      <div className="flex justify-between items-center">
        {/* Student Stats Section */}
        <div className="relative bg-blue-100 rounded-lg p-6 shadow-lg w-2/4 flex items-center mt-5">
          {/* Main Stats Content */}
          <div className="flex items-center space-x-6">
            {/* Total Students */}
            <div className="text-start">
              <div className="text-sm text-gray-500">Total Students</div>
              <div className="text-5xl font-bold text-blue-900">50</div>
            </div>

            {/* Attendance Stats */}
            <div className="flex space-x-4">
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center">
                <span className="font-semibold text-green-600">
                  Present
                </span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center">
                <span className="font-semibold text-red-600">
                  Absent
                </span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center">
                <span className="font-semibold text-yellow-600">
                  On Leave
                </span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* "Add Students" Button */}
        <div className="ml-4 mt-[-60px]">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            + Add Students
          </button>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search students..."
          className="border border-gray-300 rounded-full p-2 w-90 md:w-1/4"
        />
      </div>
    </div>
  );
};

export default StudentHeader;