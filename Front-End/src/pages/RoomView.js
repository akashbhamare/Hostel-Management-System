import React, { useState } from 'react';
import axios from 'axios';
import { Table, Space, Button } from 'antd';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import RoomService from '../services/RoomService';
import Container from '../components/Container';

export default function RoomView() {
    
    const [Rooms, setRooms] = useState([]);
    
    const HostelId = useLocation().state;
    // console.log(HostelId)
    const add = () => {
        sessionStorage.setItem('HostelId',HostelId)
        console.log(HostelId)
    }
    function getRoomsData() {
        axios
            .get(`http://localhost:7777/admin/rooms/display`, { params: { hostelId: HostelId } })
            .then(response => response.data)
            .then((data) => {
                setRooms(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    useEffect(() => {
        getRoomsData();
    }, [])

    let navigate = useNavigate();

    if (Rooms && Rooms.length) {
        const columns = [
            {
                title: 'Hostel Id',
                dataIndex: 'hostelId',
                key: 'hostelId',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Room Id',
                dataIndex: 'id',
                key: 'id',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Hostel Name',
                dataIndex: 'hostelName',
                key: 'hostelName',
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Room No',
                dataIndex: 'roomNo',
                key: 'roomNo',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.contactMobileNo - b.contactMobileNo,
            },
            {
                title: 'Vacant',
                dataIndex: 'isVacant',
                key: 'isVacant',
                sortDirections: ['ascend'],
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: 'Action',
                key: 'action',
                render: (d) =>
                    <Space>
                        <Button onClick={(e) => {
                            console.log("column click", d)
                            sessionStorage.setItem('hostel', JSON.stringify(d))
                            navigate('/employee/room/update',{state:d})
                            }}>
                            Update</Button>
                        <Button onClick={(e) => {
                            // console.log("column click", d)
                            RoomService.deleteRoomDetail({data:{id:(d.id)}})
                            .then((response)=>{
                                alert("Room Deleted")
                                window.location.reload()
                            }).catch((err)=>{
                                console.log(err)
                            })
                            }}
                            disabled={d.isVacant==='Vacant'?false:true}
                            >
                            Delete</Button>
                    </Space>
            }
        ];

       
        return (
            <Container>
                <h3 className='text-center m-2 p-2'>Rooms List</h3>
                <Link to='add' className='btn btn-success mb-3' onClick={add}>Add Room</Link>
                <Table
                    dataSource={Rooms}
                    columns={columns}
                    rowKey='id'
                    pagination={{defaultPageSize:8}}
                size='middle'
                />
            </Container>
        )
    }
    return (
        <Container>
            <div className='text-center'>
                <h3>Rooms Not Available</h3>
            </div>
            <Link to='add' className='btn btn-success mb-3' onClick={add}>Add Room</Link>
        </Container>
    )
}
