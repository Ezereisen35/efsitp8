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

  
    return (
      <>
        <p>{query.title}</p>
        <img src={query.images[0]}/>
        <p className="text-xl">{query.description}</p>
        <p className="text-xl">Price: ${query.price}</p>
        
        {
          carrito ? (<button type="button" onClick={quitarCarrito} >Quitar del carrito</button>)
          :
          (<button type="button" onClick={añadirCarrito} >Añadir al carrito</button>)
        }
      </>
    )
  
}


