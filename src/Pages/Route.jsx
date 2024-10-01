import React from 'react'
import RouteSidebar from '../components/Route/RouteSidebar'
import TripForm from '../components/Route/RouteTable'
import RouteNavbar from '../components/Route/RouteNavbar'

const BusRoute = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <RouteNavbar/>

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <RouteSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <TripForm/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default BusRoute;