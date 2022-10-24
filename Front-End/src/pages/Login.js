import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Login() {

  let navigate = useNavigate()

  let handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const userlogin = Object.fromEntries(formData);

    console.log(userlogin)

    AuthService.signin(userlogin).then(response => {
      console.log(response.data)
      sessionStorage.setItem("jwt", response.data.jwtToken)
      sessionStorage.setItem("authenticated", true)
      console.log(response.data.roles[0])
      sessionStorage.setItem("role", response.data.roles[0])

      let role = response.data.roles[0]

      if (role === 'ROLE_STUDENT') {
        navigate('/student')
        window.location.reload()
      }
      else if (role === 'ROLE_ADMIN') {
        navigate('/employee')
        window.location.reload()
      }

    }).catch((err) => {
      console.log(err)
      alert("Invalid Username or Password")
    })
  };

  const isEnabled = () => {
    const { userid, password } = this.state;
    return (userid.length > 0 && password.length > 0);

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
          <h2 className="mt-4">Login</h2>
          <form onSubmit={handleSubmit} >
            <div className="input-group mb-3 mt-4">
              <span className="input-group-text"><FaUserAlt /></span>
              <label htmlFor="userId" className="sr-only"></label>
              <input type="text" className="form-control"
                placeholder="Enter User ID"
                name="userName"
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><RiLockPasswordLine /></span>
              <label htmlFor="password" className="sr-only"></label>
              <input type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="mt-3">
              <a href="#!" className="text-primary">Forgot password?</a>
            </div>
            <div className="mt-3">
              <button className="btn btn-lg btn-primary w-100"
                disabled={!isEnabled}>Login</button>
            </div>
          </form>
          <div className="font-weight-bold mt-3 mb-4">
            <p className="font-weight-bold">
              <strong>Don't have an account? &nbsp;</strong>
              <Link to='/student/signup'>Register</Link>
            </p>
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  );
}
