import React from 'react';

const RouteInfoTable = () => {
  const routes = [
    { 
      sno: 1, bus: 'HR 020202XX', routeName: 'Route 18', driver: 'Nirmal Kumar', 
      helper: 'Rajesh Kumar', startTime: '08:00 AM', endTime: '09:00 AM', 
      workingDays: 'Mon, Tue, Wed, Thu, Fri, Sat', noOfStudents: 45, noOfTeachers: 15, 
      noOfStoppages: 5 
    },
    // Add more rows as needed
  ];

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">S.No.</th>
              <th className="px-4 py-2 text-left">Bus</th>
              <th className="px-4 py-2 text-left">Route Name</th>
              <th className="px-4 py-2 text-left">Driver</th>
              <th className="px-4 py-2 text-left">Start Time</th>
              <th className="px-4 py-2 text-left">Working Days</th>
              <th className="px-4 py-2 text-left">No. of Students</th>
              <th className="px-4 py-2 text-left">No. of Stoppages</th>
              <th className="px-4 py-2 text-left">Route Info</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">{route.sno}</td>
                <td className="px-4 py-2">{route.bus}</td>
                <td className="px-4 py-2">
                  <div>{route.routeName}</div>
                  <div className="text-blue-500">Pickup</div>
                </td>
                <td className="px-4 py-2">
                  <div>{route.driver}</div>
                  <div className="text-blue-500">{route.helper}</div>
                </td>
                <td className="px-4 py-2">
                  <div>{route.startTime}</div>
                  <div className="text-blue-500">{route.endTime}</div>
                </td>
                <td className="px-4 py-2">{route.workingDays}</td>
                <td className="px-4 py-2">
                  <div>{route.noOfStudents}</div>
                  <div className="text-blue-500">{route.noOfTeachers}</div>
                </td>
                <td className="px-4 py-2">{route.noOfStoppages}</td>
                <td className="px-4 py-2 text-blue-500">
                  <button className="hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteInfoTable;