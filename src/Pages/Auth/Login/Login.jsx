import axios from "axios";
import axiosInstance from "../../../axiousConfig/instance.js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeRole } from "../../../Store/slices/role.js";
import { changeUser } from "../../../Store/slices/user.js";
import { useNavigate } from "react-router";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};
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
    console.log(formData);
    try {
      // First API Call: User Login
      const loginResponse = await axios.post(
        `${process.env.baseUrl}/auth/login`,
        formData
      );
      console.log(loginResponse.data.token);
      localStorage.setItem("token", loginResponse.data.token);

      // Set the token for subsequent requests
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `${loginResponse.data.token}`;

      // Second API Call: Fetch User Profile
      const profileResponse = await axiosInstance.get("/auth/profile");
      dispatch(changeRole(profileResponse.data.role));
      dispatch(changeUser(profileResponse.data));
      console.log(profileResponse.data);

      // Navigate to profile
      navigate("/");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex items-start w-full min-h-screen p-4 ">
      <div className="relative flex flex-col w-1/2 h-full">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="my-4 text-4xl font-bold text-white">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl font-normal text-white">
            Start for free and get attractive offers from our community
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/e0/fa/74/e0fa74f3970db4a792aff43cd0b3f713.jpg"
          className="object-cover w-full h-full "
        />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[500px] ml-3 ">
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-4 text-3xl font-semibold">Login</h3>
            <p className="mb-2 text-base">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full py-3 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="m-2 text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2">
              Forget password?
            </p>
          </div>

          <div className="flex flex-col w-full my-4">
            <button
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              onClick={handleSignUp}
            >
              Login
            </button>

            <button
              className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>

          <div className="relative flex items-center justify-center w-full py-2">
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

        <div className="flex items-center justify-center w-full">
          <p className="text-sm font-normal text-[#060606]">
            Don’t have any account ?
            <span className="m-1 font-semibold underline cursor-pointer underline-offset-2">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
