import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ProductoShape } from "../ProductShape";

export default function Card(props) {
    let navigate = useNavigate();
    return (
        <>
            <div  class="col-3 m-5 pb-3 pt-3" id="borde">
            <div key={props.id} onClick={() => navigate(`/DetalleProducto/${props.id}`)}>
                <p className="text-xl">{props.title}</p>
                <img className="imagproducto" src={props.images[0]}/>
            </div>
            </div>
        </>
    )
}


Card.propTypes = {
    query: ProductoShape.isRequired
  }
