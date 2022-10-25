import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProducts';
import Carousel from "../components/Carousel";
import '../index.css';


export default function Home() {

  return (
    <div>
      <Carousel/>
      <ListaProducts/>
    </div>
  )
}
