import React from 'react';
import Navbar from '../components/MySchool/Navigation';
import Sidebar from '../components/MySchool/Sidebar';
import VehicleDashboard from '../components/Vehicle/VehicleDashboard';
 
const Vehicle = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-0 mt-0">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with Sidebar and Dashboard */}
      <div className="flex flex-1 overflow-hidden p-0">
        {/* Sidebar on the left */}
        <aside className="w-64 bg-gray-200 p-0 overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Main Dashboard area */}
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <VehicleDashboard />
        </main>
      </div>
    </div>
  );
};

export default Vehicle;