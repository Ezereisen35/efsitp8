import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';


export default function Home(props) {
  const [query, setQuery] = useState([])
  let navigate = useNavigate();

  const getFirstSix = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      console.log(response.data.products)
      setQuery(response.data.products.filter(product => product.id<=props.limite));
      console.log(response.data.products)
    })
    .catch(function (error) {
        console.log(error)
    })
  }
  useEffect(()=>{
    getFirstSix()
  },[])


  return (
    <>
    <div class="text-center">
    <div class="row row-cols-4  g-4 mb-5">
      {query.map( 
        (Product)=>(
          <>
            <div  class="col-3 m-5 pb-3 pt-3" id="borde">
            <div key={Product.id} onClick={() => navigate(`/Detalle/${Product.id}`)}>
              <div>
            <p className="text-xl">{Product.title}</p>
            <img className="imagproducto" src={Product.images[0]}/>
            </div>
          </div>
          </div>
          </>
        )
      )}
      </div>
      </div>
    </>
  )
}
