import React from 'react'

import { RiDashboardFill, RiLogoutCircleLine  } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg'
import { MdOutlineMeetingRoom, MdPayments } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';

export const SideEmployeeNavBarData = [
    { 
        title: "Dashboard",
        path: "/employee",
        icon: <RiDashboardFill/>
    },
        
    { 
        title: "Students",
        path: "/employee/student/display", 
        icon: <FiUsers/>
    },
    { 
        title: "Hostels",
        path: "/employee/hostel/display", 
        icon: <MdOutlineMeetingRoom/>
    },
    { 
        title: "Payments History",
        path: "/employee/payments", 
        icon: <MdPayments/>
    },
    { 
        title: "Concerns",
        path: "/employee/concern/display", 
        icon: <HiOutlineRefresh/>
    },  
    { 
        title: "Profile",
        path: "/employee/profile",
        icon: <CgProfile/>
    },
    { 
        title: "Logout",
        path: "/employee/logout", 
        icon: <RiLogoutCircleLine/>
    },
]
