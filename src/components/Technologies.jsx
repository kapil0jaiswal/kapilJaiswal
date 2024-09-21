import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "./skill/Skill.jsx";
import { FaJava, FaReact, FaLeaf } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

const skills = [
  { Title: "JAVA", Icon: FaJava },
  { Title: "SPRING-BOOT", Icon: FaLeaf },
  { Title: "MICROSERVICES", Icon: MdOutlineMiscellaneousServices },
  { Title: "REACT", Icon: FaReact },
  { Title: "HTML", Icon: AiOutlineHtml5 },
  { Title: "CSS", Icon: DiCss3 },
  { Title: "JavaScript", Icon: SiJavascript },
  { Title: "REACT-NATIVE", Icon: TbBrandReactNative },
];

export default function Technologies() {
  return (
    <Container fluid>
      <h1 className="text-center" style={{ color: 'var(--primary-text)', margin: '2%' }}>SKILLS</h1>
      <Container className="text-center">
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3}>
              <Skill Title={skill.Title} Icon={skill.Icon} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
