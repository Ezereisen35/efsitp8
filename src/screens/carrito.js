import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { ActionTypes, useContextState } from "../contextState";

export default function Detalle(Product){

    const { contextState, setContextState } = useContextState();

    return(

        <>
        
        {contextState.carrito[0] ? contextState.carrito.map( 
        (Product)=>(<Card id={Product.id} title={Product.title} images={Product.images}/>)
        ) : "El carrito esta vacío"}
        
        </>

    )


}