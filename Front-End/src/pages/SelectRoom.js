import React, { useState } from 'react';
import axios from 'axios';
import { Table, Space, Button } from 'antd';
import Container from '../components/Container';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function SelectRoom() {

    const [Rooms, setRooms] = useState([]);

    let token = sessionStorage.getItem("jwt")
    const securityConfig = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    axios.interceptors.request.use( config => {
        let token1 = sessionStorage.getItem("jwt")
      
        if(token){
          const token = 'Bearer ' + token1;
          config.headers.Authorization =  token;
        }
      
        return config;
      });

    function getRoomsData() {
        axios
            .get(`http://localhost:7777/student/rooms/display`, 
             
            { params: { hostelId: HostelId } }
            )
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
    const HostelId = useLocation().state;


    if (Rooms && Rooms.length) {
        const columns = [
            {
                title: 'Room Id',
                dataIndex: 'id',
                key: 'id',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Hostel Id',
                dataIndex: 'hostelId',
                key: 'hostelId',
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
            },
            {
                title: 'Action',
                key: 'action',
                render: (d) =>
                    <Space size="middle">
                        <Button disabled={d.isVacant === 'Vacant' ? false : true} onClick={(e) => {
                            console.log("column click", d.id)
                            sessionStorage.setItem("hosteldetail", JSON.stringify(d))
                            navigate('/student/payment')
                        }}>
                            Book</Button>
                    </Space>
            }


        ];

        return (
            <Container>
                <h3 className='text-center m-2 p-2'>Rooms List</h3>
                <Table
                    dataSource={Rooms}
                    columns={columns}
                    rowKey='id'
                    pagination={{ defaultPageSize: 8 }}
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
        </Container>
    )
}



