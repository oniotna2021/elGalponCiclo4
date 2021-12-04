import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../../templates/Carrusel'
import Footer from '../../templates/Footer'


export default class logicLogin extends Component {

    constructor() {
        super();
        this.state={
            email: '',
            password: '', 
            selector:false             
            };
          
            this.renderLogin = this.renderLogin.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.renderRecoverPasword = this.renderRecoverPasword.bind(this)
            this.loginCliente = this.loginCliente.bind(this);
            this.goToRecover = this.goToRecover.bind(this);
            // this.componentDidMount = this.componentDidMount.bind(this)
    }

    // componentDidMount(){
    //     this.render();
    // }

    handleChange(e){
      const {name,value} = e.target;      
      this.setState({
          [name]:value
      });
      console.log(e.target.value);
    
  }

    loginCliente(){
      const url='http://localhost:4000/api/login/';
      fetch(url,{
        method:'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res =>res.json())
        .then(data =>{
          localStorage.setItem('token', data.token)
          localStorage.setItem('nombre', data.nombre)
          localStorage.setItem('apellido', data.apellido)
          localStorage.setItem('direccion', data.direccion)
          localStorage.setItem('email', data.email)
          localStorage.setItem('clasificacion',data.clasificacion)
          alert('Sesion iniciada')
        })


    }
    render() {
      if(this.state.selector === false){
          return this.renderLogin();
      }else{
          return this.renderRecoverPasword();
      }
   }

   goToRecover(){
     this.setState({selector:true})
   }

   goToLogin(){
    this.setState({selector:false})
  }


   renderRecoverPasword(){
     return(
      <div >
      <Carrusel />
      <div class="home container">
      <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">RECUPERA TU CONSTRASEÑA</h2>
      <h3 class="text-center fw-bold super-container mt-3">Introduce tu correo y recibiras instrucciones para la recuperacion, si no ves el correo recuerda revisar la carpeta SPAM</h3>


      <form onSubmit={()=> this.loginCliente(this.state.email,this.state.password) }>
      <div className="container">
      
      <div class="mb-3 row">
          <label for="nombre" class="col-sm-2 col-form-label">Correo</label>
          <div class="col-sm-10">
               <input name="email" onChange={this.handleChange} type="email" class="form-control" id="email" required/>
               
          </div>
        </div>
     
        <button type="submit" className="btn btn-success">ENVIAR</button>
        
       

       </div>
       </form>
        <br />
       <button onClick={()=> this.goToLogin()} className="btn btn-warning">Regresar al Login</button>
      </div>

      <Footer />
  </div>

     )
   }
     
    renderLogin() {
      const token = localStorage.getItem('token')
      if(!token){
        return (
            <div >
                <Carrusel />
                <div class="home container">
                <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">INICIO DE SESION</h2>
                <h3 class="text-center fw-bold super-container mt-3">Introduce tu correo y contraseña</h3>
   
   
          <form onSubmit={()=> this.loginCliente(this.state.email,this.state.password) }>
                <div className="container">
                
                <div class="mb-3 row">
                    <label for="nombre" class="col-sm-2 col-form-label">Correo</label>
                    <div class="col-sm-10">
                         <input name="email" onChange={this.handleChange} type="email" class="form-control" id="email" required/>
                         
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                         <input name="password" onChange={this.handleChange} type="password" class="form-control" id="password" />
                     </div>
                </div>
               
                <button type="submit" className="btn btn-success">ENTRAR</button>
                
          
                </div>
                </form>
                <br />
                <button onClick={()=> this.goToRecover()} className="btn btn-primary">OLVIDASTE TU CONTRASEÑA</button>
                </div>

                <Footer />
            </div>
        )}else{
          return(
            <div>
              <Carrusel />
              <br />
            <h3 className="mt-4">BIENVENIDO AL GALPON</h3>
            <br />
            <h4> Ya puedes ver tu carrito</h4>
            <Link to="/Comprar">MI CARRITO</Link>
            <br />
            <br />
            <h4 className="mt-4">O visitar nuestra tienda</h4>
            <br />
            <br />
            <Link to="/">TIENDA</Link>
            <br />
            <div className="containerProduct">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBi4Tc7OFN9SrwZDh8YZLdSG4lcYDQHyxcA&usqp=CAU" />
            </div>
            <br />
            <Footer />



            </div>
            
          )
        }
    }
    
}
