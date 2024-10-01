import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const ClassCard = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Classes</h2>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          + Add Class
        </button>
      </div>

      
      <div className="grid grid-cols-3 gap-4">
       
        {Array(12).fill(0).map((_, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4 flex flex-col items-center text-center">
           
            <div className="flex justify-between w-full mb-4">
              <span className="text-sm font-semibold text-gray-700">Class Name</span>
              <span className="text-sm font-semibold text-blue-600">9th-C</span>
            </div>

            
            <div className="flex items-center justify-between w-full mb-4">
              
              <div className="flex items-center">
                <i className="fas fa-user-graduate text-lg text-gray-600 mr-2"></i>
                <span className="text-lg font-bold text-gray-800">42</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center mx-2">
                  <i className="fas fa-check text-green-500 mr-1"></i>
                  <span className="text-green-500">0</span>
                </div>
                <div className="flex items-center mx-2">
                  <i className="fas fa-times text-red-500 mr-1"></i>
                  <span className="text-red-500">30</span>
                </div>
              </div>

              
              <button className="ml-auto py-1 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassCard;
