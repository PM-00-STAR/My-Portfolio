import React from 'react'
import './Footer.css';
function Footer() {
    return (
    <div className='footer'>
            <div className ="footer-content">
               
                <ul className ="socials">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    
                </ul>
                </div>
                <div className='footer-bottom'>
                    <p>Copyright &copy;2022. <div>Designed with ❤️ by<span> Pratibha Mitra</span></div></p>
                </div>
                </div>
       
        
    )
}

export default Footer
