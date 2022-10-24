import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import Container from '../components/Container';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function SelectHostel() {

    const [Hostels, setHostels] = useState([]);
    
    let token = sessionStorage.getItem("jwt")
    const securityConfig = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    function getHostelsData() {
        axios
            .get(`http://localhost:7777/student/hostels/display`, securityConfig)
            .then(response => response.data)
            .then((data) => {
                setHostels(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    useEffect(() => {
        getHostelsData();
    }, [])

    let navigate = useNavigate();

    if (Hostels && Hostels.length) {
        const columns = [
            {
                title: 'Hostel Id',
                dataIndex: 'id',
                key: 'id',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Hostel Name',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Contact Person',
                dataIndex: 'contactPerson',
                key: 'contactPerson',
                sorter: (a, b) => a.contactPerson.length - b.contactPerson.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Contact No',
                dataIndex: 'contactMobileNo',
                key: 'contactMobileNo',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.contactMobileNo - b.contactMobileNo,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                sorter: (a, b) => a.address.length - b.address.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Hostel Fees',
                dataIndex: 'hostelFees',
                key: 'hostelFees',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.hostelFees - b.hostelFees,
            },
            {
                title: 'Total Rooms',
                dataIndex: 'totalRooms',
                key: 'totalRooms',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.totalRooms - b.totalRooms,
            },
            {
                title: 'Action',
                key: 'action',

                render: (d) =>
                    <div className="btn-wrap" style={{ width: "200px" }}>
                        <Button onClick={(e) => {
                            console.log("column click", d.id)
                            console.log(d.hostelFees)
                            sessionStorage.setItem('hostelprice', d.hostelFees)
                            navigate('/student/hostel/room', { state: d.id })
                        }}>
                            View Rooms</Button>
                    </div>
            }


        ];

        return (
            <Container>
                <h3 className='text-center m-2 p-2'>Hostels List</h3>
                <Table
                    dataSource={Hostels}
                    columns={columns}
                    rowKey='id'
                    pagination={{ defaultPageSize: 8 }}
                    // onRow={(record, recordIndex) => ({
                    //     onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
                    //   })}
                    size='middle'
                />
            </Container>
        )
    }
    return (
        <Container>
            <div className='text-center'>
                <h3>Hostels Not Available</h3>
            </div>
        </Container>
    )
}
