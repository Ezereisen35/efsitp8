import React, {useState, useEffect} from "react";
import { ActionTypes, useContextState } from "../contextState";
import Card from "../components/Card"

export default function DetalleProd(Product) {
  const { contextState, setContextState } = useContextState();
  return (
    <>
      <div class="text-center">
      <div class="row row-cols-4 g-4 mb-5">

      {contextState.carrito[0] ? contextState.carrito.map( 
        (Product)=>(<Card id={Product.id} title={Product.title} images={Product.images}/>)
      ) : "El carrito esta vacío"}
      </div>
      </div>
      
    </>
  )
}