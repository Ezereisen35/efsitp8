import React from "react"
import { Link } from "react-router-dom";
import ferrum from '../img/ferrum.png';
import delta from '../img/delta.png';
import logo from '../img/Logo-Negativo.png';
import ips from '../img/logo_ips.png';

function Marcas(){
    return(
        <div>
        <h4 id="textomarca">Marcas con las que trabajamos</h4>
        <footer className="footermarcas text-center">
            
        <div class="row row-cols-auto align-items-center justify-content-around">
            <div className="col-3 m-3 imagmarcas" >
                <img src={ferrum}/>
            </div>
            <div className="col-m-3 " >
                <img src={delta}/>
            </div>
            <div className="col-m-3 " >
                <img src={logo}/>
            </div>
            <div className="col-m-3 " >
                <img src={ips}/>
            </div>
            {/*
            <div className="col d-flex align-items-center" id="footer-e">
                <div className="pr-5 m-3"><img src={BYN} /></div> 
                <div><h5 className="f-text m-1" >4503-6015</h5></div>
            </div>*/}
        </div>
    </footer>
    </div>
    )
    }
    
export default Marcas;