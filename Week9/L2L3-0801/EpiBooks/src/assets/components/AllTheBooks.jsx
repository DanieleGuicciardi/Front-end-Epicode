import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import fantasyBooks from "../libri/fantasy.json";

const Books = function () {
  return (
    <Container fluid>
      <Row>
        <h1 className="d-flex justify-content-between mt-4">
          Fantasy Books <i className="bi bi-caret-down-fill"></i>
        </h1>
        <hr />
        {fantasyBooks.map((book) => (
          <Col md={2} xs={6} className="my-2" key={book.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} className="h-75" />
              <Card.Body>
                <Card.Title className="fs-6">{book.title}</Card.Title>
                <Card.Text>Category: {book.category}</Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Button variant="success">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Books;
