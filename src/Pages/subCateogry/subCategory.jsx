import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";

export default function SubCategory() {
  const [subCategories, setSubCategories] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/subCategories/category/${categoryId}`)
      .then((response) => {
        // Check if response data contains subCategories array before setting state
        if (Array.isArray(response.data.subCategories)) {
          setSubCategories(response.data.subCategories);
        } else {
          console.error("Subcategories data is not an array:", response.data.subCategories);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  
  return (
    <>
      <div className="container text-center text-black contents bg-zinc-900">
        <h1 className="mt-5 mb-12">Sub Category</h1>
      </div>

      <div className="items-center content-center text-center">
        <h1 className="mt-4 text-4xl">Sub Category Name</h1>
        <h3 className="mt-3 text-xl text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro?
        </h3>
        <Button
          variant="contained"
          color="success"
          className="mt-3 mb-5 bg-green-600 hover:bg-green-500"
        >
          How 7 Works
        </Button>
      </div>
      <div className="p-5 mb-5 bg-zinc-300">
        <h1 className="text-3xl font-bold text-center text-green-500 ">
          Sub Categories
        </h1>
        <Row xs={1} md={2} lg={4} className="m-4 g-4">
          {subCategories.map((subCategory, index) => (
            <Col key={index}>
              <Card className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Img variant="top" src={subCategory.subCatImgSrc} className="w-full h-80" />
                  <Card.Title>{subCategory.name}</Card.Title>
                  <Card.Text>{subCategory.description}</Card.Text>
                  <div className="flex gap-3">
                    <Link to={`/courses/${subCategory._id}`}>
                      <Button variant="outline-success" className="mt-3">
                        Courses
                      </Button>
                    </Link>
                    <Link to={`/services/${subCategory._id}`}>
                      <Button variant="outline-success" className="mt-3">
                        Services
                      </Button>
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
