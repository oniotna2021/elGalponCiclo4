import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'



export default function Comprar(){
 
  var [carritos, setCarritos]=useState([]);
  var [suma, setSuma]=useState(0);
 
  useEffect(()=>{
    CalcularTotal();
}); 

// se utiliza de esta manera si quieres que pare el usestate
// useEffect(()=>{
//   CalcularTotal();
// },[]); 


var CalcularTotal=()=>{
  var subtotal=0
  buscarCarritos()
 
  carritos.forEach(element => {
    if(element.email===localStorage.getItem('email')){
      subtotal = subtotal + element.cantidad*element.precio_venta
    }
  });
  // alert('El total' + subtotal)
  setSuma(subtotal)
}


var buscarCarritos=()=>{
  const email = localStorage.getItem('email')
  let url='http://localhost:4000/api/carrito/'+email;
  axios.get(url)
  .then(res => {
    setCarritos(res.data)
  })
  .catch((error) => {
    console.log(error); 
  });   
}

const SumarCantidad=(id,nombre,cantidad,precio_venta,productId)=>{

  const cantidadMod=cantidad + 1
  const url='http://localhost:4000/api/carrito/'+id;
    const aumento={
      email: localStorage.getItem('email'),
      id_dbproducto:id,
      nombre: nombre,
      cantidad:cantidadMod,
      productId:productId,
      precio_venta:precio_venta,
    }

    fetch(url,{
      method:'PUT',
      body: JSON.stringify(aumento),
      mode:'cors',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
  }).then(res => res.json())
  .then(data => {
      console.log(data);
      window.location.reload();
  })
  .catch(err => console.error(err))
  
}



const restarCantidad=(id,nombre,cantidad,precio_venta,productId)=>{
   if(cantidad > 1){ 
  const cantidadMod=cantidad -1
  const url='http://localhost:4000/api/carrito/'+id;
    const aumento={
      email: localStorage.getItem('email'),
      id_dbproducto:id,
      nombre: nombre,
      cantidad:cantidadMod,
      productId:productId,
      precio_venta:precio_venta,
    }

    fetch(url,{
      method:'PUT',
      body: JSON.stringify(aumento),
      mode:'cors',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
  }).then(res => res.json())
  .then(data => {
      console.log(data);
      window.location.reload();
  })
  .catch(err => console.error(err))
  
}}






const eliminarCarrito=(id)=>{
  // eslint-disable-next-line no-restricted-globals
  if (confirm('Desea borrar este producto ?')){

    console.log('Eliminando',id);
    const url='http://localhost:4000/api/carrito/'+id;
    console.log(url);
    fetch(url,{
      method: 'DELETE',
      mode:'cors',
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload();
    });
}
}

// let carritoPagina= carritos.slice();
   
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
          
      <table class="table">
          <thead>
            <tr>
              <th scope="col"><h2>TOTAL</h2><h3>{suma}</h3>
              <h3><button className="btn btn-success">PROCESAR PAGO</button></h3>
              </th>
            </tr>
          </thead>
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
          // eslint-disable-next-line array-callback-return
          carritos.map(function(item,i){
          if(item.email===localStorage.getItem('email'))
          return(
            <table class="table">
            <tbody>
              <tr key={item._id}>
                <td className="col-md-4">{item.nombre} </td>
                
                <td className="col-md-3">{item.cantidad} 
                <button onClick={()=> SumarCantidad(item._id,item.nombre,item.cantidad,item.precio_venta,item.productId)} className="mx-2">+</button> 
                <button onClick={()=> restarCantidad(item._id,item.nombre,item.cantidad,item.precio_venta,item.productId)} className=" button mx-2">-</button> 
                </td>
                
                <td className="col-md-3">{item.precio_venta}</td>
                <td className="col-md-3">{item.precio_venta * item.cantidad}</td>
                <button onClick={()=> eliminarCarrito(item._id) } className="bg-red">ELIMINAR</button>                
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
