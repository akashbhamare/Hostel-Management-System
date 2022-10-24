import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localHost:7777/student"

let token = sessionStorage.getItem("jwt")
const securityConfig = {
     headers: {"Authorization" : `Bearer ${token}`} 
}

const adddetail = (studentdetail) => {
    return axios.put(STUDENT_API_BASE_URL + "/register", studentdetail,securityConfig);
}

const getStudent = ()=>{
    return axios.get(STUDENT_API_BASE_URL + "/view",securityConfig)
}

const getuser=()=>{
    return axios.get(STUDENT_API_BASE_URL + "/register",securityConfig)
}

const updatedetail = (studentdetail)=>{
    return axios.put(STUDENT_API_BASE_URL + "/update", studentdetail,securityConfig)
}

const reportconcern = (concern)=>{
    return axios.post(STUDENT_API_BASE_URL + "/concern/add", concern,securityConfig)
}

const makepayment = (obj)=>{
    return axios.post(STUDENT_API_BASE_URL + "/book", obj,securityConfig)
}

const getAllottment=()=>{
    return axios.get(STUDENT_API_BASE_URL + "/allottment",securityConfig)
}

const StudentService = {adddetail,getStudent,getuser,reportconcern,makepayment,getAllottment,updatedetail}

export default StudentService

