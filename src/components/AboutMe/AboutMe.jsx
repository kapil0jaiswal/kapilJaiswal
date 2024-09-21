import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import { FaAward } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div>
      <Container fluid>
        <h1 className="text-center" style={{ color: "var(--primary-text)" }}>
          About Me
        </h1>
        <Container fluid>
          <Row >
            <Col md={6} xs={12} className="cardContainer">
              <Card className="m-4 p-2 cardEx">
                <h6 style={{ color: "var(--primary-text)" }} className="text-center">Experience</h6>
                <div className="mx-auto">
                  <h6 style={{ color: "var(--primary-text)" }}>4.5 yrs</h6>
                  <FaAward size={40} style={{ color: "var(--primary-text)" }} />
                </div>
                <Card.Body >
                  <p className="educationText" style={{ color: "var(--primary-text)" }}>
                I am a dedicated Software Developer using Spring Framework, Java
                8, and cutting-edge technologies like JPA, JWT, and Spring Boot.
                With a strong foundation in OOP concepts, data structures, and
                collection frameworks, I have delivered robust, scalable
                applications. My expertise spans across the full Software
                Development Life Cycle (SDLC), from designing efficient
                solutions to implementing APIs and managing version control with
                GIT and Maven. I excel in debugging and testing with tools like
                Chrome Dev Tools, IntelliJ, Selenium, and JUnit, ensuring
                top-notch code quality through thorough code reviews using
                SonarQube and Lint.
                </p>
                <div className="steam" id="steam1">
              {" "}
            </div>
            <div className="steam" id="steam2">
              {" "}
            </div>
            <div className="steam" id="steam3">
              {" "}
            </div>
            <div className="steam" id="steam4">
              {" "}
            </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="m-4 p-2 cardEx">
                <h6
                  style={{
                    color: "var(--primary-text)",
                    textAlign: "center",
                    fontWeight :'Bold'
                  }}
                >
                  Education
                </h6>
                <Card.Body>
                  <ul className="educationText">
                    <li>
                      <h6>MAHARISHI INSTITUE </h6>
                      <p>MCA JULY 2019 | Bhopal,MP</p>
                    </li>
                    <li>
                      <h6>BSSS Bhopal</h6>
                      <p>BCOM(Computers) MAY 2016 | Bhopal, MP</p>
                    </li>
                  </ul>
                  <div className="steam" id="steam1">
              {" "}
            </div>
            <div className="steam" id="steam2">
              {" "}
            </div>
            <div className="steam" id="steam3">
              {" "}
            </div>
            <div className="steam" id="steam4">
              {" "}
            </div>
                </Card.Body>
              </Card>
              <Card className="m-4 p-2 cardEx">
                <h6
                  style={{
                    color: "var(--primary-text)",
                    textAlign: "center",
                    fontWeight :'Bold'
                  }}
                >
                  Companies
                </h6>
                <Card.Body>
                  <ul className="educationText">
                    <li>
                      <h6 style={{fontWeight :'Bold'}}>Vensaii ,Inc </h6>
                      <p style ={{paddingTop:'2%'}}>- SOFTWARE ENGINEER Jan 2020 – Feb 2021 | Vizag, AP</p>
                    </li>
                    <li>
                      <h6 style={{fontWeight :'Bold'}}>BRIQ</h6>
                      <p>- SENIOR SOFTWARE ENGINEER Dec 2023 - Present | Pune, MH</p>
                      <p>- SOFTWARE ENGINEER Feb 2021 - Dec 2023 | Pune, MH</p>
                    </li>
                  </ul>
                  <div className="steam" id="steam1">
              {" "}
            </div>
            <div className="steam" id="steam2">
              {" "}
            </div>
            <div className="steam" id="steam3">
              {" "}
            </div>
            <div className="steam" id="steam4">
              {" "}
            </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <br/>
    </div>
  );
}
