import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentsList from '../pages/StudentsList';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import HostelView from '../pages/HostelView';
import ConcernsList from '../pages/ConcernsList';
import EmployeeProfile from '../pages/EmployeeProfile';
import SharedEmployeeLayout from '../pages/SharedEmployeeLayout';
import AddHostel from '../pages/AddHostel';
import AddRooms from '../pages/AddRooms';
import UpdateHostel from '../pages/UpdateHostel';
import UpdateRoom from '../pages/UpdateRoom';
import RoomView from '../pages/RoomView';
import EmployeeUpdate from '../pages/EmployeeUpdate';
import PaymentList from '../pages/PaymentList';
import Logout from '../pages/Logout';


class EmployeeRouter extends Component {
    render() {

            return (
                <div>
                    <Router>
                        <Routes>
                            <Route exact path="employee" element={<SharedEmployeeLayout />}>
                                <Route index element={<EmployeeDashboard />} />
                                <Route path="student/display" element={<StudentsList />} />
                                <Route path="hostel/display/add" element={<AddHostel />} />
                                <Route path='hostel/room/add' element={<AddRooms />}></Route>
                                <Route path='room/update' element={<UpdateRoom />}></Route>
                                <Route path="concern/display" element={<ConcernsList />} />
                                <Route path="profile" element={<EmployeeProfile />} />
                                <Route path="hostel/display" element={<HostelView />} />
                                <Route path="hostel/room" element={<RoomView />} />
                                <Route path="hostel/update" element={<UpdateHostel />} />
                                <Route path="update" element={<EmployeeUpdate />} />
                                <Route path="payments" element={<PaymentList />} />
                                <Route path="logout" element={<Logout />} />
                            </Route>
                        </Routes>
                    </Router>

                </div>
            );
        

        
        
    }
}

export default EmployeeRouter;