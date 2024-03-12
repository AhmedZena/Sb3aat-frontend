import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const { categoryId } = useParams();

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

  return (
    <div className="w-full p-3 bg-zinc-200">
      <div className="text-white bg-gray-900">
        <div className="container h-[300px] mx-auto">
          <h1 className="p-10 text-6xl font-bold">My Learning</h1>
          <div className="pb-3 mx-5 mt-28">
            <Link
              to="/courses"
              className="mr-5 text-lg font-bold text-white border-b-2 border-b-orange-400"
            >
              All Courses
            </Link>
            <Link
              to="/my-list"
              className="mr-5 text-lg font-bold text-white border-b-2 border-b-orange-400"
            >
              My List
            </Link>
            <Link
              to="/archived"
              className="mr-5 text-lg font-bold text-white border-b-2 border-b-orange-400"
            >
              Archived
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <div className="flex filters">
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Sort by"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Recent add</MenuItem>
                <MenuItem value={20}>Price</MenuItem>
                <MenuItem value={30}>Total hours</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Categories"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"web"}>web</MenuItem>
                <MenuItem value={"Devops"}>Devops</MenuItem>
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <Row xs={1} md={2} lg={4} className="g-4">
          {courses.map((course) => (
            <Col key={course._id}>
              <Card className="max-w-xs p-4 pb-5 bg-white border-none shadow-xl max-h-120">
                <Card.Img
                  variant="top"
                  src={course.CourseImg}
                  className="object-cover w-full h-64"
                />
                <Card.Body className="h-41">
                  <Link to={`/courses/${course._id}`} className="text-decoration-none">
                    <div href="#" className="text-3xl font-bold text-blue-900">
                      {course.title}
                    </div>
                  </Link>
                  <Card.Text className="font-bold text-l">{course.description}</Card.Text>
                  <Card.Text className="text-gray-600 text-l">{course.category}</Card.Text>
                  <div className="flex items-center">
                    <span className="text-xl text-yellow-500"> ({course.price}$)</span>
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
                  <meter value="50" min="0" max="100" className="w-full mt-3 "></meter>
                  <div className="mt-3 text-xl text-center bg-green-500 rounded-3xl hover:text-white hover:scale-110 ">
                    <Link to={`/courses/${course._id}`}>Start Course</Link>
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
