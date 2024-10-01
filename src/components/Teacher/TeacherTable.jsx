import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TeacherHeader from './TeacherHeader';

const TeacherTable = () => {
  const teachers = [
    {
      id: '20EE093',
      name: 'Jyoti Maam',
      aadharno: '555 555 5555',
      phone: '9999999988',
      address: 'D 53 Raj Garden Building 23 Gurgaon, Haryana',
    },
    {
      id: '20EE093',
      name: 'Jyoti Maam',
      aadharno: '555 555 5555',
      phone: '9999999988',
      address: 'D 53 Raj Garden Building 23 Gurgaon, Haryana',
    },
    // Add more teachers here
  ];

  return (
    <>
      <TeacherHeader />
      <div className="mt-6 px-4">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left whitespace-nowrap">Teacher ID</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">Name</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">Aadhar No.</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">Phone No.</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">Address</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {teachers.map((teacher, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4 text-sm sm:text-base">{teacher.id}</td>
                  <td className="px-6 py-4 text-sm sm:text-base">{teacher.name}</td>
                  <td className="px-6 py-4 text-sm sm:text-base">{teacher.aadharno}</td>
                  <td className="px-6 py-4 text-sm sm:text-base">{teacher.phone}</td>
                  <td className="px-6 py-4 text-sm sm:text-base">{teacher.address}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeacherTable;
