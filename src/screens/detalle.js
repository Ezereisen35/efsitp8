import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios, * as others from 'axios';
import { ActionTypes, useContextState } from "../contextState";
import { ProductoShape } from "./ProductoShape";


export default function Detalle(Product) {
  const {id} = useParams()
  const [query, setQuery] = useState([])
  const [onCarrito, setOnCarrito] = useState(false)
  const { contextState, setContextState } = useContextState();
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
      console.log(response.data)
      setQuery(response.data);
      const estaEnCarrito = revisarCarrito(response.data)
      setOnCarrito(estaEnCarrito)
    })
    .catch(function (error) {
        console.log(error)
        console.log("ERROR")
    })
  },[])

  const revisarCarrito = (query) =>{
    for(let item of contextState.carrito){
      if(item.id== query.id) return true
    }
    return false
  }

  const añadirCarrito = () => {
    setContextState({type: ActionTypes.AñadirAlCarrito, value: query})
    setOnCarrito(true)
  }

   

  const quitarCarrito = () => {
    setContextState({type: ActionTypes.QuitarDelCarrito, value: query})
    setOnCarrito(false)
  }

  if (query.length === 0) return 


    if(onCarrito){
      return (
        <>
          <p>{query.title}</p>
          <img src={query.images[0]}/>
          <p className="text-xl">{query.description}</p>
          <p className="text-xl">Price: ${query.price}</p>
          <button type="button" onClick={quitarCarrito} >Quitar del carrito</button>
        </>
      )
    }else{
      return (
        <>
          <p>{query.title}</p>
          <img src={query.images[0]}/>
          <p className="text-xl">{query.description}</p>
          <p className="text-xl">Price: ${query.price}</p>
          <button type="button" onClick={añadirCarrito} >Añadir al carrito</button>
        </>
      )
    }
    
}

Detalle.propTypes = {
  query: ProductoShape.isRequired
}