import React, { Component } from 'react'
import '../../App.css'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            'username':'',
            'password':'',
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.target.id==='password'){
            this.setState({password: e.target.value});
        }else{
            this.setState({username: e.target.value});
        }        
       console.log(this.state) 
    };

    handleClick(e){
        console.log(e);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form className="form-container">
                        <label>Nombre Ususario</label>
                        <br />
                        <input id="username" type="text" value={this.state.username} onChange={this.handleChange} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        <br />
                        <input type="button" onClick={this.handleClick} value='Entrar' />

                    </form>
                </header>
            </div>
        )
    }
}
