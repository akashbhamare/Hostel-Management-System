import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localHost:7777/admin"

axios.interceptors.request.use( config => {
    let token1 = sessionStorage.getItem("jwt")
  
    if(token1){
      const token = 'Bearer ' + token1;
      config.headers.Authorization =  token;
    }
  
    return config;
  });

class HostelService {
  
    
    adddetail(hosteldetail){
        return axios.post(STUDENT_API_BASE_URL + "/hostel/add" , hosteldetail);
    }

    updatedetail(hosteldetail){
        return axios.put(STUDENT_API_BASE_URL + "/hostel/update", hosteldetail)
    }
    

     deleteHostelDetail(hosteldetail){
        return axios.delete(STUDENT_API_BASE_URL + "/hostel/delete", hosteldetail)
    }

}

export default new HostelService();
