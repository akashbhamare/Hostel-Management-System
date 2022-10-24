// import axios from 'axios';
// import React, {Component} from 'react';
// import { Table, Space } from 'antd';
// import Container from '../components/Container';

// class StudentsList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             Students: []
//         };
//     }
//     getStudentsData() {
//         axios
//             .get(`http://localhost:7777/admin/students/display`, {})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//                 const students = data

//                     this.setState({
//                         students
//                     })

//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }


//     componentDidMount(){
//         this.getStudentsData()
//     }
//     render() {

//         const students = this.state.students;
//         if(students && students.length){

//             const columns = [
//                 {
//                     title: 'Hostel Name',
//                     dataIndex: 'hostelName',
//                     key: 'hostelName',
//                     sorter: (a, b) => a.hostelName.length - b.hostelName.length,
//                     sortDirections: ['descend'],
//                 },
//                 {
//                     title: 'Room No',
//                     dataIndex: 'roomNo',
//                     key: 'roomNo',
//                     defaultSortOrder: 'descend',
//                     sorter: (a, b) => a.roomNo - b.roomNo,
//                 },
//                 {
//                   title: 'First Name',
//                   dataIndex: 'firstName',
//                   key: 'firstName',
//                   sorter: (a, b) => a.firstName.length - b.firstName.length,
//                   sortDirections: ['descend'],
//                 },
//                 {
//                     title: 'Last Name',
//                     dataIndex: 'lastName',
//                     key: 'lastName',
//                     sorter: (a, b) => a.firstName.length - b.firstName.length,
//                     sortDirections: ['descend'],
//                 },
//                 {
//                     title: 'Gender',
//                     dataIndex: 'gender',
//                     key: 'gender',
//                 },
//                 {
//                     title: 'Mobile No',
//                     dataIndex: 'mobileNo',
//                     key: 'mobileNo',
//                 },
//                 {
//                     title: 'Course',
//                     dataIndex: 'course',
//                     key: 'course',
//                 },
//                 {
//                     title: 'Email Id',
//                     dataIndex: 'emailId',
//                     key: 'emailId',
//                 },
//                 {
//                     title: 'Action',
//                     key: 'action',
//                     render: (_, record) => (
//                       <Space size="middle">
//                         <a className="btn btn-danger btn-sm">Delete</a>
//                       </Space>
//                     ),
//                 }


//             ];

//             return (
//                 <Container>
//                     <h3 className='text-center m-2 p-2'>Students List</h3>
//                 <Table 
//                 dataSource={students}
//                 columns={columns}
//                 rowKey='firstName'
//                 // size='middle'
//                 />
//                 </Container>
//             )
//         }
//         return (
//             <Container>
//             <div className='text-center'>
//                 <h3>Students Not Available</h3>
//             </div>
//             </Container>
//         )

//     }
// }
// export default StudentsList;

import React, { useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { useEffect } from 'react';
import Container from '../components/Container';

export default function PaymentList() {

    const [Payments, setPayments] = useState([]);

    function getPaymentsData() {
        axios
            .get(`http://localhost:7777/admin/payment/display`, {})
            .then(response => response.data)
            .then((data) => {
                setPayments(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    useEffect(() => {
        getPaymentsData();
    }, [])

    // let navigate = useNavigate();

    if (Payments && Payments.length) {
        const columns = [
            {
                title: 'Payment Id',
                dataIndex: 'id',
                key: 'id',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Transaction Id',
                dataIndex: 'transactionId',
                key: 'transactionId',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.transactionId - b.transactionId,
            },
            {
                title: 'Student Name',
                dataIndex: 'studentName',
                key: 'studentName',
                sorter: (a, b) => a.studentName.length - b.studentName.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Hostel Name',
                dataIndex: 'hostelName',
                key: 'hostelName',
                sorter: (a, b) => a.hostelName.length - b.hostelName.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Room No',
                dataIndex: 'roomNo',
                key: 'roomNo',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.roomNo - b.roomNo,
            },
            {
                title: 'Transaction Status',
                dataIndex: 'transactionStatus',
                key: 'transactionStatus',
                sorter: (a, b) => a.transactionStatus.length - b.transactionStatus.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Transaction Date',
                dataIndex: 'transactionDate',
                key: 'transactionDate',
                // sorter: (a, b) => a.transactionDate.length - b.transactionDate.length,
                sorter: (a, b) => new Date(a.date) - new Date(b.date),
                sortDirections: ['ascend'],
            },
            // {
            //     title: 'Action',
            //     key: 'action',
            //     render: (d) =>
            //         <Space>
            //             <Button onClick={(e) => {
            //                 console.log("column click", d.id)
            //                 navigate('/student/view', { state: d.id })
            //                 }}>
            //                 View</Button>
            //             <Button onClick={(e) => {
            //                 console.log("column click", d)
            //                 sessionStorage.setItem('hostel', JSON.stringify(d))
            //                 navigate('/student/update')
            //                 }}>
            //                 Update</Button>
            //             <Button onClick={(e) => {
            //                 // console.log("column click", d)
            //                 sessionStorage.setItem('hostel', JSON.stringify(d))
            //                 navigate('/student/delete')
            //                 }}>
            //                 Delete</Button>
            //         </Space>
            // }
        ];

        return (
            <Container>
                <h3 className='text-center m-2 p-2'>Payments History</h3>
                <Table
                    dataSource={Payments}
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
                <h3>Payments History Not Available</h3>
            </div>
        </Container>
    )
}