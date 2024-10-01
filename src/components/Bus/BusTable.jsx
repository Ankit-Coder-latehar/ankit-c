import React from "react";
import { Link } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    number: "HR XXXX 123",
    status: "Running",
    lastUpdate: "05:46 PM",
    location: "Bajgerah Road, Gurgaon Gateway, Sector 114, Gurgaon, Kapashera Tehsil",
    speed: "80 km/h",
  },
  {
    id: 1,
    number: "HR XXXX 123",
    status: "Running",
    lastUpdate: "05:46 PM",
    location: "Bajgerah Road, Gurgaon Gateway, Sector 114, Gurgaon, Kapashera Tehsil",
    speed: "80 km/h",
  },
  {
    id: 1,
    number: "HR XXXX 123",
    status: "Running",
    lastUpdate: "05:46 PM",
    location: "Bajgerah Road, Gurgaon Gateway, Sector 114, Gurgaon, Kapashera Tehsil",
    speed: "80 km/h",
  },
  // Add more vehicles as needed
];

const BusTable = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-2">
      <div className="flex flex-wrap justify-start items-center space-x-2 mb-4">
        {["All Vehicles", "Running", "Ideal", "Stopped", "Parked", "No Info", "Expire"].map((tab, index) => (
          <button
            key={index}
            className={`flex-1 md:flex-none bg-blue-50 text-blue-700 p-2 rounded-md whitespace-nowrap ${
              tab === "All Vehicles" ? "bg-blue-800 text-white" : ""
            }`}
          >
            {tab} <span className="ml-2">{12}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 lg:w-1/4 pr-4 ">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <Link to={`/vehicle`} key={vehicle.id}> {/* Wrap the card in a Link */}
                <div className="border border-gray-300 rounded-md bg-white shadow-sm p-4 flex-shrink-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-lg">{vehicle.number}</div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                      {vehicle.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    Last Update: {vehicle.lastUpdate}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{vehicle.location}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-600 font-medium">{vehicle.speed}</div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600">
                        <i className="fas fa-route"></i>
                      </button>
                      <button className="text-blue-600">
                        <i className="fas fa-bell"></i>
                      </button>
                      <button className="text-blue-600">
                        <i className="fas fa-map-marker-alt"></i>
                      </button>
                      <button className="text-blue-600">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 h-[400px] md:h-auto border border-gray-300 rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.368189624673!2d77.22072301333815!3d28.61291619302106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdac6d96f7a9%3A0x4fbeed6f9d4d16c7!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1693492707337!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BusTable;