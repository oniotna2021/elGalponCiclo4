import React, { Component } from 'react'
import Footer from "../templates/Footer";
import Carrusel from '../templates/Carrusel';
// import {db} from "../db";
import '../App.css'
import LogicShop from './Productos/LogicShop';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Carrusel />
                <br />
                <br />
                <br />

                     
                <div >
                            <LogicShop /> 
                </div>
            

                <br />
                <br />
                <br />

                <Footer />
            </div>
        )
    }
}

