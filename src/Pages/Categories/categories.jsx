import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap p-5 mb-5 bg-zinc-300">
      <h1 className="p-2 mx-5 text-4xl font-bold text-black ring-white ring rounded-xl">
        categories
      </h1>
      <Row xs={1} md={2} lg={4} className="m-4 g-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Link
              to={`/subCategories/${category._id}`}
              className="text-decoration-none"
            >
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={category.CatImgSrc}
                  className=" h-52"
                />

                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-2xl text-center underline">
                      {category.Name}
                    </Card.Title>
                    <Card.Text className="font-bold text-center">
                      {category.Description}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
