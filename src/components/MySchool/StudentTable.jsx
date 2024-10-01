import React from 'react';
import StudentHeader from './StudentHeader';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StudentTable = () => {
  const students = [
    // Sample data
    {
      id: '20EE093',
      admissionDate: '05/02/2008',
      name: 'Dravin Pal',
      class: '9th-C',
      dob: '14/02/2003',
      aadhar: '555 555 5555',
      parentName: 'Akhilesh Pal',
      phone: '9999999988',
      address: 'D 53 Raj Garden Building 23 Gurgaon, Haryana',
    },
    // Add more students here
    // (Repeated for demonstration purposes)
    {
      id: '20EE093',
      admissionDate: '05/02/2008',
      name: 'Dravin Pal',
      class: '9th-C',
      dob: '14/02/2003',
      aadhar: '555 555 5555',
      parentName: 'Akhilesh Pal',
      phone: '9999999988',
      address: 'D 53 Raj Garden Building 23 Gurgaon, Haryana',
    },
    // Add enough students to exceed the 8-row limit
    {
      id: '20EE094',
      admissionDate: '06/02/2008',
      name: 'Ankit Verma',
      class: '10th-A',
      dob: '16/04/2003',
      aadhar: '666 666 6666',
      parentName: 'Ramesh Verma',
      phone: '8888888888',
      address: '123 Street, City, State',
    },
    {
      id: '20EE095',
      admissionDate: '07/02/2008',
      name: 'Sneha Sharma',
      class: '11th-B',
      dob: '22/08/2003',
      aadhar: '777 777 7777',
      parentName: 'Suresh Sharma',
      phone: '7777777777',
      address: '456 Avenue, City, State',
    },
    {
      id: '20EE096',
      admissionDate: '08/02/2008',
      name: 'Rahul Singh',
      class: '12th-D',
      dob: '01/01/2003',
      aadhar: '888 888 8888',
      parentName: 'Raj Singh',
      phone: '6666666666',
      address: '789 Boulevard, City, State',
    },
    // Additional entries to test scrolling
    {
      id: '20EE097',
      admissionDate: '09/02/2008',
      name: 'Pooja Gupta',
      class: '9th-C',
      dob: '10/12/2003',
      aadhar: '999 999 9999',
      parentName: 'Amit Gupta',
      phone: '5555555555',
      address: '123 Street, City, State',
    },
    {
      id: '20EE098',
      admissionDate: '10/02/2008',
      name: 'Vikas Kumar',
      class: '10th-B',
      dob: '05/07/2003',
      aadhar: '000 000 0000',
      parentName: 'Suresh Kumar',
      phone: '4444444444',
      address: '456 Avenue, City, State',
    },
    {
      id: '20EE099',
      admissionDate: '11/02/2008',
      name: 'Priya Desai',
      class: '11th-A',
      dob: '03/05/2003',
      aadhar: '111 111 1111',
      parentName: 'Ravi Desai',
      phone: '3333333333',
      address: '789 Boulevard, City, State',
    },
  ];

  return (
    <>
      <StudentHeader />
      <div className="mt-6">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <div className="max-h-96 overflow-y-auto"> {/* Set the max-height and enable vertical scrolling */}
            <table className="min-w-full bg-white border-collapse">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">Admission No.</th>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">Name</th>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">DOB</th>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">Parents Name</th>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">Address</th>
                  <th className="px-6 py-3 text-left text-xs sm:text-sm">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {students.map((student, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-xs sm:text-sm">
                      {student.id}<br />
                      <span className="text-xs sm:text-sm text-gray-500">{student.admissionDate}</span>
                    </td>
                    <td className="px-6 py-4 text-xs sm:text-sm">
                      {student.name}<br />
                      <span className="text-xs sm:text-sm text-gray-500">{student.class}</span>
                    </td>
                    <td className="px-6 py-4 text-xs sm:text-sm">
                      {student.dob}<br />
                      <span className="text-xs sm:text-sm text-gray-500">{student.aadhar}</span>
                    </td>
                    <td className="px-6 py-4 text-xs sm:text-sm">
                      {student.parentName}<br />
                      <span className="text-xs sm:text-sm text-blue-500">{student.phone}</span>
                    </td>
                    <td className="px-6 py-4 text-xs sm:text-sm">{student.address}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button className="text-blue-500 text-xs sm:text-sm"><FaEdit /></button>
                      <button className="text-red-500 text-xs sm:text-sm"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTable;