import React, { useState } from 'react';
import { FaList, FaCar, FaClock, FaMapMarkerAlt, FaRoute, FaArrowUp, FaSquare } from 'react-icons/fa'; // Importing FontAwesome icons

const DetailsPanel = () => {
  const [activeTab, setActiveTab] = useState('itinerary'); // State to manage active tab

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-h-[600px] overflow-y-auto"> {/* Set a max height and overflow */}
      {/* Tabs */}
      <div className="flex border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab('itinerary')}
          className={`flex items-center px-4 py-2 font-semibold text-sm ${
            activeTab === 'itinerary' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
          }`}
        >
          <FaList className="mr-2" /> Itinerary
        </button>
        <button
          onClick={() => setActiveTab('vehicle-details')}
          className={`flex items-center px-4 py-2 font-semibold text-sm ${
            activeTab === 'vehicle-details' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
          }`}
        >
          <FaCar className="mr-2" /> Vehicle Details
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 'itinerary' && (
          <div>
            {/* Itinerary Content */}
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-lg font-bold">Itinerary</h3>
              <div className="text-gray-500">
                <span className="text-sm">Today</span>
                {/* Placeholder for additional controls or icons */}
              </div>
            </div>

            {/* Journey Summary */}
            <div className="flex mt-4">
              <div className="w-1/2">
                <p className="text-gray-500">All</p>
                <h4 className="text-lg font-semibold">10 hrs : 25 min</h4>
                <p className="text-gray-600">Stopped</p>
                <h4 className="text-lg font-semibold">13 hrs : 07 min</h4>
              </div>
              <div className="w-1/2">
                <p className="text-gray-500">No Info</p>
                <p className="text-gray-600">5 stops</p>
              </div>
            </div>

            {/* Running Since Section */}
            <div className="mt-4">
              <h4 className="text-md font-semibold flex items-center">
                <FaArrowUp className="text-green-500 mr-2" /> Running since
              </h4>
              <p className="text-gray-600">2 hrs : 9 min</p>
              <p className="text-gray-600">Covered 93.69 KMS</p>
              <p className="text-gray-500 text-xs">20 Aug 5:15 pm - 20 Aug 7:25 pm</p>
            </div>

            {/* Stop Information */}
            <div className="mt-4">
              <h4 className="text-md font-semibold flex items-center">
                <FaSquare className="text-red-500 mr-2" /> Stop 5
              </h4>
              <p className="text-gray-600">37 min : 16 sec</p>
              <p className="text-gray-600">
                <FaMapMarkerAlt className="inline-block mr-1" />
                state highway 26, Sanpka, Gurgaon, Haryana, 122503, India
              </p>
              <p className="text-gray-500 text-xs">20 Aug 4:38 pm - 20 Aug 5:15 pm</p>
            </div>

            {/* Additional Stop Information */}
            <div className="mt-4">
              <h4 className="text-md font-semibold flex items-center">
                <FaArrowUp className="text-green-500 mr-2" /> Ran for
              </h4>
              <p className="text-gray-600">1 hrs : 3 min</p>
              <p className="text-gray-600">Covered 26.70 KMS</p>
              <p className="text-gray-500 text-xs">20 Aug 3:35 pm - 20 Aug 4:38 pm</p>
            </div>
          </div>
        )}

        {activeTab === 'vehicle-details' && (
          <div>
            {/* Vehicle Details Content */}
            <div className="mt-4">
              <h4 className="text-md font-semibold">Vehicle Information</h4>
              <div className="mt-2">
                <p className="text-gray-600"><FaCar className="inline-block mr-1" /> Model: XYZ</p>
                <p className="text-gray-600"><FaClock className="inline-block mr-1" /> Last Service: 15 Aug 2024</p>
                <p className="text-gray-600"><FaRoute className="inline-block mr-1" /> Route: Delhi to Gurgaon</p>
                {/* Add more vehicle details as needed */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPanel;