import React from "react";
import './businessCard.css'
import rahim from './images/rahim.jpg'

export default function Info(){
    return (
        <div className="container">
            <img src={rahim} 
            className="card-img"  />
            <h2 className="title">Sayed Rahim Rahimi</h2>
            <p className="job">Frontend developer</p>
            <p className="web-site">www.sayedrahimrahimi.com</p>
            <div className="contact-btn">
                <a href="mailto:sayedrahimrahimi2003@gmail.com" className="btn btn-email"><i class="fa-solid fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/sayed-rahim-rahimi-8b246a28a" className="btn btn-linkedin" style={{color:'white'}}><i class="fa-brands fa-linkedin-in" id="linkdedin" style={{marginRight:'5px'}}></i>Linkedin</a> 
            </div>

        </div>

    )
}