import React from "react";
import HomePage from "./components/Homepage.js";
import Navbar from "./components/Navbar.js";
import Home1 from "./components/Home1.js";
import Home2 from "./components/Home2.js";
import Home3 from "./components/Home3.js";
import Home4 from "./components/Home4.js";
import Footer from "./components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
    </>
  );
}

export default App;
