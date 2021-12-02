import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logoB from '../assets/logoB.png';
import '../Components/Style/css/bootstrap.min.css';



export default class Header extends Component {

  onClicDs=()=>{
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido'); 
    localStorage.removeItem('direccion'); 
    localStorage.removeItem('token'); 
    localStorage.removeItem('email');      
    window.location.reload();
  } 

    render() {
        return (
            <div>
                <header>
        <nav className="gradiente navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
         
          <img className="logo-lgi navbar-brand" src={logoB} alt="Logo de El Galpón"></img>
          <Link className="ms-3 navbar-brand" to="/">ElGalpon</Link>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">SOBRE NOSOTROS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">CONTACTO</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/Registrar">REGISTRAR</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/Administrar">ADMINISTRAR</Link>
              </li>   
              <button className="btn btn-sm btn-outline-secondary" type="submit">
                  <Link className="nav-link" to="/Comprar">
                  COMPRAR
                  <i className="bi-cart-fill me-1"></i>
                  </Link>
                </button>
                <button 
                    className="btn btn-sm btn-outline-secondary" 
                    type="submit"
                    onClick={this.onClicDs}>
                  <Link className="nav-link" to='/el_galpon_ciclo_4' >
                    SALIR
                  </Link>
                </button> 
              <li className="nav-item">
              <li className="nav-item">
                <Link className="nav-link" to="/Favoritos">Mis Favoritos</Link>
              </li> 
             

                
              </li>
                
   
          
          </ul>
             
          </div>
        </div>
        </nav>
      </header>
            </div>
        )
    }
}
