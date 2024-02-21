// src/components/Signup.js
import React from "react";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};

const Register = () => {
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
              placeholder="Enter your first name"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none whitespace-nowrap"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none whitespace-nowrap"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full text-black py-3 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">
                I read and agree to the Terms of Use and Privacy Statement
              </p>
            </div>
            {/* <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 m-2">Forget password?</p>     */}
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-[#060606] my-2 font-semibold  bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
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
