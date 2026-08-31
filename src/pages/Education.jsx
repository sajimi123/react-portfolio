import React from 'react'
import { Card, Container, Row, Col } from "react-bootstrap";
function Education() {
  return (
    <section className="py-5 bg-light">
      <Container>
        
        <Row className="justify-content-center g-4">
        
    <Col md={5}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-4">
                  Mearn Stack Development
                </Card.Title>

                <Card.Subtitle className="mb-3 text-muted">
                  Course
                </Card.Subtitle>

                <Card.Text>
                 Currently learning MERN Stack Development, including MongoDB, Express.js, React.js, and Node.js, along with modern web development technologies.
                </Card.Text>

                <p className="mb-1">
                  <strong>Duration:</strong>  2026 - present
                </p>

                <p className="mb-0">
                  <strong>Status:</strong>{" "}
                  <span className="text-success">Currently Studying</span>
                </p>
              </Card.Body>
            </Card>
          </Col>




          {/* Degree Card */}
          <Col md={5}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-4">
                  BSc Computer Science
                </Card.Title>

                <Card.Subtitle className="mb-3 text-muted">
                  Degree
                </Card.Subtitle>

                <Card.Text>
                  Completed my Bachelor's Degree in Computer Science.
                  During my studies, I learned programming, web
                  development, databases, and other computer science
                  concepts.
                </Card.Text>

                <p className="mb-1">
                  <strong>Duration:</strong> 2023 - 2026
                </p>

                <p className="mb-0">
                  <strong>Status:</strong>{" "}
                  <span className="text-success">Completed</span>
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Plus Two Card */}
          <Col md={5}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-4">
                  Higher Secondary Education
                </Card.Title>

                <Card.Subtitle className="mb-3 text-muted">
                  Plus Two
                </Card.Subtitle>

                <Card.Text>
                  Completed my Higher Secondary Education and developed
                  a strong foundation for my further studies in
                  Computer Science.
                </Card.Text>

                <p className="mb-1">
                  <strong>Duration:</strong> 2021 - 2023
                </p>

                <p className="mb-0">
                  <strong>Status:</strong>{" "}
                  <span className="text-success">Completed</span>
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Education
