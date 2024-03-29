import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { IoIosMan } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import axios from "axios";

export default function Service() {
  const [service, setService] = useState({});
  const [owner, setOwner] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceResponse = await axios.get(`https://sb3aat.onrender.com/api/services/service/${id}`);
        console.log(serviceResponse.data);
        setService(serviceResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchOwner = async () => {
      try {
        const ownerResponse = await axios.get(`https://sb3aat.onrender.com/api/auth/getUserById/${service.freelancerId}`);
        console.log(ownerResponse.data);
        setOwner(ownerResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchService();
    if (service.freelancerId) {
      fetchOwner();
    }
  }, [id, service.freelancerId]);

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <h2 className="m-5 text-3xl">{service.title}</h2>
          <div className="flex items-center">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Order Now
            </button>
            <Link to={`/message/${service.freelancerId}`}>
              <button className="px-4 py-2 ml-4 font-bold text-white bg-green-500 rounded hover:bg-green-700">
                Chat with Seller
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="content-center mx-auto mt-2 center d-flex row">
        {/* left side */}
        <div className="mainSec col-xl-8 bg-zinc-200">
          <div className="p-3 mt-2 card">
            <img
              src={service.serviceImgSrc}
              className="rounded-lg w-full h-[900px] "
              alt="guarantee"
            />
            <p className="mt-10 mb-10 text-3xl font-bold text-center ">{service.description}</p>
          </div>
          <div className="p-3 mt-2 card">
            <h2 className="text-2xl font-bold card-title">Buy The service</h2>
            <div className="p-4 mx-auto card-body">
              <form className="flex items-center max-w-sm gap-3">
                <p htmlFor="countries" className="text-lg font-medium text-gray-900 ">
                  Nums Ordered
                </p>
                <select
                  id="countries"
                  className="p-2 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <p className="text-lg font-medium text-gray-900 ">
                  Cost:
                  <span>7$</span>
                </p>
              </form>
            </div>
            <button className="w-1/3 px-4 py-3 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Order Now
            </button>
          </div>

          <div className="p-3 mt-2 card">
            <Row xs={1} md={2} lg={3} className="g-4">
              {/* Assuming you'll loop through an array of services */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Col key={index}>
                  <Card className="max-w-xs border-none max-h-100 bg-inherit">
                    <Card.Img
                      variant="top"
                      src="https://khamsat.hsoubcdn.com/images/services/858931/958f63c89c0b6509c32c49c5c67e8e6a.jpg"
                      className="object-cover w-full h-30" // Increase the height here
                    />
                    <Card.Body className="h-40">
                      <a href="#" className="font-bold text-blue-900">
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
                            className="w-6 h-6 text-yellow-500 fill-current"
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
                      <span className="ml-1 text-xl text-gray-500">
                        Start From 7$
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="p-3 mt-2 card">
            <h2 className="text-2xl font-bold card-title">Client Reviews </h2>
            <div className="flex items-center justify-between my-1 text-yellow-500">
              <p className="mr-2 font-bold text-gray-700 card-text ">
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
            <div className="flex items-center justify-between my-1 text-yellow-500">
              <p className="mr-2 font-bold text-gray-700 card-text ">
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
            <div className="flex items-center justify-between my-1 text-yellow-500">
              <p className="mr-2 font-bold text-gray-700 card-text ">
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
              <div className="w-1/2 mt-4 ml-2">
                <p className="font-bold text-gray-700 card-text">mahmoud saad</p>
                <p className="flex items-center justify-between w-1/2 text-gray-700 card-text ">
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
          <div className="mt-2 card">
            <div className="p-4 card-body ">
              <h2 className="text-2xl font-bold card-title">Card service</h2>
              <hr className="bg-gray-300" />
              <div className="flex items-center justify-between my-4 text-yellow-500">
                <p className="mr-2 font-bold text-gray-700 card-text ">Rating</p>
                <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="ml-2 text-gray-700 card-text ">(2)</p>
              </div>

              <div className="flex items-center justify-between my-4 ">
                <p className="mr-2 font-bold text-gray-700 card-text">
                  Response time
                </p>
                <p className="text-gray-700 card-text">20 hours</p>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <p className="mr-2 font-bold text-gray-700 card-text">Buyers</p>
                <p className="text-gray-700 card-text">6</p>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <p className="mr-2 font-bold text-gray-700 card-text">
                  Orders in progress
                </p>
                <p className="text-gray-700 card-text">0</p>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <p className="mr-2 font-bold text-gray-700 card-text">
                  Service price starts from
                </p>
                <p className="text-gray-700 card-text">{service.price}$</p>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <p className="mr-2 font-bold text-gray-700 card-text">
                  Delivery time
                </p>
                <p className="text-gray-700 card-text">{service.deliveryTime} </p>
              </div>
            </div>
            <hr className="bg-gray-300" />

            <div className="p-4 card-body ">
              <h2 className="text-2xl font-bold card-title">Service owner</h2>
              <div className="flex items-center justify-between my-4 ">
                <div className="flex items-center">
                {owner && owner.profilePhoto && owner.profilePhoto.url &&(

                    <div className="ml-2">
                    <img
                      src={owner.profilePhoto.url}
                      className="w-12 h-12 rounded-full"
                      alt="Owner"
                    />
                    <p className="font-bold text-gray-700 card-text">
                      {owner.username}
                    </p>
                    <p className="flex items-center justify-center text-gray-700 card-text ">
                      <AiFillSafetyCertificate />
                      <span>
                        Verified identity
                        {/* Ver */}
                      </span>
                    </p>
                  </div>
                )}
                </div>
                {/* contact freelancer */}
                <Link to={`/message/${service.freelancerId}`}>
                  <button className="px-4 py-2 font-bold text-green-500 border-2 border-green-500 rounded hover:bg-green-500 hover:text-white">
                    Chat with Me
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-2 card">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/73/26/hundred-percent-guarantee-word-of-green-leaves-vector-1607326.jpg"
              className="rounded-lg "
              alt="guarantee"
            />
          </div>
          <div className="p-4 mt-2 card">
            <h2 className="text-xl font-bold card-title">Share service</h2>
            <hr className="bg-gray-300" />
            <div className="flex justify-between w-full mt-4 ">
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
