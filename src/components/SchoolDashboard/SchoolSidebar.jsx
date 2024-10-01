
import { Squares2X2Icon } from '@heroicons/react/24/solid'; 
import { Squares2X2Icon as Squares2X2Outline } from '@heroicons/react/24/outline'; 


import React, { useState } from 'react';

const SchoolSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-blue-600 text-white rounded-full"
      >
        <i className="fas fa-bars"></i>
      </button>

     
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white overflow-y-hidden shadow-md px-4 py-8 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 md:block`}
      >
        <div className="flex flex-col space-y-6 text-gray-600 text-sm overflow-x-hidden">
          <a href='/dashboard'> <div className="flex items-center space-x-2 p-2 rounded-full bg-blue-100 w-full">
          <Squares2X2Icon className="h-6 w-6 hover:text-blue-500" />
          <span className="hover:text-blue-500 font-medium">Bus</span>
           </div></a>
          <a href='/schools'><div className="flex items-center space-x-2 p-2 mt-2 rounded-full hover:bg-blue-100 w-full">
       <Squares2X2Outline className="h-6 w-6 text-blue-500 " />
       <span className="text-blue-500 ">School</span>
    </div></a>
          
        </div>
      </div>
    </div>
  );
};

export default SchoolSidebar;