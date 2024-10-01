import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySchool from './Pages/MySchool';
import Class from './Pages/Class';
import Teacher from './Pages/Teacher';
import Parents from './Pages/Parents';
import Driver from './Pages/Driver';
import Helper from './Pages/Helper';
import Notice from './Pages/Notice';
import Remainder from './Pages/Remainder';
import Announcement from './Pages/Announcement';
import Students from './Pages/Students';
import Bill from './Pages/Bills';
import Banner from './Pages/Banner';
import Report from './Pages/Report';
import AttendanceReport from './Pages/AttendanceReport';
import TripReport from './Pages/TripReport';
import BusRoute from './Pages/Route';
import RouteInfoTable from './Pages/My-Routes';
import MyRoute from './Pages/My-Routes';
import CreateRoute from './Pages/CreateRoute';
import Bus from './Pages/Bus';
import Vehicle from './Pages/Vehicle';
import Dashboard from './Pages/DashBoard';
import SchoolDashboard from './Pages/School';



function App() {
  return (
    <Router>
      <div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<MySchool />} />
            <Route path="/student" element={<Students />} />
            <Route path="/class" element={<Class />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/helper" element={<Helper/>} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/remainder" element={<Remainder />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/bills" element={<Bill/>} />
            <Route path="/banner" element={<Banner/>} />
            <Route path="/remainder" element={<Remainder />} />
            <Route path="/report" element={<Report/>} />
            <Route path="/tripreport" element={<TripReport/>} />
            <Route path="/attendance-report" element={<AttendanceReport/>} />
            <Route path="/route" element={<BusRoute/>} />
            <Route path="/my-route" element={<MyRoute/>} />
            <Route path="/create-route" element={<CreateRoute/>} />
            <Route path="/bus" element={<Bus/>} />
            <Route path="/vehicle" element={<Vehicle/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/schools" element={<SchoolDashboard/>} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

