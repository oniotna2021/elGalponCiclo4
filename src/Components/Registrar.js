import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'
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
            fetch('http://localhost:4000/api/cliente',{
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
        e.preventDefault();
    }

    handleChange(e,text){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
        console.log(e.target.value);
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
                
                <div className="mb-3 row">
                    <label for="nombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                         <input name="nombre" onChange={this.handleChange} type="text" className="form-control" id="nombre" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="apellido" className="col-sm-2 col-form-label">Apelido</label>
                    <div className="col-sm-10">
                         <input name="apellido" onChange={this.handleChange} type="text" className="form-control" id="apellido" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                         <input name="email" onChange={this.handleChange} type="email" className="form-control" id="Email" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="telefono" className="col-sm-2 col-form-label">Telefono</label>
                    <div className="col-sm-10">
                         <input name="telefono" onChange={this.handleChange} type="text" className="form-control" id="telefono" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Pais" className="col-sm-2 col-form-label">Pais</label>
                    <div className="col-sm-10">
                         <input name="pais" onChange={this.handleChange} type="text" className="form-control" id="pais" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="ciudad" className="col-sm-2 col-form-label">Ciudad</label>
                    <div className="col-sm-10">
                         <input name="ciudad" onChange={this.handleChange} type="text" className="form-control" id="ciudad" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="direccion" className="col-sm-2 col-form-label">Direccion</label>
                    <div className="col-sm-10">
                         <input name="direccion" onChange={this.handleChange} type="text" className="form-control" id="direccion" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="clasificacion" className="col-sm-2 col-form-label">Clasificacion</label>
                    <div className="col-sm-10">
                         <input name="clasificacion" onChange={this.handleChange} type="text" className="form-control" id="clasificacion" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                         <input name="password" onChange={this.handleChange} type="password" className="form-control" id="password" required />
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
