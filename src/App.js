import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Gallery from "./pages/gallery/gallery";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import "./App.css";

function App() {
  return (
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="logo">ZiDi Photography</Link>
              <ul className="nav-links">
                <li><Link to="/gallery/street">Street</Link></li>
                <li><Link to="/gallery/portraits">Portraits</Link></li>
                <li><Link to="/gallery/city">City</Link></li>
                <li><Link to="/gallery/landscape">Landscape</Link></li>
                <li><Link to="/gallery/animal">Animal</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/:category" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;