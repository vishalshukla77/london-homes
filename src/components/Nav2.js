import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
import logo from "../assets/logo.png";

function Nav2() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" height="80" className="me-2" />
          <span className="fw-bold">HOMESTAYS</span>
        </a>

        {/* Responsive Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links (Fixed for small and medium screens) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="/">ABOUT US</a></li>
            <li className="nav-item"><a className="nav-link" href="/">SERVICES</a></li>
            <li className="nav-item"><a className="nav-link" href="/">WORK WITH US</a></li>
            <li className="nav-item"><a className="nav-link" href="/">BLOG</a></li>
            <li className="nav-item"><a className="nav-link" href="/">CONTACT US</a></li>
            <li className="nav-item"><a className="nav-link" href="/">BECOME A HOST</a></li>
          </ul>

          {/* Apply for Homestay Button (Ensuring Visibility on Small Screens) */}
          <div className="d-lg-block d-flex justify-content-center mt-3 mt-lg-0">
            <a href="/" className="btn btn-primary ms-lg-3">APPLY FOR HOMESTAY</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;
