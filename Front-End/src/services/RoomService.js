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

class RoomService {
  
    
    adddetail(roomdetail){
        return axios.post(STUDENT_API_BASE_URL + "/room/add" , roomdetail);
    }
    updatedetail(roomdetail){
        return axios.put(STUDENT_API_BASE_URL + "/room/update", roomdetail)
    }
    deleteRoomDetail(roomdetail){
        return axios.delete(STUDENT_API_BASE_URL + "/room/delete", roomdetail)
    }

}

export default new RoomService();