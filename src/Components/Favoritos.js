import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'
import Button from '@restart/ui/esm/Button';

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state={
        email:'',
        productoId:'',
        id_dbproducto: '',
        nombre:'',
        precio_venta:0,
        deseados:[],   
        };
        this.aaa = this.aaa.bind(this)
        
}

componentDidMount(){
    this.llenarFavoritos()
}

aaa(){
  alert('hola')
}

llenarFavoritos(){
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
        this.setState({deseados: data}); 
    })
}

render() {
    return (
        <div>
        <Carrusel />
            <br />
            <h1>Mis favoritos</h1>
            <br />


            <div className="containerProduct  d-flex">
    { 
      this.state.deseados.map(function(item,i){ 
      return(
        <div class="card dieciocho mx-4 ">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          <button onClick={()=> this.aaa() } >zzzz</button>
        </div>
      </div>
                )})  
    }
    </div>
            <Footer />
    </div>
    )
}
}

