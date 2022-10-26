import React from "react"
import { Link } from "react-router-dom";
import BYN from '../img/logo_byn.png';
import Location from '../img/location.png';
import Mail from '../img/mail.png';
import Tel from '../img/tel.png';



function Footer(){
    return(
        <footer className="footerfondo">
        <div className="row row-cols-auto align-items-center justify-content-around">
            <div className="col" id="footer-e">
                <img src={BYN}/>
            </div>
            <div className="col" id="footeri">
                <img src={Location} className="m-3"/>
                <h6 className="f-text m-3">Beiro 3300 - Villa del Parque</h6>
                <br></br>
                <img src={Mail} className="m-3"/>
                <h6 className="f-text m-3">contacto@sanitarioscampana.com.ar</h6>
            </div>
            <div className="col d-flex align-items-center" id="footeri">
                <div className="pr-5 m-3"><img src={Tel} /></div> 
                <div><h5 className="f-text m-1" >4503-6015</h5></div>
            </div>
        </div>
    </footer>
    )
    }
    
export default Footer;