import React from 'react'
import './ContactMe.css';
import emailjs from 'emailjs-com';

function ContactMe() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_wgao89e','template_2gla15d',e.target,'user_4aqe9NMi57qJo5OfXSt7F').then(res=>
            {console.log(res);
            }).catch(err=>console.log(err));
            
        
    }
    return (
        <div className="body">
            {/* <div className="alert-success">
                <span>Message Sent!Thank you for contacting me</span>
            </div>
            <div className="alert-error">
                <span>Oops something went wrong! Please try again.</span>
            </div> */}
        <div className="container-border">
            <h1>Get in touch</h1>
            
            <form className="row" onSubmit={sendEmail}>
                <label>Enter your name</label>
                <input type="text" name="name" className="form-control" placeholder="example:Pratibha Mitra" required/>
                <label>Enter your email</label>
                <input type ="email" name ="user_email" className="form-control" placeholder="example@gmail.com" required/>
                <label>Message</label>
                <textarea name="message" rows = "4" className="form-control" placeholder="Write your message" required/>
                <input type="submit" value="send" id="form-btn" className="form-control btn btn-primary" />
                </form>
                
        </div>
        </div>
    )
}

export default ContactMe
