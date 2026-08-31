import React from 'react'
import './About.css'
import { Row,Col } from 'react-bootstrap'
export default function About() {
  return (
    <div>
 <Row>
        <Col>
            <img src="https://img.freepik.com/premium-photo/female-hands-working-laptop-without-face_78492-6801.jpg" width={'80%'} alt=""  />
        </Col>
          <Col className='p-5'>
          <h2>About Me</h2>
          <h5>My name is Sajimi PM. I am a BSc Computer Science graduate and currently studying a MERN Stack Development course
            . I know HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Git/GitHub, and I am learning MongoDB, Express.js, React.js, and Node.js. I am passionate about web development and aim to build a successful career as a MERN Stack Developer.
</h5></Col></Row>
    </div>
  )
}
