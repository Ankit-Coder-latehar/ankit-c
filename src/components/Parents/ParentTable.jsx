import React from "react";

const ParentsTable = () => {
  const parents = [
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    {
      id: 1,
      name: "Akhilesh Pal",
      phone: "555 555 5555",
      password: "**********",
      children: ["Dravin Pal", "Rajesh Pal"],
      address: "D 53 Raj Garden Building 23 Gurgaon, Haryana",
    },
    // Additional parents can be added here
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 md:mb-0">Total Parents: 50</h2>
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-56 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full md:w-auto transition-colors duration-300">
            + Add Parents
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-800 text-white text-sm md:text-base">
              <th className="p-3 text-left font-semibold">Sno.</th>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Phone No.</th>
              <th className="p-3 text-left font-semibold">Password</th>
              <th className="p-3 text-left font-semibold">Children</th>
              <th className="p-3 text-left font-semibold">Address</th>
              <th className="p-3 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent, index) => (
              <tr key={parent.id} className="border-b hover:bg-gray-100 transition-colors duration-300">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{parent.name}</td>
                <td className="p-3 text-blue-500">{parent.phone}</td>
                <td className="p-3">{parent.password}</td>
                <td className="p-3 text-blue-500">
                  {parent.children.map((child, idx) => (
                    <span key={idx}>
                      {child}
                      {idx < parent.children.length - 1 && ", "}
                    </span>
                  ))}
                </td>
                <td className="p-3">{parent.address}</td>
                <td className="p-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fas fa-user"></i>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center justify-center transition-colors duration-300">
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

export default ParentsTable;
