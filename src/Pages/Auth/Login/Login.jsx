import axios from "axios";

import React, { useState } from "react";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};
export default function Login() {

  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
    
      const response = await axios.post(`${process.env.baseUrl}/auth/login`, formData);
      console.log(response.data.token);
      // Redirect the user after successful registration, for example to the login page
    } catch (error) {
      console.error("login failed:", error);
    }
  };



  return (
    <div className="w-full min-h-screen flex items-start p-4 ">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from our community
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/e0/fa/74/e0fa74f3970db4a792aff43cd0b3f713.jpg"
          className=" w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[500px] ml-3 ">
          <div className="w-full flex flex-col mb-3">
            <h3 className="text-3xl font-semibold mb-4">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 m-2">
              Forget password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"   onClick={handleSignUp}>
              
              Login
            </button>

            <button className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">OR</p>
          </div>

          <div>
            <div className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl5mLwB3JSyupYBADlbmWqFA-rsT2cr2XEwFcPjnk8Q&s"
                className="h-6 mr-2"
              />
              Signin with Google
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don’t have any account ?
            <span className="font-semibold underline underline-offset-2 cursor-pointer m-1">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

















// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://sb3aat.onrender.com/api/auth/login", formData);
//       console.log(response.data.message);
//       // Redirect the user after successful login, for example to the dashboard
//       navigate("/");
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
