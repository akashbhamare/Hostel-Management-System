import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from 'react-router-dom';

export default function StudentProfile() {

  // var student = JSON.parse(sessionStorage.getItem("student"));

  let navigate = useNavigate();

  const [studentdetails, setStudentdetails] = useState({});
  // const [user, setuser] = useState({})

  
  useEffect(() => {
    StudentService.getStudent()
      .then((response) => {
        setStudentdetails(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });

    // StudentService.getuser().then((response) => {
    //   console.log(response.data)
    //   setuser(response.data)
    // }).catch((err) => {
    //   console.log(err)
    //   alert("Something went wrong")
    // })

  }, []);

  const update = (e) => {
    e.preventDefault();
    navigate('/student/update');
  };

  
  return (
    <div className="row w-50 my-4 mx-5">
      <div className="col-lg-12 col-xl-12">
        <div className="card">
          <h5 className="card-header text-center">Student Profile</h5>
          <form
            className="card-body"
            onSubmit={update}
            style={{ padding: "20px 50px 20px 50px" }}
          >
            <div className="row">
              <div className="col my-2">
                <h6>Name</h6>
              </div>
              <div className="col">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    defaultValue={studentdetails.firstName}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    defaultValue={studentdetails.lastName}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>User Name</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="userName"
                    defaultValue={studentdetails.userName}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Email</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="emailId"
                    defaultValue={studentdetails.emailId}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Mobile number</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="mobileNo"
                    defaultValue={studentdetails.mobileNo}
                  />
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-4 my-2">
                <h6>Course</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control-plaintext"
                  type="text"
                  id="course"
                  name="course"
                  value={studentdetails.course}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Date of birth</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control-plaintext"
                  type="text"
                  id="birthday"
                  name="dateOfBirth"
                  value={studentdetails.dateOfBirth}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Gender</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control-plaintext"
                  type="text"
                  id="gender"
                  name="gender"
                  value={studentdetails.gender}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Address</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="address"
                    rows="4"
                    value={studentdetails.address}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 text-center">
              <button className="btn btn-lg btn-primary" type="submit">
                Update
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
