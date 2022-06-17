import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Jorge_Ngimbi_0 from "../Jorge_Ngimbi_0.pdf"
function About() {
  return (
    <Container id="about" className="min-vh-100 mx-auto my-5">
      <Row className="d-flex justify-content-start align-items-center">
        <Col
          className="d-flex justify-content-center align-items-center"
          sm={12}
          md={12}
          lg={5}
          xs={10}
        >
          <Image
            src="profile.jpeg"
            fluid
            roundedCircle
            width={500}
            height={500}
          />
        </Col>
        <Col className="mx-auto my-5" lg={6} sm={7} xs={7}>
          <Row className="d-flex justify-content-center ">
            <Col className="col-lg-12">
              <h1 className="text-nowrap">Hi, <span className="text-primary">I'm Jorge</span></h1>
              <p>
                Skilled software engineer professional with startup
                environment experience and a computer science degree. Passionate
                about FinTech and Innovation. Highly skilled in JavaScript, and
                Python, as well as automation tools. Currently seeking software
                engineering opportunities at a promising company looking for an
                awesome talent.
              </p>
            </Col>
            <Col className="col-lg-12">
              <h2>SKILLS</h2>
              <h5>Programmins languages:</h5>
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
          <Row className="d-flex flex-row mx-auto my-2 ">
            {/* <Col className="d-flex justify-content-start  align-items-center"></Col> */}
            <Button className="col-sm-4 mx-auto mb-3 mb-sm-0 text-nowrap">
              Contact me
            </Button>
           
            <Button
              className="col-sm-auto mx-auto text-nowrap "
              variant="outline-primary"
              // download="Jorge_Ngimbi_resume"
              without 
              href={Jorge_Ngimbi_0} target="_blank" rel="noopener noreferrer"
              
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
