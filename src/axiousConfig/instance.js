// import axios from "axios";

// const token = localStorage.getItem("token") || "";
// const axiosInstance = axios.create({
//   baseURL: "https://sb3aat.onrender.com/api",

//   headers: {
//     Authorization: token, //the token is a variable which holds the token
//   },
// });

// export default axiosInstance;

import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://sb3aat.onrender.com/api",
});

// Use an interceptor to add the token to each request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `${token}` : "";
  return config;
});

export default axiosInstance;
