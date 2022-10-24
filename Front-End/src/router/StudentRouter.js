import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentDashboard from '../pages/StudentDashboard';
import StudentRegister from '../pages/StudentRegister';
import StudentProfile from '../pages/StudentProfile';
import SharedStudentLayout from '../pages/SharedStudentLayout';
import SelectHostel from '../pages/SelectHostel';
import SelectRoom from '../pages/SelectRoom';
import Payments from '../pages/Payments';
import AllotmentStatus from '../pages/AllotmentStatus';
import ReportConcern from '../pages/ReportConcern';
import StudentUpdate from '../pages/StudentUpdate';
import Logout from '../pages/Logout';
import RoomStatus from '../pages/RoomStatus';


class StudentRouter extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        
                        <Route exact path="student" element={<SharedStudentLayout />}>
                            <Route index element={<StudentDashboard />} />
                            <Route path="register" element={<StudentRegister />} />
                            <Route path="hostel" element={<SelectHostel />} />
                            <Route path="hostel/room" element={<SelectRoom />} />
                            <Route path="payment" element={<Payments />} />
                            <Route path="status" element={<AllotmentStatus />} />
                            <Route path="concern" element={<ReportConcern />} />
                            <Route path="profile" element={<StudentProfile />} />
                            <Route path="update" element={<StudentUpdate />} />
                            <Route path="roomstatus" element={<RoomStatus />} />
                            <Route path="logout" element={<Logout />} />
                        </Route>
    
    
                    </Routes>
                </Router>
            </div >
        );
    }
}

export default StudentRouter;