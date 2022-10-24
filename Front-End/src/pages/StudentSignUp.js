import React from 'react';
import AuthService from "../services/AuthService";
import { Link, useNavigate } from 'react-router-dom';

export default function StudentSignUp() {
  let navigate = useNavigate()
  let handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const studentdetail = Object.fromEntries(formData);

    AuthService.signup(studentdetail).then(response => {
      console.log("student details added :" + response)
      alert("student signed up successfully, please sign in")
      navigate("/login")
      // window.location.reload();

    }).catch((err) => {
      console.log(err)
      console.log(err.response.data.message)
      alert(err.response.data.message)
    })
  };

  const isEnabled = () => {
    const { firstName, lastName, userName, password } = this.state;
    return (firstName.length > 0 && lastName.length > 0
      && userName.length > 3 && password.length > 3);
  }

  return (
    <div className='container-fluid mt-3 position-absolute top-50 start-0 translate-middle-y'>
      <div className="row">
        <div className='col-sm-1 display-1 p-5'></div>
        <div className='col-sm-7 display-1 p-5'>
          Hostel Management System
        </div>
        <div className='col-sm-3 bg-light text-dark text-center px-4 
              shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className="my-3">Student Sign Up</h2>
          <form onSubmit={handleSubmit}>

            <div className="row mt-4">
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="First name"
                  name="firstName"
                />
              </div>
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="Last name"
                  name="lastName"
                />
              </div>
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="userId" className="sr-only"></label>
              <input type="text" className="form-control" id="userName"
                placeholder="Enter User ID"
                name="userName"
              />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control"
                placeholder="Enter password"
                name="password"

              />
            </div>
            <div className="mt-4 mb-4">
              <button className="btn btn-lg btn-primary w-100"
                disabled={!isEnabled}
              >Sign Up</button>
            </div>
          </form>
          <div className="font-weight-bold mt-3 mb-4">
            <p className="font-weight-bold">
              <strong>Already registered? &nbsp;</strong>
              {/* <a href='/student/signup' className="text-primary">Register</a> */}
              <Link to='/login'>Sign in</Link>
            </p>
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>

    </div>
  );

}
