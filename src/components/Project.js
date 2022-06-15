import React from 'react'
import { Container, Row, Col, Image, Button,Card,CardGroup } from "react-bootstrap";
import {previousProjects as projects} from '../work'

function Project() {
  return (
    <Container className="min-vh-100 mx-auto my-5 bg-light bg-gradient">
  {/* <Row>
    <Col className='bg-primary'>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row> */}
   <Row  className='mx-auto'>
            
            <h1  className='d-flex  justify-content-center align-items-center'> PROJECTS</h1>
           
        
        
       
        

       </Row>
  <Row>
    {/* <Col>1 of 3</Col>
    <Col className='bg-primary'>2 of 3</Col>
    <Col>3 of 3</Col> */}
    
       { projects.map(project =>{

           return <>
           
           <CardGroup className="col-4">
            <Card>
                <Card.Img  width={100}
            height={250} variant="top" src={project.icon} />
                <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle>{project.description}</Card.Subtitle>
                <Card.Text>
                   {project.techStach}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    <a href={project?.github} class="link-primary external">github</a>
                    </small>
                </Card.Footer>
            </Card></CardGroup>
           </>
           
       })
       
       }
  {/* <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> */}

  </Row>
</Container>
  )
}

export default Project