import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CreateTable() {
  const [routeName, setRouteName] = useState('');
  const [bus, setBus] = useState('');
  const [driver, setDriver] = useState('');
  const [helper, setHelper] = useState('');
  const [startPointName, setStartPointName] = useState('');
  const [startPointTime, setStartPointTime] = useState('');
  const [stoppage1Name, setStoppage1Name] = useState('');
  const [stoppage1Time, setStoppage1Time] = useState('');
  const [stoppage2Name, setStoppage2Name] = useState('');
  const [stoppage2Time, setStoppage2Time] = useState('');
  const [endPointName, setEndPointName] = useState('');
  const [endPointTime, setEndPointTime] = useState('');
  const [isDropTripSame, setIsDropTripSame] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      routeName,
      bus,
      driver,
      helper,
      startPointName,
      startPointTime,
      stoppage1Name,
      stoppage1Time,
      stoppage2Name,
      stoppage2Time,
      endPointName,
      endPointTime,
      isDropTripSame,
    });
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Create a Trip</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="routeName" className="block text-gray-700 text-sm font-bold mb-2">
                Route Name
              </label>
              <input
                type="text"
                id="routeName"
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="bus" className="block text-gray-700 text-sm font-bold mb-2">
                Select Bus
              </label>
              <select
                id="bus"
                value={bus}
                onChange={(e) => setBus(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                <option value="bus1">Bus 1</option>
                <option value="bus2">Bus 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="driver" className="block text-gray-700 text-sm font-bold mb-2">
                Driver
              </label>
              <select
                id="driver"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                <option value="driver1">Driver 1</option>
                <option value="driver2">Driver 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="helper" className="block text-gray-700 text-sm font-bold mb-2">
                Helper
              </label>
              <select
                id="helper"
                value={helper}
                onChange={(e) => setHelper(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                <option value="helper1">Helper 1</option>
                <option value="helper2">Helper 2</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">Route Information</h2>

          <div>
            <label htmlFor="startPointName" className="block text-gray-700 text-sm font-bold mb-2">
              Start Point
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="startPointName"
                value={startPointName}
                onChange={(e) => setStartPointName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="time"
                id="startPointTime"
                value={startPointTime}
                onChange={(e) => setStartPointTime(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <select
              id="startPointLocation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            >
              <option value="">Select Location from Map</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          <div>
            <label htmlFor="stoppage1Name" className="block text-gray-700 text-sm font-bold mb-2">
              Stoppage 1
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="stoppage1Name"
                value={stoppage1Name}
                onChange={(e) => setStoppage1Name(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="time"
                id="stoppage1Time"
                value={stoppage1Time}
                onChange={(e) => setStoppage1Time(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <select
              id="stoppage1Location"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            >
              <option value="">Select Location from Map</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          <div>
            <label htmlFor="stoppage2Name" className="block text-gray-700 text-sm font-bold mb-2">
              Stoppage 2
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="stoppage2Name"
                value={stoppage2Name}
                onChange={(e) => setStoppage2Name(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="time"
                id="stoppage2Time"
                value={stoppage2Time}
                onChange={(e) => setStoppage2Time(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <select
              id="stoppage2Location"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            >
              <option value="">Select Location from Map</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          <div>
            <label htmlFor="endPointName" className="block text-gray-700 text-sm font-bold mb-2">
              End Point
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="endPointName"
                value={endPointName}
                onChange={(e) => setEndPointName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="time"
                id="endPointTime"
                value={endPointTime}
                onChange={(e) => setEndPointTime(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <select
              id="endPointLocation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            >
              <option value="">Select Location from Map</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isDropTripSame"
              checked={isDropTripSame}
              onChange={(e) => setIsDropTripSame(e.target.checked)}
              className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
            />
            <label htmlFor="isDropTripSame" className="ml-2 text-gray-700">
              Same as Drop trip
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </form>
      </div>
      <div className="bg-gray-200 h-96 rounded-md">
        <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default CreateTable;