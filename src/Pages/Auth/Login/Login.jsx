// import axios from "axios";
// import axiosInstance from "../../../axiousConfig/instance.js";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { changeRole } from "../../../Store/slices/role.js";
// import { changeUser } from "../../../Store/slices/user.js";
// import { useNavigate } from "react-router";
// import { ToastContainer, toast } from "react-toastify";
// const colors = {
//   primary: "#060606",
//   background: "#f5f5f5",
//   disbaled: "#D9D9D9",
// };
// export default function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  
//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       // First API Call: User Login
//       const loginResponse = await axios.post(
//         `${process.env.baseUrl}/auth/login`,
//         formData
//       );
//       console.log(loginResponse.data.token);
//       localStorage.setItem("token", loginResponse.data.token);

//       // Set the token for subsequent requests
//       axiosInstance.defaults.headers.common[
//         "Authorization"
//       ] = `${loginResponse.data.token}`;

//       // Second API Call: Fetch User Profile
//       const profileResponse = await axiosInstance.get("/auth/profile");
//       dispatch(changeRole(profileResponse.data.role));
//       dispatch(changeUser(profileResponse.data));
//       console.log(profileResponse.data);
//       toast.success("you loged in success");

//       // Navigate to profile
//       navigate("/");
//     } catch (error) {
//       console.error("There was an error!", error);
//       toast.error("faild login");
//     }
//   };

//   return (
//     <div className="flex items-start w-full min-h-screen p-4 ">
//       <div className="relative flex flex-col w-1/2 h-full">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="my-4 text-4xl font-bold text-white">
//             Turn Your Ideas into reality
//           </h1>
//           <p className="text-xl font-normal text-white">
//             Start for free and get attractive offers from our community
//           </p>
//         </div>
//         <img
//           src="https://i.pinimg.com/564x/e0/fa/74/e0fa74f3970db4a792aff43cd0b3f713.jpg"
//           className="object-cover w-full h-full "
//         />
//       </div>

//       <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
//         <div className="w-full flex flex-col max-w-[500px] ml-3 ">
//           <div className="flex flex-col w-full mb-3">
//             <h3 className="mb-4 text-3xl font-semibold">Login</h3>
//             <p className="mb-2 text-base">
//               Welcome Back! Please enter your details.
//             </p>
//           </div>

//           <div className="flex flex-col w-full">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full py-3 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full py-3 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <div className="flex items-center w-full">
//               <input type="checkbox" className="w-4 h-4 mr-2" />
//               <p className="text-sm">Remember me</p>
//             </div>
//             <p className="m-2 text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2">
//               Forget password?
//             </p>
//           </div>

//           <div className="flex flex-col w-full my-4">
//             <button
//               className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
//               onClick={handleSignUp}
//             >
//               Login
//             </button>

//             <button
//               className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </button>
//           </div>

//           <div className="relative flex items-center justify-center w-full py-2">
//             <div className="w-full h-[1px] bg-black"></div>
//             <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">OR</p>
//           </div>

//           <div>
//             <div className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl5mLwB3JSyupYBADlbmWqFA-rsT2cr2XEwFcPjnk8Q&s"
//                 className="h-6 mr-2"
//               />
//               Signin with Google
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center w-full">
//           <p className="text-sm font-normal text-[#060606]">
//             Don’t have any account ?
//             <span className="m-1 font-semibold underline cursor-pointer underline-offset-2">
//               Sign up
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }








import axios from "axios";
import axiosInstance from "../../../axiousConfig/instance.js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeRole } from "../../../Store/slices/role.js";
import { changeUser } from "../../../Store/slices/user.js";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        `${process.env.baseUrl}/auth/login`,
        formData
      );
      localStorage.setItem("token", loginResponse.data.token);

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `${loginResponse.data.token}`;

      const profileResponse = await axiosInstance.get("/auth/profile");
      dispatch(changeRole(profileResponse.data.role));
      dispatch(changeUser(profileResponse.data));
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Failed to login");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 relative">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="my-4 text-4xl font-bold text-white">
            Turn Your Ideas into Reality
          </h1>
          <p className="text-xl font-normal text-white">
            Start for free and get attractive offers from our community
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/e0/fa/74/e0fa74f3970db4a792aff43cd0b3f713.jpg"
          className="object-cover w-full h-[60vh] lg:h-full"
          alt="Background"
        />
      </div>

      <div className="lg:w-1/2 bg-[#f5f5f5] flex flex-col justify-center p-8 lg:p-20">
        <div className="max-w-md mx-auto">
          <h3 className="mb-4 text-3xl font-semibold">Login</h3>
          <p className="mb-4 text-base">
            Welcome Back! Please enter your details.
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full py-3 px-4 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember me</p>
              </div>
              <p
                onClick={() => navigate("/forgot-password")}
                className="text-sm font-medium underline cursor-pointer"
              >
                Forgot password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#060606] text-white font-semibold rounded-md"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 border border-black/40 bg-white text-[#060606] font-semibold rounded-md"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-center mt-8">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute -mt-4 bg-[#f5f5f5] px-2">OR</p>
          </div>

          <button className="w-full py-3 bg-white border border-black rounded-md text-[#060606] font-semibold flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl5mLwB3JSyupYBADlbmWqFA-rsT2cr2XEwFcPjnk8Q&s"
              alt="Google Icon"
              className="h-6 mr-2"
            />
            Sign in with Google
          </button>
        </div>

        <p className="text-sm font-normal mt-8 text-[#060606]">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-semibold cursor-pointer underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}





