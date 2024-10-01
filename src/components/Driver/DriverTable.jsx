import React from "react";

const DriverTable = () => {
  const parents = [
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
      route: "Route A",
    },
    {
      id: 2,
      name: "Vijay Kumar",
      phone: "444 444 4444",
      password: "**********",
      children: ["Suresh Kumar", "Mohan Kumar"],
      address: "C 24 Shyam Enclave, New Delhi",
      route: "Route B",
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      phone: "333 333 3333",
      password: "**********",
      children: ["Amit Sharma", "Rohit Sharma"],
      address: "B 78 Green Avenue, Jaipur, Rajasthan",
      route: "Route C",
    },
    {
        id: 3,
        name: "Rajesh Sharma",
        phone: "333 333 3333",
        password: "**********",
        children: ["Amit Sharma", "Rohit Sharma"],
        address: "B 78 Green Avenue, Jaipur, Rajasthan",
        route: "Route C",
      }, 
      {
        id: 3,
        name: "Rajesh Sharma",
        phone: "333 333 3333",
        password: "**********",
        children: ["Amit Sharma", "Rohit Sharma"],
        address: "B 78 Green Avenue, Jaipur, Rajasthan",
        route: "Route C",
      },
      {
        id: 3,
        name: "Rajesh Sharma",
        phone: "333 333 3333",
        password: "**********",
        children: ["Amit Sharma", "Rohit Sharma"],
        address: "B 78 Green Avenue, Jaipur, Rajasthan",
        route: "Route C",
      },
      {
        id: 3,
        name: "Rajesh Sharma",
        phone: "333 333 3333",
        password: "**********",
        children: ["Amit Sharma", "Rohit Sharma"],
        address: "B 78 Green Avenue, Jaipur, Rajasthan",
        route: "Route C",
      },
      {
        id: 3,
        name: "Rajesh Sharma",
        phone: "333 333 3333",
        password: "**********",
        children: ["Amit Sharma", "Rohit Sharma"],
        address: "B 78 Green Avenue, Jaipur, Rajasthan",
        route: "Route C",
      },
    // Add more parent objects as needed with route data
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total Drivers: {parents.length}</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            + Add Driver
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="p-3 text-left">Sno.</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone No.</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">Route</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((driver, index) => (
              <tr key={driver.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{driver.name}</td>
                <td className="p-3 text-blue-500">{driver.phone}</td>
                <td className="p-3">{driver.password}</td>
                <td className="p-3">{driver.route}</td>
                <td className="p-3">{driver.address}</td>
                <td className="p-3 flex space-x-2">
                  <button className="bg-blue-600 text-white p-2 rounded-lg">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="bg-gray-500 text-white p-2 rounded-lg">
                    <i className="fas fa-user"></i>
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded-lg">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverTable;
