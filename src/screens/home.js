import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProductos';
import Carousel from "../components/Carrousel";
import '../index.css';
import Marcas from "../components/Marcas";
export default function Home() {

  return (
    <div>
      <Carousel/>
      <ListaProducts/>
      <Marcas/>
    </div>
  )
}
