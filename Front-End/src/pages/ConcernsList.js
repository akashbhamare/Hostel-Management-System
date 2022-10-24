// import axios from 'axios';
// import { Table, Space } from 'antd';
// import Container from '../components/Container';


// class ConcernsList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Concerns: []
//         };
//     }
//     getConcernsData() {
//         axios
//             .get(`http://localhost:7777/admin/concerns/display`, {})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//                 const concerns = data

//                     this.setState({
//                         concerns
//                     })

//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }


//     componentDidMount(){
//         this.getConcernsData()
//     }
//     render() {

//         const concerns = this.state.concerns;
//         if(concerns && concerns.length){

//             const columns = [
//                 {
//                     title: 'Complaint Id',
//                     dataIndex: 'id',
//                     key: 'id',
//                     defaultSortOrder: 'ascend',
//                     sorter: (a, b) => a.id - b.id,
//                 },
//                 {
//                     title: 'Hostel Name',
//                     dataIndex: 'hostelName',
//                     key: 'hostelName',
//                     sorter: (a, b) => a.hostelName.length - b.hostelName.length,
//                     sortDirections: ['ascend'],
//                 },
//                 {
//                     title: 'Room No',
//                     dataIndex: 'roomNo',
//                     key: 'roomNo',
//                     defaultSortOrder: 'ascend',
//                     sorter: (a, b) => a.roomNo - b.roomNo,
//                 },
//                 {
//                     title: 'Student Name',
//                     dataIndex: 'studentName',
//                     key: 'studentName',
//                     sorter: (a, b) => a.studentName.length - b.studentName.length,
//                     sortDirections: ['ascend'],
//                 },
//                 {
//                     title: 'Subject',
//                     dataIndex: 'subject',
//                     key: 'subject',
//                     sorter: (a, b) => a.subject.length - b.subject.length,
//                     sortDirections: ['ascend'],
//                 },
//                 {
//                   title: 'Concern',
//                   dataIndex: 'message',
//                   key: 'message',
//                   sorter: (a, b) => a.message.length - b.message.length,
//                   sortDirections: ['ascend'],
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
//                     <h3 className='text-center m-2 p-2'>Concerns List</h3>
//                 <Table 
//                 dataSource={concerns}
//                 columns={columns}
//                 rowKey='id'
//                 // size='middle'
//                 />
//                 </Container>
//             )
//         }
//         return (
//             <Container>
//                 <div className='text-center'>
//                     <h3>Concerns Not Available</h3>
//                 </div>
//             </Container>
//         )
//     }
// }

// export default ConcernsList;

import React, { useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import Container from '../components/Container';
import { useEffect } from 'react';

export default function ConcernsList() {

    const [Concerns, setConcerns] = useState([]);

    function getConcernsData() {
        axios
            .get(`http://localhost:7777/admin/concerns/display`, {})
            .then(response => response.data)
            .then((data) => {
                setConcerns(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    useEffect(() => {
        getConcernsData();
    }, [])

    // let navigate = useNavigate();

    if (Concerns && Concerns.length) {
        const columns = [
            {
                title: 'Complaint Id',
                dataIndex: 'id',
                key: 'id',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.id - b.id,
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
                title: 'Student Name',
                dataIndex: 'studentName',
                key: 'studentName',
                sorter: (a, b) => a.studentName.length - b.studentName.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Subject',
                dataIndex: 'subject',
                key: 'subject',
                sorter: (a, b) => a.subject.length - b.subject.length,
                sortDirections: ['ascend'],
            },
            {
                title: 'Concern',
                dataIndex: 'message',
                key: 'message',
                sorter: (a, b) => a.message.length - b.message.length,
                sortDirections: ['ascend'],
            },
            // {
            //     title: 'Action',
            //     key: 'action',
            //     render: (d) =>
            //         <Space>
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
                <h3 className='text-center m-2 p-2'>Concerns List</h3>
                <Table
                    dataSource={Concerns}
                    columns={columns}
                    rowKey='id'
                    pagination={{defaultPageSize:8}}
                // size='middle'
                />
            </Container>
        )
    }
    return (
        <Container>
            <div className='text-center'>
                <h3>Concerns Not Available</h3>
            </div>
        </Container>
    )
}