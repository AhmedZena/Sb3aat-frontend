import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Services() {
  const [arr, setArr] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/services/category/${categoryId}`)
      .then((ser) => {
        console.log(ser.data);
        setArr(ser.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="mx-auto center d-flex row">
      <div className="sideSec col-xl-3 bg-zinc-200">
        <div className="mt-5">
          <h3 className="text-gray-400"> Programming / Web Development</h3>
          <h2 className="text-3xl"> Web Development</h2>
        </div>
        <div className="mt-3">
          <h2>Search</h2>
          <input
            type="search"
            className="w-full px-4 py-1 mt-2 text-gray-800 rounded-full focus:outline-none"
          />
        </div>
        <div className="mt-3">
          <h2>Parts</h2>
          <ul className="mt-4 list-unstyled">
            <li className="mt-2 hover:text-green-500 active:text-green-500">
              <a href="#">Create Web Site</a>
              <Badge bg="dark" className="ml-10">
                232
              </Badge>
            </li>
            <li className="mt-2 hover:text-green-500">
              <a href="#">Edit Web Site</a>
              <Badge bg="dark" className="ml-10">
                56
              </Badge>
            </li>
            <li className="mt-2 hover:text-green-500">
              <a href="#">Handling Errors</a>
              <Badge bg="dark" className="ml-10">
                80
              </Badge>
            </li>
          </ul>
        </div>
      </div>

      <div className="mainSec col-xl-9 bg-zinc-200">
        <div className="m-10 mt-10">
          <Dropdown>
            <Dropdown.Toggle
              className="text-green-500"
              variant="success"
              id="dropdown-basic"
            >
              Special services
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Special Service</Dropdown.Item>
              <Dropdown.Item href="#/action-2">New service</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Assuming you'll loop through an array of services */}
          {arr.map((item, index) => (
            <Link to={`/services/${item._id}`}>
              <Col key={index}>
                <Card className="max-w-xs bg-white border-none shadow-xl max-h-300">
                  <Card.Img
                    variant="top"
                    src={item.serviceImgSrc}
                    className="object-cover w-full h-48"
                  />
                  <Card.Body className="h-60 flex flex-col justify-between">
                    <a href="#" className="font-bold text-blue-900">
                      {item.title}
                    </a>
                    <Card.Text className="text-sm text-black">
                      Category/sub Category
                    </Card.Text>
                    <Card.Text className="text-xs text-gray-700">
                      {item.description}
                    </Card.Text>
                    <div className="flex items-center">
                      <span className="text-xl text-yellow-500"> (7)</span>
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
                    </div>
                    <span className="ml-1 text-2xl text-yellow-500">
                      Start From {item.price}$
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>

        <div className="mb-3 text-2xl Description">
          <h2 className="mt-5 mb-3 font-mono text-3xl font-bold text-center">
            Hire the best developers to create an integrated website that
            enhances the success of your business
          </h2>
          <p className="text-center text-gray-700">
            If you want to create a website for your commercial project, Khamsat
            is the most appropriate destination that helps you obtain the
            services of professional developers to create an integrated,
            professional website from A to Z without the need for any complex
            programming background.
          </p>

          <div className="mt-3 ">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                What are website creation services?
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <p>
                    It is a service provided by one of the professional sellers
                    within the Khamsat website, and it consists of creating a
                    platform that manages your content on the Internet using
                    modern and well-known systems.
                  </p>
                  <li>Install your website on your hosting server.</li>
                  <li>
                    Install great free templates on the website, and you can
                    install paid templates.
                  </li>
                  <li>
                    Create all the important pages of the site, for example:
                    About Us, Our Services, Our Features, Our Mission, Privacy
                    Policy, etc.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                What are the benefits of hiring professional developers?
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    Access to expertise and experience in web development.
                  </li>
                  <li>Quality assurance and timely delivery of projects.</li>
                  <li>Customized solutions tailored to your specific needs.</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                What are website creation services?
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Review their portfolio and past projects.</li>
                  <li>Check client testimonials and reviews.</li>
                  <li>Assess their technical skills and expertise.</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
