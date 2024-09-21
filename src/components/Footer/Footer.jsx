import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const socialLinks = [
  { href: "https://www.facebook.com/kapil.jaiswal2", icon: <FaFacebook size={30} /> },
  { href: "https://www.linkedin.com/in/kapiljaiswal82/", icon: <FaLinkedin size={30} /> },
  { href: "https://github.com/kapil0jaiswal", icon: <FaGithub size={30} /> },
  { href: "https://www.instagram.com/kapil_jaisvval/", icon: <FaInstagram size={30} /> },
  { href: "https://wa.me/+91-8359030051?text=Hi%20kapil%20visited%20your%20website%20wanna%20connect%3F%0A", icon: <BsWhatsapp size={30} /> },
];

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--background)', padding: '20px 0 40px 0' }}>
    <Container>
      <Row className="text-center">
        <Col>
          <h5>Follow Us</h5>
          <div>
            {socialLinks.map(({ href, icon }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }} className='iconsSkill'>
                {icon}
              </a>
            ))}
          </div>
          <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} Kapil Jaiswal. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
