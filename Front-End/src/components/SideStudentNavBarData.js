import React from 'react'

import { RiDashboardFill, RiLogoutCircleLine  } from 'react-icons/ri';

import { CgProfile } from 'react-icons/cg'
// import { MdOutlineBedroomParent, MdOutlinePayments } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import { HiOutlineRefresh } from 'react-icons/hi';

export const SideStudentNavBarData = [
    { 
        title: "Dashboard",
        path: "/student",
        icon: <RiDashboardFill/>
    },
    { 
        title: "Register",
        path: "/student/register", 
        icon: <AiOutlineForm/>,
    },
    { 
        title: "Room Status",
        path: "/student/roomstatus", 
        icon: <HiOutlineRefresh/>
    },
    { 
        title: "Report Concerns",
        path: "/student/concern", 
        icon: <TbReport/>
    },
    { 
        title: "Profile",
        path: "/student/profile",
        icon: <CgProfile/>
    },
    { 
        title: "Logout",
        path: "/student/logout", 
        icon: <RiLogoutCircleLine/>
    },
]