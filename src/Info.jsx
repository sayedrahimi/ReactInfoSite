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
                <button className="btn btn-email"><i class="fa-solid fa-envelope"></i> Eamil</button>
                <button className="btn btn-linkedin"><i class="fa-brands fa-linkedin-in" id="linkdedin"></i> Linkedin</button>
            </div>

        </div>

    )
}