import React from "react";
import profile from "../../assets/Kapil-Profile.png";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Welcome() {
  return (
    <Container fluid>
      <Row
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-end py-5"
        >
          <div className="appearscrabble">
            
            <h2 className="devdescription">Hi I am </h2>
            <h1 className="devname">KAPIL JAISWAL</h1>
            <h2 className="devdescription">Full stack Developer </h2>
            <div class="steam" id="steam1">
              {" "}
            </div>
            <div class="steam" id="steam2">
              {" "}
            </div>
            <div class="steam" id="steam3">
              {" "}
            </div>
            <div class="steam" id="steam4">
              {" "}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          {/* <img src={profile} alt="kapil" className="profile" />
           */}
          <div className="profile-container">
            <img
              src={profile}
              alt="Profile Picture"
              className="profile-picture"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
