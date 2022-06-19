import React from "react";
import { Container, Row, Card, CardGroup } from "react-bootstrap";
import { previousProjects as projects } from "../work";

function Project() {
  return (
    <section>
      <Container id="projects" className="min-vh-80 mx-auto pb-5">
        <Row className="mx-auto pt-md-5">
          <h1 className="d-flex  justify-content-center align-items-center">
            {" "}
            PROJECTS
          </h1>
        </Row>
        <Row className="mx-auto pt-5">
          {projects.map((project) => {
            return (
              <CardGroup
                key={project.id}
                className="col-lg-4 col-md-6 col-sm-12 g-sm-3"
              >
                <Card>
                  <a href={project.site}>
                    <Card.Img
                      width={100}
                      height={250}
                      variant="top"
                      src={project.icon}
                    />
                  </a>

                  <Card.Body>
                    <Card.Title className="pb-2">{project.title}</Card.Title>
                    <Card.Subtitle className="pb-2">
                      {project.description}
                    </Card.Subtitle>
                    <Card.Text>{project.techStach}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <a
                        href={project?.github}
                        className="link-primary external"
                      >
                        github
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Project;
