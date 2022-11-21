import React from "react"
import { Link } from "react-router-dom";
import Logo from '../img/Logo.png'
import { ActionTypes, useContextState } from "../contextState";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const { contextState, setContextState } = useContextState();
    let navigate = useNavigate();
    return(
        <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-center">
        <div id="navbar-location" className="container-fluid">
            <a onClick={()=>navigate("/")}><img  src={Logo} className="logo-tam "id="nav-f"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul id="li-d" className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>navigate("/Productos")}>PRODUCTOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>navigate("/quienesSomos")}>QUIENES SOMOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>navigate("/Contacto")}>CONTACTO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>navigate("/carrito")}>CARRITO {contextState.carrito.length}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
    }
    
export default Navbar;