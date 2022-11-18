import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function Card(props) {
    let navigate = useNavigate();
    return (
        <>
            <div key={props.id} onClick={() => navigate(`/Detalle/${props.id}`)}>
                <p>{props.title}</p>
                <img src={props.images[0]}/>
            </div>
        </>
    )
}