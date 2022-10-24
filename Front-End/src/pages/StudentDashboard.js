import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

export default function StudentDashboard() {
   
    const [user,setuser] = useState({})
    
        const mystyle = {
            textAlign: "center",
            height: "30vh",
            alignContent: "center",
            backgroundImage: "url(/1567833.jpg)",
            backgroundSize: "cover",
            overflow: "hidden"
        };

        useEffect(() => {
            StudentService.getuser(user.userName).then((response) => {
                console.log(response.data)
                setuser(response.data)
            }).catch((err) => {
                console.log(err)
                // alert("Something went wrong")
            })
        }
            , {})

        return (
            <div style={{
                backgroundColor: "#eee", height: "100vh", display: "flex", flexDirection:
                    "column", width: "100vw"
            }}>

                <div className='header-container' style={mystyle}>
                    <h2 style={{ marginTop: "10vh" }}>Welcome {user.firstName+" "+user.lastName} </h2>
                </div>


            </div>
        );
    }
