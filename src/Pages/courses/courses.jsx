import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";


export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full bg-zinc-200 p-3">
      <div className="bg-gray-900 text-white">
        <div className="container h-[300px] mx-auto">
          <h1 className="text-6xl font-bold p-10">My Learning</h1>
          <div className="mt-28 mx-5 pb-3">
            <Link to="/courses" className="mr-5 text-white font-bold text-lg border-b-orange-400 border-b-2">
              All Courses
            </Link>
            <Link to="/my-list" className="mr-5 text-white font-bold text-lg border-b-orange-400 border-b-2">
              My List
            </Link>
            <Link to="/archived" className="mr-5 text-white font-bold text-lg border-b-orange-400 border-b-2">
              Archived
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <div className="filters flex">
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
              <Card className="max-w-xs max-h-120 border-none bg-white shadow-xl p-4 pb-5">
                <Card.Img variant="top" src={course.CourseImg} className="h-64 w-full object-cover" />
                <Card.Body className="h-60">
                  <Link to={`/courses/${course._id}`} className="text-decoration-none">
                    <a href="#" className="text-blue-900 font-bold">
                      {course.Title}
                    </a>
                  </Link>
                  <Card.Text className="text-sm text-black">{course.Description}</Card.Text>
                  <Card.Text className="text-sm text-gray-700">Category/sub Category</Card.Text>
                  <div className="flex items-center">
                    <span className="text-xl text-yellow-500"> ({course.CategoryID})</span>
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
                  </div>
                  <meter value="50" min="0" max="100" className="mt-3 w-full "></meter>
                  <h1 className="text-xl m-5">Start Course</h1>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
