import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class EditarProducto extends Component {
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
            productos:[]           
            };
            this.eliminarProducto = this.eliminarProducto.bind(this)
            this.fetchProductos = this.fetchProductos.bind(this)
    }

    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch('https://backend-galpon-c4.herokuapp.com/api/producto',{
          METHOD: 'GET',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({productos: data});
            console.log(this.state.clientes);

        });
        
        
    }

    eliminarProducto(id){
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Desea borrar este usuario ?')){

     
        console.log('Eliminando',id);
        let url='https://backend-galpon-c4.herokuapp.com/api/producto/'+id;
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
          this.fetchProductos();
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
                <th scope="col">Id de producto</th>
                <th scope="col">Nombre de Producto</th>
                <th scope="col">Accion</th>
                
              </tr>
            </thead>
    </table>

  {
  this.state.productos.map(producto => {
        return(
            <table class="table">
            <tbody>
              <tr key={producto._id}>
                <td> {producto._id} </td>
                <td>{producto.nombre} </td>
                <td>
                  <Link class="btn btn-success" to="/Productchange">EDITAR</Link>
                  <button class="btn btn-danger" onClick={()=> this.eliminarCliente(producto._id) }>Eliminar</button>
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
