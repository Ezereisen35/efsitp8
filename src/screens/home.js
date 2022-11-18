import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProductos';
import '../index.css';
export default function Home() {

  return (
    <div>
      <ListaProducts limite={6}/>
    </div>
  )
}
