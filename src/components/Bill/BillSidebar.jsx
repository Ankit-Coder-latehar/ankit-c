import React, { useState } from 'react';

const BillSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white shadow-lg fixed sm:relative ${isOpen ? 'w-64' : 'w-16'} h-screen sm:w-64 px-4 py-8 transition-width duration-300 ease-in-out`}>
      {/* Toggle Button for Mobile */}
      <button 
        className="block sm:hidden mb-4 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className={`flex flex-col space-y-6 text-gray-600 text-sm ${isOpen ? '' : 'hidden'} sm:flex`}>
        <a
          href="/attendance-report"
          className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg hover:bg-blue-200 hover:text-blue-700 transition-all duration-200 ease-in-out"
        >
          <i className="fas fa-user-graduate"></i>
          <span>My Bill</span>
        </a>
      </div>
    </div>
  );
};

export default BillSidebar;