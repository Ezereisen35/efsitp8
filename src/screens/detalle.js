import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios, * as others from 'axios';
import { ActionTypes, useContextState } from "../contextState";
import { ProductoShape } from "../ProductShape";

export default function Detalle(Product) {
  const {id} = useParams()
  const [query, setQuery] = useState([])
  const [carrito, setcarrito] = useState(false)
  const { contextState, setContextState } = useContextState();
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
      setQuery(response.data);
      const esta = revisarCarrito(response.data)
      setcarrito(esta)
    })
    .catch(function (error) {
        console.error(error)
    })
  },[])

  const revisarCarrito = (query) =>{
    for(let item of contextState.carrito){
      if(item.id== query.id) return true
    }
    return false
  }


  const añadirCarrito = () => {
    setContextState({
      type: ActionTypes.AñadirAlCarrito,
      value: query
    })
    setcarrito(true)
  }

  const quitarCarrito = () => {
    setContextState({
      type: ActionTypes.QuitarDelCarrito,
      value: query
    })
    setcarrito(false)
  }


  if (query.length === 0) return <p>Cargando...</p>

  if(carrito){
    return (
      <>
        <p>{query.title}</p>
        <img src={query.images[0]}/>
        <p className="text-xl">{query.description}</p>
        <p className="text-xl">Price: ${query.price}</p>
        <button type="button" onClick={quitarCarrito} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Quitar del carrito</button>
      </>
    )
  }else{
    return (
      <>
        <p>{query.title}</p>
        <img src={query.images[0]}/>
        <p className="text-xl">{query.description}</p>
        <p className="text-xl">Price: ${query.price}</p>
        <button type="button" onClick={añadirCarrito} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Añadir al carrito</button>
      </>
    )
  }
}

Detalle.propTypes = {
  query: ProductoShape.isRequired
}
