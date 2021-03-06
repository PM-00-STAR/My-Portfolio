
import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">My Portfolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/About">About Me</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/">My Resume</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/About">Contact Me</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
            
        </div>
    )
}

export default Navbar
