import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'

export default class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state={
            email:'',
            productoId:'',
            id_dbproducto: '',
            nombre:'',
            precio_venta:0,
            deseados:[]    
            };
            
            this.agregarFavorito = this.agregarFavorito.bind(this)
            this.llenarFavoritos = this.llenarFavoritos.bind(this)
           
           
    }
    
    componentDidMount(){
        this.llenarFavoritos()
    }

    agregarFavorito(){
        alert(JSON.stringify(this.state.deseados))
    }

    llenarFavoritos(){

        fetch('http://localhost:4000/api/favoritos',{
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
          // eslint-disable-next-line array-callback-return
          this.state.deseados.map(function(item,i){
            
          if(item.email===localStorage.getItem('email'))
          return(
            
            <div class="card dieciocho mx-4 ">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{item.nombre}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
