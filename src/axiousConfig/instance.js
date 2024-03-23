
import axios from "axios";

const token =localStorage.getItem('token')||"";
const axiosInstance= axios.create({

    baseURL : "https://sb3aat.onrender.com/api",


    headers: {
        Authorization: token //the token is a variable which holds the token
      }

})





export default axiosInstance