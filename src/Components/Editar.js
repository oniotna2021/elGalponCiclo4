import React, { Component } from 'react';
import axios from 'axios'

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
            clientes:[],
            clientecarga:[],
            _id:''             
            };
            
            this.eliminarCliente = this.eliminarCliente.bind(this)
            this.fetchClientes = this.fetchClientes.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.editarCliente = this.editarCliente.bind(this);
            this.llamarClientes = this.llamarCliente.bind(this);
    }

    componentDidMount(){
        this.fetchClientes();
    }

    fetchClientes(){
        fetch('https://backend-galpon-c4.herokuapp.com/api/cliente',{
          METHOD: 'GET',
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

    handleChange(e){
      const {name,value} = e.target;
      this.setState({
          [name]:value
      });
      console.log(e.target.value);
  }


    llamarCliente(id){
      const url='https://backend-galpon-c4.herokuapp.com/api/cliente/'+id;
      console.log(url);
      fetch(url,{
        METHOD: 'GET',
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
        .then(data => {
          this.setState({clientecarga: data})
          console.log(this.clientecarga);
        
        });
       
    }
     





    eliminarCliente(id){
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Desea borrar este usuario ?')){

     
        console.log('Eliminando',id);
        const url='https://backend-galpon-c4.herokuapp.com/api/cliente/'+id;
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
          this.fetchClientes();
        });

    }
  }

  editarCliente(id){
          console.log('actualizando '+id)
          const url='https://backend-galpon-c4.herokuapp.com/api/cliente/'+id;
          console.log(url)
          console.log(this.state)
          alert('haga click para continuar')
          axios.put(url, this.state)

   
  }
    render() {
        return (
            <div>
                <div className="home container">
   <h2 className="text-center bg-secondary fw-bold super-container text-white mt-3">PANEL ADMINISTRATTIVO</h2>
   
   
   <form onSubmit={()=> this.editarCliente(this.state.clientecarga._id) }>
                <div className="container">
                
                <div className="mb-3 row">
                    <label for="nombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                         <input name="nombre" placeholder={this.state.clientecarga.nombre} onChange={this.handleChange} type="text" className="form-control" id="nombre" required />
                         
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="apellido" className="col-sm-2 col-form-label">Apelido</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.apellido} name="apellido" onChange={this.handleChange} type="text" className="form-control" id="apellido" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.email} name="email" onChange={this.handleChange} type="email" className="form-control" id="Email" required />
                 </div>
                </div>
                <div className="mb-3 row">
                    <label for="telefono" className="col-sm-2 col-form-label">Telefono</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.telefono} name="telefono" onChange={this.handleChange} type="text" className="form-control" id="telefono" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Pais" className="col-sm-2 col-form-label">Pais</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.pais} name="pais" onChange={this.handleChange} type="text" className="form-control" id="pais" required/>
               </div>
                </div>
                <div className="mb-3 row">
                    <label for="ciudad" className="col-sm-2 col-form-label">Ciudad</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.ciudad} name="ciudad" onChange={this.handleChange} type="text" className="form-control" id="ciudad" required />
                  </div>
                </div>
                <div className="mb-3 row">
                    <label for="direccion" className="col-sm-2 col-form-label">Direccion</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.direccion} name="direccion" onChange={this.handleChange} type="text" className="form-control" id="direccion" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="clasificacion" className="col-sm-2 col-form-label">Clasificacion</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.clasificacion} name="clasificacion" onChange={this.handleChange} type="text" className="form-control" id="clasificacion" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                         <input placeholder={this.state.clientecarga.password} name="password" onChange={this.handleChange} type="password" className="form-control" id="password" required />
                     </div>
                </div>
               
                <button type="submit" className="btn btn-dark">ACTUALIZAR</button>
               
          
                </div>
                </form>
   
   
   
   
   
   
   
   <table className="table">
            <thead className="bg--sucess">
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
            <table className="table">
            <tbody>
              <tr key={cliente._id}>
                <td> {cliente.nombre} </td>
                <td> {cliente.email} </td>
                <td> {cliente.telefono} </td>
                <td>
                <button className="btn btn-success" onClick={()=> this.llamarCliente(cliente._id) }>Editar</button>
                  <button className="btn btn-danger" onClick={()=> this.eliminarCliente(cliente._id) }>Eliminar</button>
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
