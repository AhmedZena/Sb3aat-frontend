import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function Categories() {
  console.log("categories");
  return (
    <div className=" bg-zinc-300 mb-5 p-5">
      <h1 className=" text-green-500 text-center text-3xl font-bold">
        {" "}
        Popular programming and development categories
      </h1>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Col key={i}>
            <Card>
              <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                <Card.Title>Special title Sub</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="outline-success" className="w-50 mt-3">
                  Go
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
