import React, { Component } from 'react';
import Login from './Login/Login';
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import LogicaLogin from './Login/LogicaLogin';
import {useState} from 'react';


export default function Comprar(){

  const [isLoggedIn, setIsLoggedIn]=useState(false);
      
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
      
      <LogicaLogin/>
      
    )
    }

    const desicion=()=>{
      if(localStorage.getItem('loggin')==='true'){
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