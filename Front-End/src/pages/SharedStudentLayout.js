import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import SideStudentNavBar from '../components/SideStudentNavBar';
import Footer from './../components/Footer';

class SharedStudentLayout extends Component {
    render() {
        return (
            <div className='flex'>
                <SideStudentNavBar />  
                <Footer />              
                <Outlet /> 
            </div>
        );
    }
}

export default SharedStudentLayout;