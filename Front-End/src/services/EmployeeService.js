import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localHost:7777/admin"

axios.interceptors.request.use( config => {
    let token1 = sessionStorage.getItem("jwt")
  
    if(token1){
      const token = 'Bearer ' + token1;
      config.headers.Authorization =  token;
    }
  
    return config;
  });


class EmployeeService {

    addemployee(newEmployee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/register",newEmployee);
    }

    getemployee(){
        return axios.get(EMPLOYEE_API_BASE_URL + "/view");
    }

    updatedetail(employeedetail){
        return axios.put(EMPLOYEE_API_BASE_URL + "/update", employeedetail)
    }

}

export default new EmployeeService();
