import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import {useState} from 'react';
import Login from './Login/Login';


export default function Comprar(){

  const [isLoggedIn]=useState(false);
      
  const generateAppMenu = () =>{
    return(
    <div>
        <Carrusel />
        <br />
        <br />
        <br />
        <h1>TU CARRITO DE COMPRAS</h1> 
        <br />
        <br />
        <br />
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
      if(localStorage.getItem('token')){
        //setIsLoggedIn(true);
        console.log(isLoggedIn);
        return generateAppMenu();
      }else{
        //setIsLoggedIn(false);
        return generateAppLogin();
      }
    
    }

    
    return(
      <div>
          
          {desicion()}
      </div>

    )
 
}