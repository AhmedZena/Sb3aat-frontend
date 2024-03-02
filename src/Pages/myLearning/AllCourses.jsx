import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap'; 

export default function AllCourses() {
    useEffect(() => {
        axios
            .get("https://sb3aat.onrender.com/api/courses")
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  return (
    <>
        <div>AllCourses</div>
    <div className="content-center center d-flex row">
            <div className="sideSec col-xl-3 bg-zinc-200">
                <div className="mt-5">
                    <h3 className="text-gray-400">Programming / Web Development</h3>
                    <h2 className="text-3xl">Web Development</h2>
                </div>
            </div>

            <div className="mainSec col-xl-9 bg-zinc-200">
                <div className="m-10 mt-10">
                    {/* Dropdown and other main content */}
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {courses.map(course => (
                        <Col key={course._id}>
                            <Link to={`/courses/${course._id}`} className="text-decoration-none">
                                <Card className="max-w-xs max-h-100 border-none bg-white shadow-xl p-4">
                                    <Card.Img
                                        variant="top"
                                        src={course.CourseImg}
                                        className="h-64 w-full object-cover"
                                    />
                                    <Card.Body className="h-40">
                                        <a href="#" className="text-blue-900 font-bold">
                                            {course.Title}
                                        </a>
                                        <Card.Text className="text-sm text-black">{course.Description}</Card.Text>
                                        <Card.Text className="text-sm text-gray-700">Category/sub Category</Card.Text>
                                        {/* Additional course information */}
                                        <div className="flex items-center">
                                            <span className="text-xl text-yellow-500"> ({course.CategoryID})</span>
                                            {/* Star ratings */}
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
                                        <span className="text-yellow-500 text-2xl ml-1">Start From ${course.Price}</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>

                {/* Additional description */}
                <div className="Description mb-3 text-2xl">
                    {/* Accordion content */}
                </div>
            </div>
        </div>

    </>

  )
}
