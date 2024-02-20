import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// star
import StarIcon from "@mui/icons-material/Star";
import { IoIosMan } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

export default function Service() {
  return (
    <>
      <div className="mt-3 p-2">
        <h3 className="text-gray-400">
          Programming / Web Development / create a website
        </h3>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">Craete website for your business</h2>

          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Order Now
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
              Chat with Seller
            </button>
          </div>
        </div>
      </div>

      <div className=" content-center center d-flex row mt-2">
        {/* left side */}
        <div className="mainSec col-xl-8 bg-zinc-200">
          <div className="card mt-2 p-3">
            <img
              src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
              className=" rounded-lg"
              alt="guarantee"
            />
            <p>
              I can help you design networks suitable for an office or
              institution (one design for the value of the service) with the
              necessary explanation via Zoom and the appropriate settings. I can
              also provide consulting services related to cybersecurity (one
              consultation for the value of the service) and helpful solutions
              to overcome them using several specialized and professional tools
              with... The necessary report after the examination
            </p>
          </div>
          <div className="card mt-2 p-3">
            <h2 className="card-title text-2xl font-bold">Buy The service</h2>
            <div className="card-body p-4 mx-auto">
              <form class="max-w-sm  flex items-center gap-3">
                <p for="countries" class=" text-lg font-medium text-gray-900 ">
                  Nums Ordered
                </p>
                <select
                  id="countries"
                  class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                <p class="text-lg font-medium text-gray-900 ">
                  Cost:
                  <span>7$</span>
                </p>
              </form>
            </div>

            <button className="w-1/3 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
              Order Now
            </button>
          </div>

          <div className="card mt-2 p-3">
            <Row xs={1} md={2} lg={3} className="g-4">
              {/* Assuming you'll loop through an array of services */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Col key={index}>
                  <Card className="max-w-xs max-h-100 border-none bg-inherit">
                    <Card.Img
                      variant="top"
                      src="https://khamsat.hsoubcdn.com/images/services/858931/958f63c89c0b6509c32c49c5c67e8e6a.jpg"
                      className="h-40 w-full object-cover" // Increase the height here
                    />
                    <Card.Body className="h-40">
                      <a href="#" className="text-blue-900 font-bold">
                        Web Development
                      </a>
                      <Card.Text className="text-sm text-black">
                        Category/sub Category
                      </Card.Text>
                      <Card.Text className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet.
                      </Card.Text>
                      <div className="flex items-center">
                        {[...Array(5)].map((star, i) => (
                          <svg
                            key={i}
                            className="h-6 w-6 text-yellow-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        ))}
                        <span className="text-xl text-gray-500"> (7)</span>
                      </div>
                      <span className="text-gray-500 text-xl ml-1">
                        Start From 7$
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="card mt-2 p-3">
            <h2 className="card-title text-2xl font-bold">Client Reviews </h2>
            <div className="flex items-center my-1 justify-between text-yellow-500">
              <p
                className="card-text
                                    text-gray-700 mr-2
                                    font-bold
                                    "
              >
                Communication and follow-up
              </p>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="flex items-center my-1 justify-between text-yellow-500">
              <p
                className="card-text
                                    text-gray-700 mr-2
                                    font-bold
                                    "
              >
                Delivery on time{" "}
              </p>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="flex items-center my-1 justify-between text-yellow-500">
              <p
                className="card-text
                                    text-gray-700 mr-2
                                    font-bold
                                    "
              >
                Quality service
              </p>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                className="w-12 h-12 rounded-full"
                alt="client"
              />
              <div className="ml-2 mt-4 w-1/2">
                <p className="card-text text-gray-700 font-bold">
                  mahmoud saad
                </p>
                <p className="card-text w-1/2 text-gray-700 flex justify-between items-center ">
                  <span className="flex items-center ">
                    <IoIosMan />
                    <span>Buyer</span>
                  </span>
                  <span className="flex items-center ">
                    {" "}
                    <IoTimeOutline />
                    <span>two months ago</span>
                  </span>
                </p>
                <p>Thanks</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="sideSec col-xl-4 bg-zinc-200">
          <div className="card mt-2">
            <div className="card-body p-4 ">
              <h2 className="card-title text-2xl font-bold">Card service</h2>
              <hr className="bg-gray-300" />
              <div className="flex items-center my-4 justify-between text-yellow-500">
                <p
                  className="card-text
                                    text-gray-700 mr-2
                                    font-bold
                                    "
                >
                  Rating
                </p>
                <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card-text text-gray-700 ml-2 ">(2)</p>
              </div>

              <div className="flex items-center justify-between  my-4 ">
                <p className="card-text text-gray-700 mr-2 font-bold">
                  Response time
                </p>
                <p className="card-text text-gray-700">20 hours</p>
              </div>
              <div className="flex items-center justify-between  my-4 ">
                <p className="card-text text-gray-700 mr-2 font-bold">Buyers</p>
                <p className="card-text text-gray-700">6</p>
              </div>
              <div className="flex items-center justify-between  my-4 ">
                <p className="card-text text-gray-700 mr-2 font-bold">
                  Orders in progress
                </p>
                <p className="card-text text-gray-700">0</p>
              </div>
              <div className="flex items-center justify-between  my-4 ">
                <p className="card-text text-gray-700 mr-2 font-bold">
                  Service price starts from
                </p>
                <p className="card-text text-gray-700">$7.00</p>
              </div>
              <div className="flex items-center justify-between  my-4 ">
                <p className="card-text text-gray-700 mr-2 font-bold">
                  Delivery time
                </p>
                <p className="card-text text-gray-700">1 day</p>
              </div>
            </div>
            <hr className="bg-gray-300" />

            <div className="card-body p-4 ">
              <h2 className="card-title text-2xl font-bold">Service owner</h2>
              <div className="flex items-center justify-between  my-4 ">
                <div className="flex items-center">
                  <img
                    src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                    className="w-12 h-12 rounded-full"
                    alt="Owner"
                  />
                  <div className="ml-2">
                    <p className="card-text text-gray-700 font-bold">
                      Ahmed Zena
                    </p>
                    <p className="card-text text-gray-700 flex justify-center items-center ">
                      <AiFillSafetyCertificate />
                      <span>
                        Verified identity
                        {/* Ver */}
                      </span>
                    </p>
                  </div>
                </div>
                {/* contact freelancer */}
                <button className="border-2  border-green-500  hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded">
                  Chat with Me
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-2">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/73/26/hundred-percent-guarantee-word-of-green-leaves-vector-1607326.jpg"
              className=" rounded-lg"
              alt="guarantee"
            />
          </div>
          <div className="card mt-2 p-4">
            <h2 className="card-title text-xl font-bold">Share service</h2>
            <hr className="bg-gray-300" />
            <div
              className="flex justify-between
                w-full mt-4
                "
            >
              <FaFacebookSquare className="w-8 h-8" />
              <FaLinkedin className="w-8 h-8" />
              <FaTelegram className="w-8 h-8" />
              <FaWhatsapp className="w-8 h-8" />
              <FaTwitterSquare className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
