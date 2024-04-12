
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `${process.env.baseUrl}/auth/register`,
        formData
       
      );
      console.log(response.data.message);
      toast.success("you register in success");
      navigate("/login");
      // Redirect the user after successful registration, for example to the login page
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-16 m-12 justify-between items-center">
        <div className="w-full flex flex-col max-w-[500px] ml-3 ">
          <div className="w-full flex flex-col mb-3">
            <h3 className="text-3xl font-semibold mb-4">Register</h3>
            <p className="text-base mb-2">create a new account</p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none whitespace-nowrap"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
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
            <select
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              name="role"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">
                I read and agree to the Terms of Use and Privacy Statement
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              onClick={handleSignUp}
            >
              Sign up
            </button>

            <button className="w-full text-white my-2 font-semibold bg-[#DD4B39] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Sign up with Google
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Do you have any account ?
            <span className="font-semibold underline underline-offset-2 cursor-pointer m-1">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;







