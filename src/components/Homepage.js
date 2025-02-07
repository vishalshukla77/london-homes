import React from "react";
import { Navbar, Nav, NavDropdown, Container, Carousel } from "react-bootstrap";
import { FaComments } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Homepage = () => {
  return (
    <>
      {/* Navbar with Spaced Dropdowns */}
      <Navbar expand="lg" style={{ position: "absolute", width: "100%", zIndex: 2 }}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3"> {/* Added gap between dropdowns */}
              <NavDropdown title="London Homestays" className="nav-red bg-white text-light">
                <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="UK Student Residences" className="nav-green bg-white text-light">
                <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Study English in London" className="nav-orange bg-white text-light">
                <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Guardianship Services" className="nav-purple bg-white text-light
              ">
                <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel with Reduced Height */}
      <Carousel style={{ height: "80vh" }}> {/* Reduced height */}
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="London" style={{ height: "80vh", objectFit: "cover" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Big Ben" style={{ height: "80vh", objectFit: "cover" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="UK" style={{ height: "80vh", objectFit: "cover" }} />
        </Carousel.Item>
      </Carousel>

      {/* Centered Home Quote */}
      <div className="home-quote" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "2rem", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
        "Your Best Choice for a Perfect Stay"
      </div>

      {/* Message Box */}
      <div className="message-box" style={{ position: "fixed", bottom: 100, right: 20, padding: "10px 20px", background: "#ffffff", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
        <p>We're Online! How can we help you today?</p>
      </div>

      {/* Chat Icon */}
      <div className="chat-widget" style={{ position: "fixed", bottom: 20, right: 20, cursor: "pointer" }}>
        <button className="btn btn-success" style={{ borderRadius: "50%", padding: "15px" }}>
          <FaComments size={24} />
        </button>
      </div>
    </>
  );
};

export default Homepage;
