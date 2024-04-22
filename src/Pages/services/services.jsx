import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { InputGroup, FormControl as BootstrapFormControl } from "react-bootstrap";

export default function Services() {
  const [services, setServices] = useState([]);
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/services/category/${categoryId}`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/subCategories/`)
      .then((response) => {
        // Assuming the response data is an array or an object with a property named 'subCategories'
        // Make sure to adjust this based on the actual response structure
        if (Array.isArray(response.data)) {
          setSubCategory(response.data);
        } else if (response.data.subCategories && Array.isArray(response.data.subCategories)) {
          setSubCategory(response.data.subCategories);
        } else {
          console.error("Unexpected response format for subcategories:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  // Filter services based on search input
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <div className="w-1/4 p-5 text-gray-900 bg-zinc-200">
        <h1 className="mb-5 text-2xl font-bold">Sub Categories</h1>
        <div className="mt-3">
          <InputGroup className="w-full mb-3">
            <BootstrapFormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>
        {subcategory.map((sub) => (
          <ul key={sub._id} className="list-none ">
            <li className="mt-3 font-bold hover:text-green-600">
              <Link  to={`/services/${sub._id}`}>{sub.name}</Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full p-3 bg-zinc-200">
        <div className="text-white bg-gray-900">
          <div className="container h-[300px] mx-auto">
            <h1 className="p-10 text-6xl font-bold">My Services</h1>
            <div className="pb-3 mx-5 mt-28">
              <h2
                to="/services"
                className="mr-5 text-2xl font-bold text-white border-b-2 border-b-orange-400"
              >
                All Services
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5 mb-10 pb-28">

          <Row xs={1} md={2} lg={4} className="g-4">
            {filteredServices.map((service, index) => (
              <Col key={index}>
                <Card className="p-4 pb-5 bg-white border-none shadow-xl max-w-100 max-h-120">
                  <Card.Img
                    variant="top"
                    src={service.serviceImgSrc}
                    className="object-cover h-64 w-100"
                  />
                  <Card.Body className="flex flex-col justify-around h-80">
                    <Link to={`/service/${service._id}`} className="text-decoration-none">
                      <div href="#" className="text-3xl font-bold text-blue-900">
                        {service.title}
                      </div>
                    </Link>
                    <Card.Text className="font-bold text-l">{service.description}</Card.Text>
                    <div className="flex items-center">
                      <span className="text-xl text-yellow-500"> ({service.price}$)</span>
                    </div>
                    <div className="mt-3 w-[250px] p-2 text-white font-bold mx-auto ease-out transition text-xl text-center bg-green-700 rounded-3xl hover:text-white hover:scale-110 ">
                      <Link to={`/service/${service._id}`}>View Service</Link>
                    </div>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
