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
    fetch('http://localhost:4000/api/favoritos/'+email,{
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
        <div class="card dieciocho mx-4 ">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          <button onClick={()=> agregarAlCarrito() } >zzzz</button>
        </div>
      </div>
                )})  
    }
    </div>
    <Footer />
    </div>
)

}

