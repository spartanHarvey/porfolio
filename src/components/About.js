import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Jorge_Ngimbi_resume from "../Jorge_Ngimbi_resume.pdf";
function About() {
  return (
    <Container id="about" className="container-fluid  min-vh-100 mx-auto mt-3">
      <div
        className="position-absolute d-none d-lg-block  d-xl-none overflow-hidden"
        style={{ opacity: 0.1, width: "40%", left: "55%", top: "-20%" }}
      >
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(2, 0, 36, 1)" offset="0%"></stop>
              <stop
                id="stop2"
                stopColor="rgba(51, 75, 124, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M25.7,-26.5C32.2,-19.2,35.5,-9.6,36.1,0.7C36.8,11,34.9,22,28.5,29.7C22,37.5,11,41.9,1,40.9C-9,39.8,-17.9,33.3,-25.6,25.6C-33.3,17.9,-39.8,9,-40.1,-0.3C-40.5,-9.7,-34.7,-19.3,-27,-26.6C-19.3,-33.9,-9.7,-38.8,0,-38.8C9.6,-38.8,19.2,-33.8,25.7,-26.5Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "all 0.3s ease 0s" }}
          ></path>
        </svg>
      </div>
      <Row className="position-relative  d-flex justify-content-start align-items-center">
        <Col className="mx-auto " xs={10} sm={8} md={9} lg={6}>
          <Image
            src="profile.jpeg"
            fluid
            roundedCircle
            width={500}
            height={500}
          />
        </Col>
        <Col className="mx-auto my-5" lg={6} sm={7} xs={7}>
          <Row className="d-flex justify-content-center text-center text-sm-start ">
            <Col className="col-lg-12 col-md-12 col-sm-12 ">
              <h1 className="text-nowrap">
                Hi, <span className="text-primary text-left">I'm Jorge</span>
              </h1>
              <p>
                Skilled{" "}
                <span className="fw-bold text-uppercase">Full-Stack</span>{" "}
                developer professional with 2 years of experience and a computer
                science degree. Passionate about FinTech, Machine Machine
                Learning, and Innovation. Highly skilled in JavaScript, and
                Python. Currently seeking for software engineering opportunities
                at a promising company looking for a Highly motivated talent.
              </p>
            </Col>
            <Col className="col-lg-12 ">
              <h2>SKILLS</h2>
              <h5>Programming languages:</h5>
              <p>✔ Python ✔ JavaScript ✔ C++</p>
              <h5>Libraries and FrameWorks:</h5>
              <p>
                ✔ Django ✔ unitest ✔ pytest ✔ Pandas ✔ NumPy <br />
                ✔ ReactJS ✔ JestJS ✔ MochaJS <br />✔ NodeJS ✔ ExpressJS ✔ Flask
              </p>
              <h5>Tools:</h5>
              <p>
                ✔ AWS ✔ Azure DevOps <br />
                ✔ MongoDB ✔ MySQL ✔ Postgres
                <br />
              </p>
            </Col>
          </Row>
          <Row className="d-grid d-lg-flex lg-justify-content-between  gap-3 ">
            <Button
              href="#contact"
              className="col-lg-5  col-sm-8 col-12 mx-auto mb-3 mb-sm-0 text-nowrap p-3 rounded-pill"
            >
              Contact me
            </Button>

            <Button
              className="col-lg-5 col-sm-8 col-12 mx-auto text-nowrap p-3 rounded-pill"
              variant="outline-primary"
              // download="Jorge_Ngimbi_resume"
              without={"true"}
              href={Jorge_Ngimbi_resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              download resume
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
