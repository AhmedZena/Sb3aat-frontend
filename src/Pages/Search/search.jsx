


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

export default function Search() {
  const {searchWord="" } = useParams();
  const [searchTerm, setSearchTerm] = useState(searchWord);
  const [services, setServices] = useState([]);
  const [courses, setCourses] = useState([]);
 
  console.log(searchWord);
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      axios
        .get(`https://sb3aat.onrender.com/api/search/${searchTerm}`)
        .then((response) => {
          setServices(response.data.services);
          setCourses(response.data.courses);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      axios
        .get(`https://sb3aat.onrender.com/api/search/${searchTerm}`)
        .then((response) => {
          setServices(response.data.services);
          setCourses(response.data.courses);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  return (
    <>
      <div className="mx-auto center d-flex row">
        <div className="sideSec col-xl-3 bg-zinc-200">
          <div className="mt-5">
            <h3 className="text-gray-400"> Programming / Web Development</h3>
            <h2 className="text-3xl"> Web Development</h2>
          </div>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -ml-2 block w-auto text-lg min-w-0 flex-auto rounded-l border border-solid  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 p-1"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/search-results">
              <button
                className="relative z-[2] rounded-r border-2 border-green-500 px-6 py-2  font-medium uppercase text-white  bg-green-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                onClick={handleSearch}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
        <div className="mainSec col-xl-9 bg-zinc-200">
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* عرض خدمات */}
            {services.map((service, index) => (
              <Link to={`/service/${service._id}`} key={index}>
                <Col>
                  <Card className="max-w-xs bg-white border-none shadow-xl max-h-300">
                    <Card.Img
                      variant="top"
                      src={service.serviceImgSrc}
                      className="object-cover w-full h-48"
                    />
                    <Card.Body>
                      <Link
                        to={`/service/${service._id}`}
                        className="font-bold text-blue-900"
                      >
                        {service.title}
                      </Link>
                      <Card.Text>{service.description}</Card.Text>
                      <span>Start From {service.price}$</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            ))}
            {/* عرض دورات */}
            {courses.map((course, index) => (
              <Link to={`/course/${course._id}`} key={index}>
                <Col>
                  <Card className="max-w-xs bg-white border-none shadow-xl max-h-300">
                    <Card.Img
                      variant="top"
                      src={course.CourseImg}
                      className="object-cover w-full h-48"
                    />
                    <Card.Body>
                      <Link
                        to={`/courses/${course._id}`}
                        className="font-bold text-blue-900"
                      >
                        {course.title}
                      </Link>
                      <Card.Text>{course.description}</Card.Text>
                      <span>Start From {course.price}$</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}




























































































































