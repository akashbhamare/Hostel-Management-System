import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharedHomeLayout from '../pages/SharedHomeLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import StudentSignUp from '../pages/StudentSignUp';

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<SharedHomeLayout />}>
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="student/signup" element={<StudentSignUp />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default AppRouter;