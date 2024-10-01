import React from 'react';

const TeacherHeader = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        {/* Teacher Stats Section */}
        <div className="relative bg-blue-100 rounded-lg p-6 shadow-lg w-2/4 flex items-center mt-5">
          {/* Main Stats Content */}
          <div className="flex items-center space-x-6">
            {/* Total Teachers */}
            <div className="text-start">
              <div className="text-sm text-gray-500 mt-[-20px]">Total Teachers</div>
              <div className="text-5xl font-bold text-blue-900">50</div>
            </div>

            {/* Attendance Stats */}
            <div className="flex space-x-4">
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center mt-2">
                <span className="font-semibold text-green-600">Present</span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center mt-2">
                <span className="font-semibold text-red-600">Absent</span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center w-28 h-16 flex flex-col justify-center mt-2">
                <span className="font-semibold text-yellow-600">On Leave</span>
                <span className="text-blue-600 text-lg">12</span>
              </div>
            </div>
          </div>

          {/* View Attendance Link */}
          <div className="absolute top-2 right-4">
            <span className="text-blue-500 font-semibold cursor-pointer">
              View Attendance
            </span>
          </div>
        </div>

        {/* "Add Teacher" Button */}
        <div className="ml-4 mt-[-60px]">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            + Add Teacher
          </button>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search teachers..."
          className="border border-gray-300 rounded-full p-2 w-full md:w-1/4"
        />
      </div>
    </div>
  );
};

export default TeacherHeader;