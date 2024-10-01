import React from "react";

const HelperTable = () => {
  const parents = [
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      phone: "555 666 7777",
      address: "A 102 Green Park Delhi, Delhi",
    },
   
    // Add more parent objects as needed
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total Helpers: {parents.length}</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            + Add Helper
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
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent, index) => (
              <tr key={parent.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{parent.name}</td>
                <td className="p-3 text-blue-500">{parent.phone}</td>
                <td className="p-3">{parent.address}</td>
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

export default HelperTable;