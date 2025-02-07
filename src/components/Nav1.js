import React from "react";
import { FaEnvelope, FaPhone, FaGlobe, FaGoogle, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav1() {
  return (
    <div className="bg-dark text-light py-2">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Contact Info */}
        <div className="d-flex align-items-center">
          <FaEnvelope className="me-2" /> <span>info@homestays.com</span>
          <span className="mx-3">|</span>
          <FaPhone className="me-2" /> <span>+44 (0) 208 395 0333</span>
        </div>

        {/* Language Selector & Social Icons */}
        <div className="d-flex align-items-center">
        <FaGlobe className="me-2" size={50} />

          <select className="form-select form-select-sm bg-light text-dark border-0">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>

          <div className="ms-3 d-flex gap-3">
            <FaGoogle />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav1;
