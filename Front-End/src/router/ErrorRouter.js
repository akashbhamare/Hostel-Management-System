import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error from '../pages/Error';

class ErrorRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route element={<Error />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default ErrorRouter;