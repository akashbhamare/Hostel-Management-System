import React, { useState } from 'react';
import axios from 'axios';
import { Table, Space, Button } from 'antd';
import Container from '../components/Container';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import HostelService from '../services/HostelService';


export default function HostelView() {

    const [Hostels, setHostels] = useState([]);

    function getHostelsData() {
        axios
            .get(`http://localhost:7777/admin/hostels/display`, {})
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
                    <Space>
                        <Button onClick={(e) => {
                            // console.log("column click", d.id)
                            navigate('/employee/hostel/room', { state: d.id })
                            }}>
                            View</Button>
                        <Button onClick={(e) => {
                            // console.log("column click", d)
                            sessionStorage.setItem('hostel', JSON.stringify(d))
                            navigate('/employee/hostel/update')
                            }}>
                            Update</Button>

                        <Button onClick={(e) => {
                            //  console.log("column click", d)
                            HostelService.deleteHostelDetail({ data: { id: (d.id) } })
                                .then((response) => {
                                    alert("hostel deleted:" + d.name)
                                    window.location.reload()
                                }).catch((err) => {
                                    console.log(err)
                                })
                            }}>
                            Delete</Button>
                    </Space>
            }
        ];

        return (
            <Container>
                <h3 className='text-center m-2 p-2'>Hostels List</h3>
                <Link to='add' className='btn btn-success mb-3'>Add Hostel</Link>
                <Table
                    dataSource={Hostels}
                    columns={columns}
                    rowKey='id'
                    // onRow={(record, recordIndex) => ({
                    //     onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
                    //   })}
                    pagination={{defaultPageSize:8}}
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
            <Link to='add' className='btn btn-success mb-3'>Add Hostel</Link>
        </Container>
    )
}
