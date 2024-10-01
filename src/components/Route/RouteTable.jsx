import React, { useState } from 'react';

const TripForm = () => {
  const [tripType, setTripType] = useState('Pickup');

  return (
    <div className="p-4 sm:p-6">
      {/* Route and Bus Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-1">Route Name</label>
          <input type="text" className="border rounded w-full p-2" placeholder="ABC" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Select Bus</label>
          <select className="border rounded w-full p-2">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Driver</label>
          <select className="border rounded w-full p-2">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Helper</label>
          <select className="border rounded w-full p-2">
            <option>Select</option>
          </select>
        </div>
      </div>

      {/* Trip Type Selection */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
        <label className="text-gray-700 mb-2 sm:mb-0 sm:mr-4">Select Trip Type</label>
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
          <input
            type="radio"
            name="tripType"
            value="Pickup"
            checked={tripType === 'Pickup'}
            onChange={() => setTripType('Pickup')}
            className="mr-2"
          />
          <label>Pickup Trip</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="Drop"
            checked={tripType === 'Drop'}
            onChange={() => setTripType('Drop')}
            className="mr-2"
          />
          <label>Drop Trip</label>
        </div>
      </div>

      {/* Pickup Trip Info */}
      <div className={`mb-6 ${tripType === 'Pickup' ? 'block' : 'hidden'}`}>
        <h3 className="text-green-600 font-semibold mb-2">Pickup Trip Info.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Start Time</label>
            <input type="time" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">End Time</label>
            <input type="time" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Stoppage Point</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Assigned Students</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Days</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-6 w-full sm:w-auto">
              Create/Edit Path
            </button>
          </div>
          <div className="flex items-center ml-4">
            <label className="text-gray-700 mr-2">Active</label>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>
      </div>

      {/* Drop Trip Info */}
      <div className={`mb-6 ${tripType === 'Drop' ? 'block' : 'hidden'}`}>
        <h3 className="text-red-600 font-semibold mb-2">Drop Trip Info.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Start Time</label>
            <input type="time" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">End Time</label>
            <input type="time" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Stoppage Point</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Assigned Students</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Days</label>
            <select className="border rounded w-full p-2">
              <option>Select Days</option>
            </select>
          </div>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-6 w-full sm:w-auto">
              Create/Edit Path
            </button>
          </div>
          <div className="flex items-center ml-4">
            <label className="text-gray-700 mr-2">Active</label>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded w-full sm:w-auto">Cancel</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-auto">Create/Update</button>
      </div>
    </div>
  );
};

export default TripForm;
