import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { CalendarDaysIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const DashboardGraph = () => {
  const lineData = {
    labels: ['Today', 'Yesterday', '23/11/23', '24/11/23'],
    datasets: [
      {
        label: 'KM/HR',
        data: [60, 70, 80, 65],
        borderColor: '#00AEEF',
        backgroundColor: 'rgba(0, 174, 239, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ['Today', 'Yesterday', '22/11/23', '23/11/23'],
    datasets: [
      {
        label: 'Distance',
        data: [500, 800, 600, 900],
        backgroundColor: '#2C3E50',
      },
    ],
  };

  const pieData = {
    labels: ['Not Assigned', 'Assigned'],
    datasets: [
      {
        label: 'Driver Assigned Status',
        data: [40, 60],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex flex-wrap space-x-4 md:space-x-8 mt-[-5px]">
          <a href="/vehicle">
            <button className="bg-blue-500 text-white py-1 px-4 rounded-full">All Vehicles 12</button>
          </a>
          <button className="bg-green-100 text-green-500 py-1 px-4 rounded-full">Running 12</button>
          <button className="bg-yellow-100 text-yellow-500 py-1 px-4 rounded-full">Idle 12</button>
          <button className="bg-red-100 text-red-500 py-1 px-4 rounded-full">Stopped 12</button>
          <button className="bg-green-200 text-green-700 py-1 px-4 rounded-full">Parked 12</button>
          <button className="bg-gray-100 text-gray-500 py-1 px-4 rounded-full">No Info 12</button>
          <button className="bg-yellow-200 text-yellow-700 py-1 px-4 rounded-full">Expire 12</button>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="relative flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-2 text-gray-400" />
            <input
              type="text"
              className="pl-8 pr-4 py-1 border rounded-lg w-32 md:w-48"
              placeholder="All Vehicles"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Select Date</span>
            <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">All Vehicles</h2>
          <div className="flex justify-between items-center">
            <div className="text-3xl md:text-4xl font-bold">60</div>
            <div className="flex flex-col text-sm">
              <span className="text-green-600">Running: 22</span>
              <span className="text-red-600">Stopped: 32</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-base md:text-lg font-semibold mb-2">Distance</h2>
          <div className="h-40">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Average Running Hours</h2>
          <div className="h-40">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Average Stopped Hours</h2>
          <div className="h-40">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Average Idle Hours</h2>
          <div className="h-40">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-base md:text-lg font-semibold mb-2">Average Speed</h2>
          <div className="h-40">
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Driver Assigned Status</h2>
          <div className="h-40">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Speed Limit Status</h2>
          <div className="h-40">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Overspeed Count</h2>
          <div className="h-40">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-base md:text-lg font-semibold mb-2">Temperature Alerts</h2>
          <div className="h-40">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;