
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className='nav-wrapper'>
                <ul>
                  <a href="#Home"><li className="nav_items">Home</li></a>
                  <a href="#Home"><li className="nav_items">About Me</li></a>
                  <a href="#Home"><li className="nav_items">My Resume</li></a>
                  <a href="#Home"><li className="nav_items">My blog</li></a>
                  <a href="#Home"><li className="nav_items">Contact Me</li></a>
                  
                                 
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar
