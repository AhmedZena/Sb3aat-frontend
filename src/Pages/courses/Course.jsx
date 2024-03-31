import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiStarSFill } from "react-icons/ri";
import { FiAlertOctagon } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { PiKeyboardFill } from "react-icons/pi";
import { BiCheck } from "react-icons/bi";
import { CgAlarm } from "react-icons/cg";
import { LuMonitorPlay } from "react-icons/lu";
import { LuMonitorDown } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import { IoInfinite } from "react-icons/io5";
import { GrAchievement } from "react-icons/gr";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useParams } from "react-router-dom";

export default function () {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        console.log(id)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <div className="w-full h-96 bg-[#2D2F31] relative ">
        <div className="container inline-block pl-20">
          <div className="pt-10">
            <a href="#!" className="font-semibold text-[#C0C4FC] mr-3">
              Teaching & Academics
            </a>
            <span className="font-bold text-white">{">"}</span>
            <a href="#!" className="font-semibold text-[#C0C4FC] m-3">
              Science
            </a>
            <span className="font-bold text-white">{">"}</span>
            <a href="#!" className="font-semibold text-[#C0C4FC] m-3">
              Quantum Mechanics (physics)
            </a>
          </div>
          <div className="mt-10 ">
            <h1 className="text-3xl font-bold text-white">
              {course.title}
            </h1>
            <p className="mt-8 text-xl font-normal text-white">
             {course.description}
            </p>
          </div>
          <div className="inline-block m-7">
            <h3 className="text-[#F69C08] inline-block font-bold m-1">4.5</h3>
            <span className="text-[#F69C08] inline-block">
              <RiStarSFill />
            </span>
            <span className="text-[#F69C08] inline-block">
              <RiStarSFill />
            </span>
            <span className="text-[#F69C08] inline-block">
              <RiStarSFill />
            </span>
            <span className="text-[#F69C08] inline-block">
              <RiStarSFill />
            </span>
            <span className="text-[#F69C08] inline-block">
              <RiStarSFill />
            </span>
            <a
              href="#"
              className=" text-[#C0C4FC] m-1 inline-block underline underline-offset-0"
            >
              (58 ratings)
            </a>
            <p className="inline-block ml-2 font-normal text-white">
              5,977 students
            </p>
            <div>
              <p className="inline-block ml-3 font-normal text-white">Created by</p>
              <a
                href="#"
                className=" text-[#C0C4FC] m-1 inline-block underline underline-offset-0"
              >
                Emanuele Pesaresi
              </a>
            </div>
            <div className="inline-block m-3">
              <span className="inline-block text-white">
                <FiAlertOctagon />
              </span>
              <p className="inline-block ml-1 font-normal text-white">
                Last updated 10/2023
              </p>
              <span className="inline-block ml-3 text-white">
                <FiGlobe />
              </span>
              <p className="inline-block ml-1 font-normal text-white">English</p>
              <span className="inline-block ml-3 text-white">
                <PiKeyboardFill />
              </span>
              <p className="inline-block ml-1 font-normal text-white">
                English [Auto]
              </p>
            </div>
          </div>
        </div>

        {/* /// card */}
        <div className="fixed inline-block max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 right-14 top-20 ">
          <a href="https://images.app.goo.gl/W2qegZFAhz2eFwJ2A">
            <img
              className="rounded-t-lg"
              src={course.CourseImg}
              alt=""
            />
          </a>
          <div className="items-center p-5">
            <a href="#">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                E£199.99
              </h5>
            </a>

            <span className="text-[#BF4E35] inline-block">
              <CgAlarm />
            </span>
            <p className="font-bold text-[#BF4E35] inline-block ml-1">16 minutes</p>
            <p className="font-normal text-[#BF4E35] inline-block ml-1">
              {" "}
              left at this price!
            </p>
            <div className="items-center">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 m-4 text-lg font-medium text-center text-white bg-[#8710D8] rounded-lg hover:bg-[#b775e4]  "
              >
                Add to cart
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <p>30-Day Money-Back Guarantee</p>
            <div>
              <h2 className="mt-2 mb-2 text-2xl font-bold text-black">
                This course includes:
              </h2>
              <span className="inline-block mr-1">
                <LuMonitorPlay />
              </span>
              <p className="inline-block">17 hours on-demand video</p>
              <br />
              <span className="inline-block mr-1">
                <LuMonitorDown />
              </span>
              <p className="inline-block">1 downloadable resource</p>
              <br />
              <span className="inline-block mr-1">
                <MdPhoneAndroid />
              </span>
              <p className="inline-block">Access on mobile and TV</p>
              <br />
              <span className="inline-block mr-1">
                <IoInfinite />
              </span>
              <p className="inline-block">Full lifetime access</p>
              <br />
              <span className="inline-block mr-1">
                <GrAchievement />
              </span>
              <p className="inline-block">Certificate of completion</p>
            </div>
            <div className="mb-2">
              <a className="inline-block m-2 font-bold text-black underline underline-offset-1">
                Share
              </a>
              <a className="inline-block m-2 font-bold text-black underline ml-7 underline-offset-1">
                Apply Coupon
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-40">
        <div className="w-1/2 px-8 pt-6 pb-8 mb-4 bg-white border border-inherit">
          <h1 className="inline-block m-2 text-2xl font-bold text-black">
            What you'll learn
          </h1>

          <div className="flex">
            <div className="mr-4 ">
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                How to use the Fourier Trasforms to tackle{" "}
              </p>
              <p className="ml-1 text-sm font-normal">
                the problem of solving PDE's
              </p>
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                Method of separation of variables to solve{" "}
              </p>
              <p className="ml-1 text-sm font-normal">
                the Heat equation (with exercises)
              </p>
              <br />
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                Method of separation of variables to solve{" "}
              </p>
              <p className="ml-1 text-sm font-normal">
                the Heat equation (with exercises)
              </p>
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                Mathematical tricks
              </p>
            </div>

            <div className="">
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                Fourier Transforms in one and multiple dimensions{" "}
              </p>
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                Method of separation of variables to solve{" "}
              </p>
              <p className="ml-1 text-sm font-normal">
                the Laplace equation in cartesian and polar
              </p>
              <p className="ml-1 text-sm font-normal">
                coordinates (with exercises)
              </p>
              <br />
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                concept of streamlines{" "}
              </p>
              <br />
              <p className="inline-block ml-1 text-sm font-normal">
                <span className="inline-block text-lg font-bold text-black">
                  <BiCheck />
                </span>
                How to derive Heisenberg Uncertainty
              </p>
              <p className="ml-1 text-sm font-normal">
                Principle using concepts of Probability
              </p>
              <p className="ml-1 text-sm font-normal">Theory</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 ml-40 ">
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Fourier Transform and its inverse
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a
                href="#"
                className="inline-block font-normal text-[#744CD8] underline"
              >
                Fourier series
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a
                href="#"
                className="inline-block font-normal text-[#744CD8] underline"
              >
                Fourier Transforms
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                How to interpret improper integrals of sinusoids
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a
                href="#"
                className="inline-block font-normal text-[#744CD8] underline"
              >
                Dirac delta
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a
                href="#"
                className="inline-block font-normal text-[#744CD8] underline"
              >
                Multiple Fourier Transforms
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Why the Dirac delta helps derive the Inverse Fourier Transform
              </a>
              <br />
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Solution of a PDE equation
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Gradient and Laplacian: quick summary
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Example of pde
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution to the pde part 1
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution to the pde part 2
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution to the pde part 3
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Some more physics behind the pde
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Physics behind the equation part 1
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Physics behind the equation part 2
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Solving the Diffusion/Heat equation by Fourier Tranform
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Setup of the diffusion problem
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Integral equation satisfied by the function f(x,t)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Diffusion equation
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Some possible boundary conditions of the diffusion equation
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution of the diffusion equation part 1
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution of the diffusion equation part 2
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal">
                Solution of the diffusion equation part 3
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solution of the diffusion equation part 4
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            2nd order ODE solved via Fourier Transform
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                2nd order non-homogeneous ODE solved via Fourier Transform
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            PDE solved with the method of characteristics
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Non linear first order PDE solved with the method of characteristics
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Heat equation solution via Separation of Variables
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Separation of variables to solve the heat equation (part 1)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Separation of variables to solve the heat equation (part 2)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Separation of variables to solve the heat equation (part 3)
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Laplace Equation solved via the method of Separation of Variables
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Laplace Equation in Cartesian Coordinates (exercise)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Laplace Equation in Polar coordinates (exercise 1)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Laplace Equation in Polar coordinates (exercise 2)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Laplace Equation in Polar coordinates (exercise 3)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Laplace Equation in Polar coordinates (exercise 4)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Concept of streamlines (with exercise)
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Nonhomogeneous Heat Equation
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Nonhomogeneous Heat Equation: Exercise 1
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Nonhomogeneous Heat Equation: Exercise 2
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Nonhomogeneous Heat Equation: Exercise 3
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-1/2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Wave Equation (Exercises)
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Nonhomogeneous Wave Equation (Exercise 1)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Nonhomogeneous Wave Equation: D'Alambert formula
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Solving a wave equation using D'Alambert formula (exercise)
              </a>
              <br />
              <span className="inline-block mr-3 font-normal">
                <LuMonitorPlay />
              </span>
              <a href="#" className="inline-block font-normal ">
                Energy conservation law for the wave equation
              </a>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
