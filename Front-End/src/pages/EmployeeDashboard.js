import React, { Component } from 'react';

class EmployeeDashboard extends Component {
    render() {

        const mystyle = {
            
           
            textAlign:"center",
            height:"30vh",
            alignContent:"center",
            backgroundImage:"url(/1567833.jpg)",
           backgroundSize:"cover",
           overflow:"hidden"
          };
        return (
            <div style={{backgroundColor:"#eee",height:"100vh",width:"100vw"}}>
                <div className='header-container' style={mystyle}>
             <h2 style={{marginTop:"10vh"}}>Welcome Employee</h2>
                </div>
                
            </div>
        );
    }
}

export default EmployeeDashboard;