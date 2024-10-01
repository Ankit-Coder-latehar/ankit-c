// src/VehicleList.js
import React from 'react';

const vehicles = [
  {
    id: 'HR55AK8204',
    location: 'Sonipat District, Haryana',
    time: '20 Aug 2024, 19:25',
    speed: '51 kmph',
    distance: '254.3 km today',
    battery: '83%',
    signal: '75%',
    
  },
  {
    id: 'HR55AL7869',
    location: 'Vadodara District, Gujarat',
    time: '20 Aug 2024, 19:25',
    speed: '7 kmph',
    distance: '135.7 km today',
    battery: '83%',
    signal: '100%',
    
  },
  {
    id: 'HR55AL7654',
    location: 'Panchmahals District, Gujarat',
    time: '20 Aug 2024, 19:25',
    battery: '83%',
    signal: '75%',
    
  },
];

const VehicleList = () => {
  return (
    <div>
      {vehicles.map(vehicle => (
        <div key={vehicle.id} className="p-4 mb-4 bg-white shadow rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{vehicle.id}</h2>
            <span className="text-green-600 text-sm">{vehicle.status}</span>
          </div>
          <p className="text-gray-600">{vehicle.location}</p>
          <p className="text-gray-600">{vehicle.time}</p>
          <p className="mt-2 text-gray-800">
            {vehicle.speed ? `${vehicle.speed} | ` : ''}{vehicle.distance}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <button className="text-blue-600 hover:underline">+ Add driver</button>
            <div className="flex space-x-2 text-gray-500">
              <span>{vehicle.battery} Battery</span>
              <span>{vehicle.signal} Signal</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;