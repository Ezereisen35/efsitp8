import React from "react"
import { Link } from "react-router-dom";
import BYN from '../img/logo_byn.png';
import Location from '../img/location.png';
import Mail from '../img/mail.png';
import Tel from '../img/tel.png';



function Footer(){
    return(
        <footer className="footerD">
        <div className="row row-cols-auto align-items-center justify-content-around">
            <div className="col" id="footer-e">
                <img src={BYN}/>
            </div>
            <div className="col" id="footer-e">
                <img src={Location}/>
                <h6 className="f-text">Beiro 3300 - Villa del Parque</h6>
                <br></br>
                <img src={Mail}/>
                <h6 className="f-text">contacto@sanitarioscampana.com.ar</h6>
            </div>
            <div className="col d-flex align-items-center" id="footer-e">
                <div className="pr-5"><img src={Tel} /></div> 
                <div><h5 className="f-text">4503-6015</h5></div>
            </div>
        </div>
    </footer>
    )
    }
    
export default Footer;