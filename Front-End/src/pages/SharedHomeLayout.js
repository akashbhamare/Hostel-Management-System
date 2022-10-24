import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';

class SharedHomeLayout extends Component {
    render() {
        return (
            <div>
                <HomeNavBar />                
                <Outlet />                
            </div>
        );
    }
}

export default SharedHomeLayout;