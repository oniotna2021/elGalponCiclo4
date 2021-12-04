import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import {useEffect, useState} from 'react';


export default function Comprar(){
 
  var [deseados, setDeseados]=useState([]);
 
  useEffect(()=>{
   llenarFavoritos()
}); 

const agregarAlCarrito = ()=>{
  alert('jajaja')
}

const llenarFavoritos=()=>{
    const email=localStorage.getItem('email')
    fetch('http://localhost:4000/api/favoritos/',{
      METHOD: 'GET',
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setDeseados(data); 
    })
}

return(
    <div>
      <Carrusel />
      <h3 className="mt-5">Todos tus favoritos</h3>
    <div className="container-product d-flex mt-5">
        { 
      deseados.map(function(item,i){ 
      return(
        <div className="card dieciocho mx-2">
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">precio:</p>
            <p className="card-text">{item.precio_venta}</p>
          </div>
          <button className="btn btn-cart btn-product" onClick={()=> agregarAlCarrito() } >Añadir al carro</button>
      </div>
                )})  
    }
    </div>
    <Footer />
    </div>
)

}

