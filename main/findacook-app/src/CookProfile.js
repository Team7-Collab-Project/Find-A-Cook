import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
} from "react-bootstrap";

const CookProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Image id="profileAvater" style={{width:"280px", height:"280px"}}src="./images/man.png" roundedCircle />
        </Col>
        <Col xs={9}>
          <h1>Name</h1>
          <a href="#">Facebook</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">Twitter</a>
          <br />
          <Badge variant="secondary">4.5 stars</Badge>
          <br />
          <p>Number of Reviews: 5</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque, justo euismod egestas tempor, libero libero iaculis
            purus, quis convallis enim mi ac magna.
          </p>
          <Button>Order</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Items</h2>
          <Card>
            <Card.Header>
              <Image src="item1.jpg" />
            </Card.Header>
            <Card.Body>
              <Image src="item2.jpg" />
            </Card.Body>
            <Card.Footer>
              <Image src="item3.jpg" />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CookProfile;
