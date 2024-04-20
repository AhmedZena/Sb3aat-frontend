import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/courses/category/${categoryId}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/subCategories/`)
      .then((response) => {
        // Assuming the response data is an array or an object with a property named 'subCategories'
        // Make sure to adjust this based on the actual response structure
        if (Array.isArray(response.data)) {
          setSubCategory(response.data);
        } else if (
          response.data.subCategories &&
          Array.isArray(response.data.subCategories)
        ) {
          setSubCategory(response.data.subCategories);
        } else {
          console.error(
            "Unexpected response format for subcategories:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex w-full p-3 pb-64 bg-zinc-200">
      <div className="hidden text-gray-900 sm:flex-col sm:flex sm:w-1/4 sm:p-5 sm:bg-zinc-200">
        <h1 className="mb-5 text-2xl font-bold">Sub Categories</h1>
        <div className="mt-3">
          <div class="flex items-center justify-center">
            <input
              type="search"
              class="w-full px-4 py-2 mt-2 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-700"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {subcategory.map((sub) => (
          <ul key={sub._id} className="list-none ">
            <li className="mt-3 font-bold hover:text-green-600">
              <Link to={`/courses/${sub._id}`}>{sub.name}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="container mx-auto mt-5">
        <div className="text-white bg-gray-900">
          <div className="container h-[300px] mx-auto">
            <h1 className="p-10 mx-auto text-6xl font-bold border-b-4 border-b-orange-400">Courses</h1>
            
          </div>
        </div>

        <Row xs={1} md={2} lg={3} className="mt-16 g-4">
          {filteredCourses.map((course) => (
            <Col key={course._id}>
              <Card className="p-3 pb-4 bg-white border-none shadow-xl max-w-100 max-h-100">
                <Card.Img
                  variant="top"
                  src={course.CourseImg}
                  className="object-cover h-64 w-100"
                />
                <Card.Body className="flex flex-col justify-around h-80">
                  <Link
                    to={`/courses/${course._id}`}
                    className="text-decoration-none"
                  >
                    <div href="#" className="text-3xl font-bold text-blue-900">
                      {course.title}
                    </div>
                  </Link>
                  <Card.Text className="font-bold text-l">
                    {course.description}
                  </Card.Text>
                  <Card.Text className="text-gray-600 text-l">
                    {course.category}
                  </Card.Text>
                  <div className="flex items-center">
                    <span className="text-xl text-yellow-500">
                      {" "}
                      ({course.price}$)
                    </span>
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
                  <meter
                    value="50"
                    min="0"
                    max="100"
                    className="w-full mt-3 "
                  ></meter>
                  <div className="mt-3 text-xl text-center bg-green-500 rounded-3xl hover:text-white hover:scale-110 ">
                    <Link to={`/course/${course._id}`}>Start Course</Link>
                  </div>{" "}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
