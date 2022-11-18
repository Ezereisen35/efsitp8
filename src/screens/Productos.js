import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProductos';


export default function Productos() {
  return (
    <div>
      <ListaProducts limite={1000}/>
    </div>
  )
}
