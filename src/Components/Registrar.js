import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'
import CryptoJS from "crypto"



export default class Registrar extends Component {

    constructor() {
        super();
        this.state={
            nombre:'',
            apellido: '',
            email: '',
            telefono: '',
            pais: '',
            ciudad: '',
            direccion: '',
            clasificacion: '',
            password: ''   
        };
        this.agregarCliente = this.agregarCliente.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async agregarCliente(e){

            fetch('https://backend-galpon-c4.herokuapp.com/api/cliente',{
            method:'POST',
            body: JSON.stringify(this.state),
            mode:'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                nombre:'',
                apellido: '',
                email: '',
                telefono: '',
                pais: '',
                ciudad: '',
                direccion: '',
                clasificacion: '',
                password: ''   
            });
        })
        .then( alert('Usuario registrado'))
        .catch(err => console.error(err))
        // console.log(this.state);
        e.preventDefault();
    }

    handleChange(e,text){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
        // console.log(e.target.value);
    }

    render() {
        return (
            <div>            
                <Carrusel />
                <br />
                <h2>REGISTRO DE USUARIO elGalpon</h2>
                <br />

                <form onSubmit={this.agregarCliente}>
                <div className="container">
                
                <div class="mb-3 row">
                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-10">
                         <input name="nombre" onChange={this.handleChange} type="text" class="form-control" id="nombre" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="apellido" class="col-sm-2 col-form-label">Apelido</label>
                    <div class="col-sm-10">
                         <input name="apellido" onChange={this.handleChange} type="text" class="form-control" id="apellido" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="Email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                         <input name="email" onChange={this.handleChange} type="email" class="form-control" id="Email" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="telefono" class="col-sm-2 col-form-label">Telefono</label>
                    <div class="col-sm-10">
                         <input name="telefono" onChange={this.handleChange} type="text" class="form-control" id="telefono" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="Pais" class="col-sm-2 col-form-label">Pais</label>
                    <div class="col-sm-10">
                         <input name="pais" onChange={this.handleChange} type="text" class="form-control" id="pais" required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="ciudad" class="col-sm-2 col-form-label">Ciudad</label>
                    <div class="col-sm-10">
                         <input name="ciudad" onChange={this.handleChange} type="text" class="form-control" id="ciudad" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="direccion" class="col-sm-2 col-form-label">Direccion</label>
                    <div class="col-sm-10">
                         <input name="direccion" onChange={this.handleChange} type="text" class="form-control" id="direccion" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="clasificacion" class="col-sm-2 col-form-label">Clasificacion</label>
                    <div class="col-sm-10">
                         <input name="clasificacion" onChange={this.handleChange} type="text" class="form-control" id="clasificacion" required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                         <input name="password" onChange={this.handleChange} type="password" class="form-control" id="password" required />
                    </div>
                </div>
               
                <button type="submit" className="btn btn-dark">REGISTRAR</button>
               
          
                </div>
                </form>
                <br />
                

                <Footer />
         
            </div>
        )
    }
}
