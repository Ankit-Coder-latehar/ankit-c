import React from "react";

const AnnouncementTable = () => {
  const announcements = [
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    {
      id: 1,
      date: "05-02-2023",
      announcementFor: "Student",
      topic: "For taking action on submission of late fees",
    },
    // Other announcements
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
    
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center w-full sm:space-x-4">
         
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-lg w-full sm:w-64 mt-6"
          />

        
          <div className="flex flex-col sm:flex-row items-center w-full sm:space-x-4 mt-4 sm:mt-0">
            
            <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
              <label className="text-sm font-semibold mb-1 ">Select Date</label>
              <button className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto">
                Calendar
              </button>
            </div>

           
            <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
              <label className="text-sm font-semibold mb-1">From</label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded-lg w-full sm:w-auto"
              />
            </div>

            
            <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
              <label className="text-sm font-semibold mb-1">To</label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded-lg w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

     
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center whitespace-nowrap w-full sm:w-auto mt-4 sm:mt-0">
          + Add Announcement
        </button>
      </div>

  
      <div className="overflow-x-auto border border-blue-200 rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-3 text-left">SNo.</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Announcement For</th>
              <th className="p-3 text-left">Topic</th>
              <th className="p-3 text-left">Attachment</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement, index) => (
              <tr key={announcement.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{announcement.date}</td>
                <td className="p-3">{announcement.announcementFor}</td>
                <td className="p-3 text-blue-500">{announcement.topic}</td>
                <td className="p-3 text-blue-500">
                  <a href="#" className="text-blue-500 underline">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementTable;

