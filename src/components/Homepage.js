import React from "react";
import { Carousel, Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">London Homestays</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">London Homestays</Nav.Link>
              <Nav.Link href="#">UK Student Residences</Nav.Link>
              <Nav.Link href="#">Study English in London</Nav.Link>
              <Nav.Link href="#">Guardianship Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1024x400?text=London+View"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We are London Homestays...</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1024x400?text=Big+Ben"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Explore Big Ben and Beyond...</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1024x400?text=River+Thames"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Experience the Beauty of the Thames...</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Services Section */}
      <Container className="my-5">
        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>London Homestays</Card.Title>
                <Card.Text>Find comfortable homestays around London.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>UK Student Residences</Card.Title>
                <Card.Text>Stay near top universities in the UK.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Study English in London</Card.Title>
                <Card.Text>Improve your English while living in London.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Guardianship Services</Card.Title>
                <Card.Text>Trusted guardianship for international students.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>© 2025 London Homestays. All Rights Reserved.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="#" className="text-white text-decoration-none">Facebook</a>
            <a href="#" className="text-white text-decoration-none">Twitter</a>
            <a href="#" className="text-white text-decoration-none">Instagram</a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;