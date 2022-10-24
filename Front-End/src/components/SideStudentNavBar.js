import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideStudentNavBarData as Menus } from './SideStudentNavBarData';
import { CgMenuRound } from 'react-icons/cg';
import { RiDashboardFill } from 'react-icons/ri';

const SideStudentNavBar = () => {
    const [open, setOpen] = useState(true);

    return (

        <div>
            <div
                className={`bg-zinc-900 h-screen p-2 pt-3  ${open ? "w-64" : "w-16"
                    } duration-500 relative`}
            >
                <CgMenuRound
                    className={`bg-white text-zinc-900 text-3xl
                    rounded-full absolute -right-3 top-9 border
                    border-zinc-900 cursor-pointer' ${!open && "rotate-180"
                        }`}
                    onClick={() => setOpen(!open)}
                />
                <div className='inline-flex'>
                    <h1 className={`text-white origin-left font-medium
                         text-2xl duration-300 pl-2 pt-3 ${!open && "scale-0"}`}
                    >
                        Student
                    </h1>
                </div>

                <ul className='pt-2 -ml-4 mt-4' >
                    {Menus.map((menu, index) => {
                        return (
                            <li key={index} className="text-gray-300 text-sm flex
                                     items-center gap-x-4 cursor-pointer  pl-0 pt-2
                                     hover:bg-light-white rounded-sm mt-2 pl-1 pb-1 ">
                                <span className='text-2xl block float-left'>
                                    {menu.icon ? menu.icon : <RiDashboardFill />}
                                </span>
                                <Link to={menu.path} className={`text-white font-medium flex-1 no-underline ${!open && "hidden"
                                    }`}>{menu.title}</Link>
                            </li>
                        );
                    })}
                </ul>

            </div>

        </div>
    );

}

export default SideStudentNavBar;