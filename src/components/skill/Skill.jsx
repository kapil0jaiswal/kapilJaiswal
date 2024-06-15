import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Skill() {
  return (
    <Container>
      <Card className ="bg-card" >
        <div className="intro-message">
          <h2>This website is currently down for maintenance.</h2>
          <hr className="intro-divider" />
          <Card.Body>
          <h3>
            In the meantime, you can find us on these social media platforms.
          </h3>
          <Row className="socials">
            <Col xs={12} md={3}>
              <a
                href="https://www.facebook.com/kapil.jaiswal2"
                className="btn btn-default btn-lg"
              >
                <i className="bi bi-facebook"></i>{" "}
                <span className="network-name">Facebook</span>
              </a>
            </Col>
            <Col xs={12} md={3}>
              <a
                href="https://wa.me/8359030051"
                className="btn btn-default btn-lg"
              >
                <i class="bi bi-whatsapp"></i>{" "}
                <span className="network-name">Whatsapp</span>
              </a>
            </Col>
            <Col xs={12} md={3}>
              <a
                href="https://github.com/kapil0jaiswal"
                className="btn btn-default btn-lg"
              >
                <i class="bi bi-github"></i>{" "}
                <span className="network-name">Github</span>
              </a>
            </Col>
            <Col xs={12} md={3}>
              <a
                href="https://www.instagram.com/kapil_jaisvval/"
                className="btn btn-default btn-lg"
              >
               <i class="bi bi-instagram"></i>{" "}
                <span className="network-name">Instagram</span>
              </a>
            </Col>
          </Row>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}
