import axios from "axios";

class AuthService {

  signin(userlogin){
    console.log(userlogin);
    return axios.post('http://localhost:7777/signin', userlogin );
}

  // logout() {
  //   //alert("Sucessfully Logout");
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   this.props.history.push("/");
  // }


  signup(studentdetail){    
    return axios.post('http://localhost:7777/signup', studentdetail );
}

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();

