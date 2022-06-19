import React from "react";
import { Container, Row, Image } from "react-bootstrap";

import { previousJobs as work } from "../work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <section className="bg-light bg-gradient">
      <Container id="experience" className="pt-5">
        <Row className="mx-auto">
          <h1 className="d-flex  justify-content-center align-items-center">
            {" "}
            EXPERIENCE
          </h1>
        </Row>
        <Row className="mx-auto my-5">
          <VerticalTimeline>
            {work.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  icon={<Image src={element.icon} fluid roundedCircle />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle pb-2">
                    {element.company}
                  </h5>

                  <ul>
                    {element.description.map((des, idx) => {
                      return <li key={idx}>{des}</li>;
                    })}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
