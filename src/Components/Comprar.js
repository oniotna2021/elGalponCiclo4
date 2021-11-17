import React, { Component } from 'react';
import Login from '../Components/Login/Login';
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';


export default class About extends Component {
    constructor(props){
        super(props);
        this.state ={
          logged:false,
          username:"",
          name:"",
        };
        this.updateLogStateLOGIN=this.updateLogState.bind(this);
    
      }
    
      
    generateAppMenu(){
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
    
    generateAppLogin(){
    return(
      <Login updateLogStateLOGIN={this.updateLogState.bind(this)} />
      
    )
    }
    
    render(){
      
          if(this.state.logged){
            return this.generateAppMenu();
          }else{
            return this.generateAppLogin();
          }
        
      
    }
    
    async updateLogState(LogState,username,name){
      await this.setState({
        logged: LogState,
        username:username,
        name:name,
        
       
    
      });
      console.log(this.state)
    }
    
    
}