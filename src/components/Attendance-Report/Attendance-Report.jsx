import React from 'react';

const AttendanceTable = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-4 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Calendar"
            className="px-4 py-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="From"
            className="px-4 py-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="To"
            className="px-4 py-2 border rounded-md w-full"
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="All Vehicles"
            className="px-4 py-2 border rounded-md w-full"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex-shrink-0 flex justify-center items-center w-full md:w-auto mt-2 md:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.607 0 7.5 7.5 0 0010.607 0z"
              />
            </svg>
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center w-full md:w-auto mt-2 md:mt-0">
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5v-12m0 12l-3.75-3.75m3.75 3.75L15.75 12.75m-3.75 3.75h9m-9 0h-9"
            />
          </svg>
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md hidden sm:table">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Student Name</th>
              <th className="px-4 py-2 text-left">Parent's Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">17/02/2024</td>
                <td className="px-4 py-2">Darwin Pal</td>
                <td className="px-4 py-2">Rajesh Pal</td>
                <td className="px-4 py-2">8th B</td>
                <td className="px-4 py-2 text-green-400">Present</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="block sm:hidden">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bg-white rounded-md shadow-md mb-4 p-4 border border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="font-bold">Date:</span>
                <span>17/02/2024</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Student Name:</span>
                <span>Darwin Pal</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Parent's Name:</span>
                <span>Rajesh Pal</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Class:</span>
                <span>8th B</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Attendance:</span>
                <span className="text-green-400">Present</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
