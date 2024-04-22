

import axios from "axios";
import axiosInstance from "../../../axiousConfig/instance.js";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative lg:w-1/2">
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

      <div className="lg:w-1/2 bg-[#f5f5f5] flex flex-col justify-center p-8 lg:p-20 text-center  ">
        <div className="max-w-md mx-auto">
          <h3 className="mx-auto mb-4 text-4xl font-bold">Login</h3>
          <p className="mb-4 text-base font-bold">
            Welcome Back! Please enter your details.
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-black bg-transparent border-b border-black outline-none focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

         

            <button
              type="submit"
              className="w-full py-3 bg-[#060606] font-bold  text-white  rounded-md"
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


        </div>

        <p className="text-sm mx-auto font-normal mt-8 text-[#060606]">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-semibold underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
