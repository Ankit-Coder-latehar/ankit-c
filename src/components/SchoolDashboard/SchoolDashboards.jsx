import React from "react";

const SchoolsDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-2xl font-bold">Welcome, Aatreya Academy 👋</div>
      <div className="mt-4 flex justify-between space-x-4">
        <div className="bg-white p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">Total Students (in School)</div>
          <div className="text-4xl font-bold">50</div>
          <div className="flex justify-between mt-2">
            <div className="text-green-500">Present 12</div>
            <div className="text-red-500">Absent 12</div>
            <div className="text-yellow-500">On Leave 12</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">Total Teachers (in School)</div>
          <div className="text-4xl font-bold">60</div>
          <div className="flex justify-between mt-2">
            <div className="text-green-500">Present 22</div>
            <div className="text-red-500">Absent 22</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">Total Buses (in School)</div>
          <div className="text-4xl font-bold">23</div>
          <div className="flex justify-between mt-2">
            <div className="text-blue-500">Route 28</div>
            <div className="text-blue-500">Trip 14</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between space-x-4">
        <div className="bg-purple-100 p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">All Notices</div>
          <button className="mt-2 bg-black text-white py-1 px-4 rounded">View All</button>
        </div>
        <div className="bg-green-100 p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">All Reminders</div>
          <button className="mt-2 bg-black text-white py-1 px-4 rounded">View All</button>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md shadow-md w-1/3">
          <div className="text-gray-600">All Announcements</div>
          <button className="mt-2 bg-black text-white py-1 px-4 rounded">View All</button>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-500 mr-2">👁️</span>
            <div>11th B Class has no teacher, view the Live CCTV Camera</div>
          </div>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Check it out</button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-500 mr-2">👁️</span>
            <div>11th B Class has no teacher, view the Live CCTV Camera</div>
          </div>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Check it out</button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-500 mr-2">👁️</span>
            <div>11th B Class has no teacher, view the Live CCTV Camera</div>
          </div>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Check it out</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolsDashboard;
