import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className = "profile-parent">
                <div className ="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className='colz-icon'>

                            <a href="#">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#">
                                <i className='fab fa-instagram'></i>
                            </a>
                            <a href="#">
                                <i className='fab fa-youtube'></i>
                            </a>
                            <a href="#">
                                <i className='fab fa-twitter'></i>
                            </a>
                            </div>
                        </div>
                    <div className = "profile-details-name">
                        <span className = "primary-text">
                            {" "}
                            Welcome Guys,I am 
                            <span className="highlighted-text"> Pratibha Mitra😎</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                        {" "}
                        <h1>
                          {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Welcome to my Portfolio website ",
                            1000,
                            "I am open to work",
                            1000,
                            "",
                            1000,
                            "as a Full Stack developer",
                            1000,
                            "This is my react Portfolio",
                            1000,
                        ]}
                         />
                        </h1>
                        <span className ='profile-role-tagline'>
                            Open to work as a frontend and backend developer
                        </span>
                     </span>
                    </div>
                    <div className ='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "} 
                        </button>
                        <a href='resume.pdf' download='pratibha Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                    </div>
                <div className ='profile-picture'>
                    <div className='profile-picture-background'>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
