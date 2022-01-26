import React from 'react'
import './AboutMe.css';
function AboutMe() {
    return (
        <div className="about">
            
            <h1>About Me</h1>
            <div className = "image">
           {/* <img src= {require ('../../../assets/Home/shape-bg.png')} alt='no internet connection' /> */}
           <div className="content-container">
               <span className ="mycontent">I am Pratibha,a developer enthusiast.I am an Engineering student from India
               .I have varied interests.Right now i am specialising in full stack development.Apart from this i love exploring occult science 
               and love to know mysteries of the world.                                                     
               This is my portfolio website.Happy searching my profile!</span>
               
           </div>
           </div>
           
        </div>
    )
}

export default AboutMe
