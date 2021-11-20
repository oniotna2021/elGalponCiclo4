import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Editar extends Component {

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
            password: '',   
            clientes:[]           
            };
            this.eliminarCliente = this.eliminarCliente.bind(this)
            this.fetchClientes = this.fetchClientes.bind(this)
    }

    componentDidMount(){
        this.fetchClientes();
    }

    fetchClientes(){
        fetch('https://backend-galpon-c4.herokuapp.com/api/cliente',{
          METHOD: 'DELETE',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({clientes: data});
            console.log(this.state.clientes);

        });
        
        
    }

    eliminarCliente(id){
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Desea borrar este usuario ?')){

     
        console.log('Eliminando',id);
        let url='https://backend-galpon-c4.herokuapp.com/api/cliente/'+id;
        console.log(url);
        fetch(url,{
          METHOD: 'delete',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchClientes();
        });

    }
  }
    render() {
        return (
            <div>
                <div class="home container">
   <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">PANEL ADMINISTRATTIVO</h2>
   <table class="table">
            <thead class="bg--sucess">
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
    </table>

  {
  this.state.clientes.map(cliente => {
        return(
            <table class="table">
            <tbody>
              <tr key={cliente._id}>
                <td> {cliente.nombre} </td>
                <td> {cliente.email} </td>
                <td> {cliente.telefono} </td>
                <td>
                  <Link class="btn btn-success" to="/Clientchange">EDITAR</Link>
                  <button class="btn btn-danger" onClick={()=> this.eliminarCliente(cliente._id) }>Eliminar</button>
                </td>
          
              </tr>
              </tbody>
          </table>
        )
  })
  
  }
 
  </div>
            </div>
        )
    }
}
