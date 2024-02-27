import React, { useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function SubCategory() {
    useEffect(() => {
        axios.get("https://example.com/api/subcategories")
            .then(response => {
                // handle response
            })
            .catch(error => {
                // handle error
            });
    }, []);

    return (
        <>
            <div className="container contents bg-zinc-900 text-black text-center">
                <h1 className="mt-5 mb-12">Sub Category</h1>
            </div>

            <div className="text-center items-center content-center">
                <h1 className="mt-4 text-4xl">Sub Category Name</h1>
                <h3 className="text-gray-400 text-xl mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro?
                </h3>
                <Button variant="contained" color="success" className="hover:bg-green-500 mt-3 mb-5 bg-green-600">
                    How 7 Works
                </Button>
            </div>
            <div className=" bg-zinc-300 mb-5 p-5">
                <h1 className=" text-green-500 text-center text-3xl font-bold"> Popular programming and development categories</h1>
                <Row xs={1} md={2} lg={4} className="g-4 m-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                    <Card.Title>Special title Sub</Card.Title>
                                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <div className="flex gap-3">
                                    <Link to="/courses">
                                        <Button variant="outline-success" className=" mt-3">Courses</Button>
                                    </Link>
                                    <Link to="/services">
                                        <Button variant="outline-success" className=" mt-3">Services</Button>
                                    </Link>
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}
