import React from 'react'
import {Container,Row,Image} from 'react-bootstrap'

import {previousEducations as education} from '../work'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
function Education() {
  return (
    <Container className="bg-light bg-gradient">
    <Row  className='mx-auto'>
        
        <h1  className='d-flex  justify-content-center align-items-center'> Education</h1>
       
    
    
   
    

   </Row>
   <Row className='mx-auto my-5'>
    <VerticalTimeline  layout="1-column-left">
        

        {
            education.map(element =>{
                return <VerticalTimelineElement
                position='right'
                key={element.id}
               
                date={element.date}
                dateClassName="date"
                icon={<Image
                    src={element.icon}
                    fluid
                    roundedCircle
                  />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        {element.universityName}
                    </h3>
                    <h5 className='vertical-timeline-element-subtitle'>
                        {element.collegeName}
                    </h5>
                    <p>
                        {element.degree}
                    </p>
                </VerticalTimelineElement>
            })
        }
       
    </VerticalTimeline>
    </Row>
 </Container>
  )
}

export default Education