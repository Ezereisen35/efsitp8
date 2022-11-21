import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';
import Card from "./Card"


export default function ListaProductos(props) {
  const [query, setQuery] = useState([])
  let navigate = useNavigate();

  const traerProductos = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      setQuery(response.data.products.filter(product => product.id<=props.limite));
    })
    .catch(function (error) {
        console.error(error)
    })
  }
  useEffect(()=>{
    traerProductos()
  },[])


  return (
    <>
      <div class="text-center">
        <div class="row row-cols-4 g-4 mb-5">
        {query.map( 
        (Product)=>(<Card id={Product.id} title={Product.title} images={Product.images}/>)
      )}
        </div>
      </div>
      
    </>
  )
}
