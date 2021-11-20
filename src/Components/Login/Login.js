import React, { Component } from "react";
import "../../App.css";
import { credentials } from "../../db";
import Carrusel from "../../templates/Carrusel";
import Footer from "../../templates/Footer";
import { urlHome } from "../../Backend";
import { Axios } from "axios";

const axios = new Axios();

const baseurl="";


export default class Login extends Component {

  state={
      form:{
          username:'',
          password:''
      }
  }

    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion=async ()=>{
        
         await axios.get(baseurl, {params: {
            username:this.state.form.username,
            password:this.state.form.password
        }}).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error);
        })
    }

    async handleRecoverClick(e){
        // alert('Se ha enviado un correo de recuperacion')
        if(e.target.name==='password'){
            this.setState({recoverPassword:false})
        }else{
            //verificar si el correo esta registrado
            //logica de correo
            // se manda peticion backend y envia correo
            alert('Su correo fue enviado')
            this.setState({recoverPassword : false, email:''})
        }
    }

    async recoverContraseña(){
        alert('Introduce tu email para recuperar la contraseña');
        this.setState({recoverPassword:true});
    }

    async handleClick(){
        // let axios = new Axios();
        // let thisReference = this;
        // let isValidCredentials = false;
        // let name='';
        //Aqui se colocan las validaciones para inicio de sesion

        // if(this.form.username.length < 3 ||  this.form.password.length < 3 ){
        //     alert('Ususario y contraseña minimo 3 caracteres')
        //     return;
        // }

        // let response = await axios.get(urlHome+'credentials',{
        //     data:{
        //         user: {},
        //         data:{
        //             username: this.state.username,
        //             password: this.state.password,
        //         },
        //     },
                
        //     });
        // console.log(response)
      


       
    }

    cancel(){
        return(
            this.setState({recoverPassword:false,email:''})
        
        )
    }

    renderRecoverLogin(){
        return(
            <div>
                <Carrusel />
            <div className="App">
            <header className="App-header">
                <form className="form-container">
                    <label>Ingrese correo electronico</label>
                    <br />
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <input type="button" onClick={this.cancel} value='Cancelar' name="cancelar" />
                    <input type="button" onClick={this.handleRecoverClick} value='Env. Email' name="recuperar"/>

                </form>
            </header>
        </div>
        <Footer />
        </div>
        )
    }

    render() {
       if(!this.state.recoverPassword){
           return this.renderLogin();
       }else{
           return this.renderRecoverLogin();
       }
    }

    renderLogin(){
        return(
            <div>
                <Carrusel />
            <div className="App">
                <header className="App-header">
                    <form className="form-container">
                        <label>Nombre Ususario</label>
                        <br />
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        <br />
                        <input type="button" onClick={()=>this.iniciarSesion()} value='Entrar' />
                        <input type="button" onClick={this.recoverContraseña} value='Recuperar contraseña' />

                    </form>
                </header>
            </div>
            <Footer />
            </div>
        )

    }
}
