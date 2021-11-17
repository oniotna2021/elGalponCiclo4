import React, { Component } from 'react'
import '../../App.css'
import { credentials } from '../../db';
import Carrusel from '../../templates/Carrusel';
import Footer from '../../templates/Footer';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            recoverPassword:false,
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleToUpdate = this.props.updateLogStateLOGIN;
        this.handleRecoverClick = this.handleRecoverClick.bind(this)
        this.recoverContraseña = this.recoverContraseña.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    async handleChange(e){
        if(e.target.name==='password'){
            await this.setState({password: e.target.value});
        }else if(e.target.name ==='email'){
            await this.setState({email: e.target.value});
        }else{
            await this.setState({username: e.target.value});
        }       
       console.log(this.state) 
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
        let thisReference = this;
        let isValidCredentials = false;
        let name='';
        //Aqui se colocan las validaciones para inicio de sesion
        if(this.state.username.length < 3 ||  this.state.password.length < 3 ){
            alert('Ususario y contraseña minimo 3 caracteres')
            return;
        }
        console.log(isValidCredentials)
       Object.entries(credentials).forEach(function(k) {
            //    console.log(k)
            if(
                k[1].username === thisReference.state.username &&
                k[1].password === thisReference.state.password
                ){
                    name=k[1].nombre;
                    isValidCredentials = true;

                }
           });
           if(isValidCredentials){
               alert('login exitoso');
               this.handleToUpdate(true,this.state.username,name)
           }else{
               alert('Usuario y/o contraseña erroneas')
               this.handleToUpdate(false,'','')
           }
           
        // alert(JSON.stringify(this.state));
        // console.log(e)
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
                        <input type="button" onClick={this.handleClick} value='Entrar' />
                        <input type="button" onClick={this.recoverContraseña} value='Recuperar contraseña' />

                    </form>
                </header>
            </div>
            <Footer />
            </div>
        )

    }
}
