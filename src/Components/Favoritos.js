import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import {useEffect, useState} from 'react';


export default function Comprar(){
 
  const [deseados, setDeseados]=useState([]);
  const [carrito, setCarrito]= useState([]);
 
  useEffect(()=>{
   llenarFavoritos()
  });

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

  const agregarAlCarrito = () => {
    prepararCarrito();
    alert(JSON.stringify(carrito));
    fetch('http://localhost:4000/api/carrito',{
      method:'POST',
      body: JSON.stringify(carrito),
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .then( alert(carrito.nombre + ' se agregó al carrito.'))
    .catch(err => console.error(err))   
  }

  const prepararCarrito = () => {
      setCarrito({ 
              email: deseados.email,
              id_dbproducto: deseados.id_dbproducto,
              nombre:deseados.nombre,
              cantidad: 1,
              productId: deseados.productoId,
              precio_venta: deseados.precio_venta
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
          <div className="container py-3">
          <div className="card dieciocho py-3">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">precio:</p>
              <p className="card-text">{item.precio_venta}</p>
            </div>
            <button className="btn btn-cart btn-product" onClick={()=> agregarAlCarrito() } >Añadir al carro</button>
        </div>
        </div>
                  )})  
      }
      </div>
      <Footer />
      </div>
  )

}

