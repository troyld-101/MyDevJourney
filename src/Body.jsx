import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

function Body() {
  return (
    <Container fluid>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image src="https://picsum.photos/900/400" fluid rounded />
        </Col>
        <Col sm={5}>
          <h1 className="font-wight-light">My Learning</h1>
          <h4>
            Here, I'm going to show you some of the technologies I have picked
            up so far. This is only the beginning. I have so much more to learn!
            My 1st few techologies was VS Code, HTML, CSS, Developer Tools and
            JavaScript.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
