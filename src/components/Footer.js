import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#fff", paddingTop: "40px" }}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
            <h5>
              <span style={{ color: "#ff5050" }}>Student</span> Homestay
            </h5>
            <p style={{ fontSize: "14px", color: "#d9d9d9" }}>
              <strong>Our mission:</strong> Provide a safe and comfortable homestay experience for international students while promoting cultural exchange.
            </p>
            <div className="d-flex gap-3 mt-2">
              <img src="mastercard.png" alt="Mastercard" width="50" />
              <img src="applepay.png" alt="Apple Pay" width="50" />
              <img src="visa.png" alt="Visa" width="50" />
              <img src="gpay.png" alt="Google Pay" width="50" />
            </div>
            <div className="mt-3" style={{ color: "#ffcc00" }}>
              ⭐⭐⭐⭐⭐ <strong>5 Star Reviews on Google</strong>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5 style={{ color: "#ff5050" }}>Contact Us</h5>
            <p style={{ fontSize: "14px", color: "#d9d9d9" }}>
              <strong>Phone:</strong> +44 7930 484849 <br />
              <strong>WhatsApp:</strong> +44 7307 047053 <br />
              <strong>Email:</strong> info@studenthomestay.co.uk <br />
              Homestay bookings all over the UK
            </p>
            <h5 style={{ color: "#ff5050" }}>Opening Hours</h5>
            <p style={{ fontSize: "14px", color: "#d9d9d9" }}>Every day (24/7 Customer Service)</p>
          </div>

          {/* Links Section */}
          <div className="col-md-2">
            <h5 style={{ color: "#ff5050" }}>Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px", color: "#d9d9d9" }}>
              <li>Contact Us</li>
              <li>Student Homestay</li>
              <li>Join Our Host Families</li>
              <li>Airport Transfer Services</li>
              <li>Homestay Packages</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-md-3">
            <h5 style={{ color: "#ff5050" }}>Policies</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px", color: "#d9d9d9" }}>
              <li>Terms & Conditions</li>
              <li>Cookies & Privacy Policy</li>
              <li>Homestay Code of Practice</li>
              <li>Child Protection Policy</li>
            </ul>
            <div className="mt-3">
              <button className="btn" style={{ backgroundColor: "#ff5050", color: "#fff", borderRadius: "5px" }}>
                Book Homestay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center p-3 mt-4" style={{ backgroundColor: "#000", color: "#d9d9d9" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="fab fa-facebook mx-2" style={{ color: "#ff5050", fontSize: "20px" }}></i>
            <i className="fab fa-instagram mx-2" style={{ color: "#ff5050", fontSize: "20px" }}></i>
            <i className="fab fa-linkedin mx-2" style={{ color: "#ff5050", fontSize: "20px" }}></i>
            <i className="fab fa-google mx-2" style={{ color: "#ff5050", fontSize: "20px" }}></i>
            <i className="fab fa-whatsapp mx-2" style={{ color: "#ff5050", fontSize: "20px" }}></i>
          </div>
          <div>© 2025 - Student Homestay - Company Registration Number: 14829813</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
