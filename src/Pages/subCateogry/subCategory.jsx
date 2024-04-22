import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";

export default function SubCategory() {
  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState({});
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/subCategories/category/${categoryId}`
      )
      .then((response) => {
        console.log(response.data);
        // Check if response data contains subCategories array before setting state
        if (Array.isArray(response.data)) {
          setSubCategories(response.data[0]);
        } else {
          console.error("Subcategories data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  useEffect (() => {
    axios.get(  `https://sb3aat.onrender.com/api/categories/${categoryId}`).then((response) => {
      setCategory(response.data.category)
      console.log(response.data.category)
    })
  },[])

  return (
    <>
   

      <div className="items-center content-center text-center">
        <h1 className="mt-4 text-4xl">{ category.Name}</h1>
        <h3 className="mt-3 mb-10 text-3xl text-gray-400 ">
         {category.Description}
        </h3>
  
      </div>
      <div className="p-5 mb-5 bg-zinc-300">
        <h1 className="text-3xl font-bold text-center text-green-700 uppercase ">
          Sub Categories
        </h1>
        <Row xs={1} md={2} lg={4} className="m-4 g-4">
          {subCategories.map((subCategory, index) => (
            <Col key={index}>
              <Card className="transition ease-out h-100 d-flex flex-column hover:scale-105 hover:cursor-pointer">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Img
                    variant="top"
                    src={subCategory.subCatImgSrc}
                    className="w-full h-52"
                  />
                  <Card.Title className="mx-auto mt-10 mb-3 font-bold">{subCategory.name}</Card.Title>
                  <Card.Text className="mb-3">{subCategory.description}</Card.Text>
                  <div className="flex gap-3 mx-auto">
                    <Link to={`/courses/${subCategory._id}`}>
                      <Button variant="outline-success" className="mt-3 mb-3 font-bold text-white bg-green-900">
                        Courses
                      </Button>
                    </Link>
                    <Link to={`/services/${subCategory._id}`}>
                      <Button variant="outline-success" className="mt-3 font-bold text-white bg-green-900">
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
