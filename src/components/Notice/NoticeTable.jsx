import React from "react";

const NoticeTable = () => {
  const notices = [
    
    {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      {
        id: 1,
        date: "05-02-2023",
        subject: "Biology",
        class: "8-C",
        teacher: "Jyoti Mam",
        period: "2nd",
        student: "Aditya",
        notice: "Diversity and Classification of Living Being",
      },
      
    // Add more notices as needed
  ];

  return (
    <div className="p-4">
      {/* Search and Date Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-lg w-64 mt-6"
          />
          
          {/* Date Filter Section */}
          <div className="flex items-center space-x-4">
            {/* Select Date */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-semibold mb-1">Select Date</label>
              <button className="border border-gray-300 p-2 rounded-lg">
                Calendar
              </button>
            </div>

            {/* From Date */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-semibold mb-1">From</label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* To Date */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-semibold mb-1">To</label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Add Notice Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          + Add NOTICE
        </button>
      </div>

      {/* Notice Table */}
      <div className="overflow-x-auto border border-blue-200 rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-3 text-left">SNo.</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Subject<br/>Class</th>
              <th className="p-3 text-left">Teacher<br/>Period</th>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">NOTICE</th>
              <th className="p-3 text-left">Attachment</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={notice.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{notice.date}</td>
                <td className="p-3">
                  {notice.subject} <br /> {notice.class}
                </td>
                <td className="p-3">
                  {notice.teacher} <br /> {notice.period}
                </td>
                <td className="p-3">{notice.student}</td>
                <td className="p-3 text-blue-500">{notice.notice}</td>
                <td className="p-3 text-blue-500">
                  <a href="#" className="text-blue-500 underline">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeTable;