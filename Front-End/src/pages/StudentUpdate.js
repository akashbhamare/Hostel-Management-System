import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from 'react-router-dom';

export default function StudentUpdate() {
  
  // var student = JSON.parse(sessionStorage.getItem("student"));

  let navigate = useNavigate();

  const [studentdetails, setStudentdetails] = useState({});
  const [user,setuser] = useState({})

  useEffect(() => {
    StudentService.getStudent(user.userName)
      .then((response) => {
        setStudentdetails(response.data);
        console.log(studentdetails)
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });

      StudentService.getuser(user.userName).then((response) => {
        console.log(response.data)
        setuser(response.data)
      }).catch((err) => {
          console.log(err)
          alert("Something went wrong")
      })  

  }, []);

  const update = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const studentdetail = Object.fromEntries(formData);

    studentdetail.firstName = user.firstName;
    studentdetail.lastName = user.lastName;
    studentdetail.userName = user.userName;

    console.log(studentdetail);

    StudentService.updatedetail(studentdetail).then(response => {
            console.log("student details updated :" + response)
            alert("student details updated")
            navigate('/student/profile');

    }).catch((err) => {
        console.log(err)
        alert("Something went wrong")
    })
  };

  const back = () => {
    navigate('/student/profile')
  }
  
  return (
    <div className="row my-4 mx-5">
      <div className="col-lg-12 col-xl-12">
        <div className="card">
          <h5 className="card-header text-center">Student Profile</h5>
          <form
            className="card-body"
            onSubmit={update}
            style={{ padding: "20px 50px 20px 50px" }}
          >
            <div className="row">
              <div className="col">
                <h6>Name</h6>
              </div>
              <div className="col">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    defaultValue={user.firstName}
                    disabled 
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    defaultValue={user.lastName}
                    disabled 
                  />
                </div>
              </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                  <h6>User Name</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="text"
                      name="userName"
                      defaultValue={user.userName}
                      disabled 
                    />
                  </div>
                </div>
              </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Email</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="emailId"
                    defaultValue={studentdetails.emailId}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Mobile number</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="mobileNo"
                    defaultValue={studentdetails.mobileNo}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Course</h6>
              </div>
              <div className="col-lg-8">
                <select className="form-select mb-4" name="course">
                  <option>Select Course</option>
                  <option selected defaultValue="DAC">
                    DAC
                  </option>
                  <option defaultValue="DBDA">DBDA</option>
                  <option defaultValue="DESD">DESD</option>
                  <option defaultValue="DITISS">DITISS</option>
                  <option defaultValue="DIoT">DIoT</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Date of birth</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control"
                  type="date"
                  id="birthday"
                  name="dateOfBirth"
                  value={studentdetails.dateOfBirth}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Gender</h6>
              </div>
              <div className="col-lg-8">
                <select className="form-select mb-4" name="gender">
                
                  <option>Select Gender</option>
                  <option selected defaultValue="1">
                    Male
                  </option>
                  <option defaultValue="2">Female</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Address</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    type="text"
                    name="address"
                    rows="4"
                    defaultValue={studentdetails.address}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 mb-2 text-center">
              <button className="btn btn-lg btn-primary mr-4" type="submit">
                Update
              </button>
              <button className="btn btn-lg btn-warning" onClick={back}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
