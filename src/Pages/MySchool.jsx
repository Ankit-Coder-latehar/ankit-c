import React from 'react'
import Navbar from '../components/MySchool/Navigation'
import Sidebar from '../components/MySchool/Sidebar'
import StudentTable from '../components/MySchool/StudentTable'


const MySchool = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0 overflow-hidden">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar on the left */}
      <Sidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100 overflow-hidden">
        {/* <Header /> */}
        {/* <StudentHeader/> */}
        <StudentTable/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default MySchool
