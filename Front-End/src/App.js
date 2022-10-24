import React from 'react';
import AppRouter from './router/AppRouter';
import StudentRouter from './router/StudentRouter';
import EmployeeRouter from './router/EmployeeRouter';
import ErrorRouter from './router/ErrorRouter';

import './css/homepage.css';

export default function App() {
  let authenticated = sessionStorage.getItem("authenticated")
  let role = sessionStorage.getItem("role")
  console.log(authenticated)
  if (authenticated === null) {
    console.log("in null");
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
  else if (authenticated) {
    if (role === 'ROLE_STUDENT') {
      return (
        <div>
          <StudentRouter />
          <ErrorRouter />
        </div>
      )
    }
    else if (role === 'ROLE_ADMIN') {
      return (
        <div>
          <EmployeeRouter />
          <ErrorRouter />
        </div>
      )
    }
  }
  else {
    return (
      <div>
        <ErrorRouter />
      </div>
    )
  }


}
