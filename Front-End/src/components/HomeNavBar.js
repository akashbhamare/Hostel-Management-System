import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class HomeNavBar extends Component {
    render() {
        return (
            <nav className='home-navbar text-center'>
                <NavLink to ='/' className='btn btn-primary btn-lg p-2 mt-4 mx-2'><h6>Home</h6></NavLink>
                <NavLink to ='/login' className='btn btn-primary btn-lg p-2 mt-4 mx-2'><h6>Login</h6></NavLink>
                {/* <NavLink to ='/employee/login' className='home-navbar-links '><h6>Employee</h6></NavLink> */}
            </nav>

        );
    }
}

export default HomeNavBar;