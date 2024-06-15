import React from "react";
import profile from "../../assets/Kapil.jpeg";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Welcome() {
  return (
    <Container fluid>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="devname">KAPIL JAISWAL</h1>
          <h2 className="devdescription">Hi I am a Full stack Developer </h2>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={profile} alt="kapil" className="profile" rounded />
        </Col>
      </Row>
    </Container>
  );
}
