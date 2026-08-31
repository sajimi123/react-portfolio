import React from 'react'
import Card from 'react-bootstrap/Card';
import './Skills.css'
import { Row } from 'react-bootstrap'
export default function Skills() {
  return (
    <div><Row>
      <Card style={{ width: '18rem', height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' , height:'10rem'}}>
      
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem', height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>BOOTSTRAP</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' , height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>NODE</Card.Title>
        
      </Card.Body>
    </Card>
    </Row><Row>
      <Card style={{ width: '18rem', height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>FIGMA</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem', height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>JAVASCRIPT</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem', height:'10rem' }}>
      
      <Card.Body>
        <Card.Title>ANGULAR</Card.Title>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' , height:'10rem'}}>
      
      <Card.Body>
        <Card.Title>TAILWIND</Card.Title>
        
      </Card.Body>
    </Card></Row>
    </div>
  )
}
