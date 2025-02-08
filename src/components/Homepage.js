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
      {/* Navbar with Expanded Dropdowns */}
      <Navbar expand="lg" style={{ position: "absolute", width: "100%", zIndex: 2 }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3">
              <NavDropdown title="London Homestays" className="nav-red bg-white text-dark" style={{ width: "100%" }}>
                <div className="dropdown-large">
                  <NavDropdown.Item href="#">Book a Homestay in London</NavDropdown.Item>
                  <NavDropdown.Item href="#">How it Works</NavDropdown.Item>
                  <NavDropdown.Item href="#">Which Accommodation?</NavDropdown.Item>
                  <NavDropdown.Item href="#">Information for Agents & Schools</NavDropdown.Item>
                  <NavDropdown.Item href="#">Why Work With Us?</NavDropdown.Item>
                  <NavDropdown.Item href="#">Airport Transfers</NavDropdown.Item>
                  <NavDropdown.Item href="#">Living and Studying in the UK</NavDropdown.Item>
                  <NavDropdown.Item href="#">UK Student Visa Guidelines</NavDropdown.Item>
                  <NavDropdown.Item href="#">Arriving in London</NavDropdown.Item>
                  <NavDropdown.Item href="#">Homestay Information</NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="UK Student Residences" className="nav-green bg-white text-dark" style={{ width: "60%" }}>
                <div className="dropdown-large">
                  <NavDropdown.Item href="#">Student residence information</NavDropdown.Item>
                  <NavDropdown.Item href="#">Apply for a student residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">How to book a student residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">FAQs for residences in London</NavDropdown.Item>
                  <NavDropdown.Item href="#">Register your residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">Which accommodation?</NavDropdown.Item>
                  <NavDropdown.Item href="#">London location guides</NavDropdown.Item>
                  <NavDropdown.Item href="#">Supplementary products</NavDropdown.Item>
                  <NavDropdown.Item href="#">Find your city</NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="Study English in London" className="nav-orange bg-white text-dark" style={{ width: "60%" }}>
                <div className="dropdown-large">
                  <NavDropdown.Item href="#">Student residence information</NavDropdown.Item>
                  <NavDropdown.Item href="#">Apply for a student residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">How to book a student residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">FAQs for residences in London</NavDropdown.Item>
                  <NavDropdown.Item href="#">Register your residence</NavDropdown.Item>
                  <NavDropdown.Item href="#">Which accommodation?</NavDropdown.Item>
                  <NavDropdown.Item href="#">London location guides</NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="Guardianship Services" className="nav-purple bg-white text-dark" style={{ width: "60%" }}>
                <div className="dropdown-large">
                  <NavDropdown.Item href="#">Guardianship Services in the UK</NavDropdown.Item>
                  <NavDropdown.Item href="#">Apply for a Guardian in the UK</NavDropdown.Item>
                  <NavDropdown.Item href="#">Guardianship packages and definitions</NavDropdown.Item>
                  <NavDropdown.Item href="#">How Guardianships work</NavDropdown.Item>
                  <NavDropdown.Item href="#">Guardianship FAQs</NavDropdown.Item>
                  <NavDropdown.Item href="#">Schools and Agents</NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel style={{ height: "80vh" }}>
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

      {/* Chat Section */}
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