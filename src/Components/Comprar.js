import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'



export default function Comprar(){
 
  const [carritos, setCarritos]=useState([]);

  useEffect(()=>{
    buscarCarritos();
}, []); 

  const buscarCarritos=()=>{
  let url='http://localhost:4000/api/carrito';
  axios.get(url)
  .then(res => {
    setCarritos(res.data)
  })
  .catch((error) => {
    console.log(error); 
  });   
}

let carritoPagina= carritos.slice();



   
  const generateAppMenu = () =>{
   
    return(
    <div>
        <Carrusel />
        <br />
        <br />
        <h4>Tus datos</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Tus productos seran enviados a esta direccion</th>
              <th scope="col">usuario</th>
            </tr>
          </thead>
 
          <tbody>
            <tr>
                <td> {localStorage.getItem('nombre')}</td>
                <td> {localStorage.getItem('apellido')}</td>
                <td> {localStorage.getItem('direccion')}</td>
                <td> {localStorage.getItem('email')}</td>          
            </tr>
          </tbody>
      </table>
          
          <h4>Tu Carrito</h4>

          <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">total</th>
            </tr>
          </thead>
 
          <tbody>
        
          </tbody>
      </table>

      {
  carritoPagina.map(carrito => {
        alert(carrito.precio_venta)
        return(
            <table class="table">
            <tbody>
              <tr key={carrito._id}>
                {alert(carrito.unidades)}
                <td className="col-md-4">{carrito.nombre} </td>
                <td className="col-md-1">{carrito.unidades} </td>
                <td className="col-md-3">{carrito.precio_venta}</td>
                
                <td className="col-md-1">
                </td>
                
              </tr>
              </tbody>
          </table>
        )
  })
  
  }

        <Footer />     
    </div>
    
    
    );
    }
    
    const generateAppLogin=()=>{
    return(
      
    <div>
      <Login />
    </div>
      
    )
    }

    const desicion=()=>{
      let token = localStorage.getItem('token')
      if(!token){
        return generateAppLogin();
      }else{
        return generateAppMenu();
        
      }
    
    }

    
    return(
      <div>
          {desicion()}
      </div>
    )

}