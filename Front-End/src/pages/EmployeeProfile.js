import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from 'react-router-dom';

export default function EmployeeProfile() {

  const [employeedetails, setemployeedetails] = useState({});

  let navigate = useNavigate()

  useEffect(() => {
    EmployeeService.getemployee()
      .then((response) => {
        setemployeedetails(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }, []);

  const update = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const employeedetail = Object.fromEntries(formData);

    employeedetail.firstName = employeedetails.firstName;
    employeedetail.lastName = employeedetails.lastName;
    employeedetail.userName = employeedetails.userName;

    navigate('/employee/update')
    
  };

  return (
    <div className="row w-50 my-4 mx-5">
      <div className="col-lg-12 col-xl-12">
        <div className="card">
          <h5 className="card-header text-center ">
            Employee Profile
          </h5>
          <form
            className="card-body"
            style={{ padding: "20px 50px 20px 50px" }}
            onSubmit={update}
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
                    disabled
                    defaultValue={employeedetails.firstName}
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
                    disabled
                    defaultValue={employeedetails.lastName}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Employee ID</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="empId"
                    disabled
                    defaultValue={employeedetails.empId}
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
                    disabled
                    defaultValue={employeedetails.userName}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Department</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="department"
                    defaultValue={employeedetails.department}
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
                  <input className="form-control-plaintext" type="text" name="emailId"
                  defaultValue={employeedetails.emailId}
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
                    defaultValue={employeedetails.mobileNo}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 my-2">
                <h6>Designation</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control-plaintext"
                    type="text"
                    name="designation"
                    defaultValue={employeedetails.designation}
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary w-100 mb-3" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
