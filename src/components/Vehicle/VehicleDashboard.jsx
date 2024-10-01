// src/Dashboard.js
import React from 'react';
import VehicleHeader from './VehicleHeader';
import VehicleList from './VehicleCard';
import MapView from './MapView';
import DetailsPanel from './DetailPanel';

const VehicleDashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <VehicleHeader />
      <div className="flex flex-1">
        {/* Left Panel: Vehicle List */}
        <div className="w-1/3 p-4 overflow-y-auto border-r border-gray-200">
          <VehicleList/>
        </div>

        {/* Center Panel: Details */}
        <div className="w-1/3 p-4 border-r border-gray-200">
          <DetailsPanel />
        </div>

        {/* Right Panel: Map */}
        <div className="w-1/3">
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default VehicleDashboard;