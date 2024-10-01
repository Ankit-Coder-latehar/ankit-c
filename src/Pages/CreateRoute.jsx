import React from 'react'
import RouteNavbar from '../components/Route/RouteNavbar';
import CreateSidebar from '../components/Create-Route/CreateSidebar';
import CreateTable from '../components/Create-Route/CreateTable';

const CreateRoute = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <RouteNavbar/>

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <CreateSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <CreateTable/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default CreateRoute;