import React, { Component } from 'react'

export default class CrearProducto extends Component {
   
    constructor() {
        super();
        this.state={
            productId:'',
            nombre: '',    
            unidades: '',
            precio_compra:'',
            precio_venta:'',
            detalle:'',
            categoria:'',
            imagen:'',
            __v:''
            };
        this.agregarProducto = this.agregarProducto.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    agregarProducto(e){
        fetch('http://localhost:4000/api/producto',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                productId:'',
                nombre: '',    
                unidades: '',
                precio_compra:'',
                precio_venta:'',
                detalle:'',
                categoria:'',
                imagen:'',
                __v:''
                });
        })
        .then( alert('Producto registrado'))
        .catch(err => console.error(err))
        // console.log(this.state);
        e.preventDefault();
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
        console.log(e.target.value);
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">      
                    {/*Módulo principal*/}
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Crear nuevo producto</h1>
                        </div>
                        {/*inicio del formulario*/}
                        <div class="col-md-7 col-lg-8">
                            <form class="needs-validation" onSubmit={this.agregarProducto}>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="productId" class="form-label">Codigo Interno</label>
                                        <input name="productId" onChange={this.handleChange} type="text" class="form-control" id="productId" /> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nombre" class="form-label">Nombre del Producto</label>
                                        <input name="nombre" onChange={this.handleChange} type="text" class="form-control" id="nombre" /> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="unidades" class="form-label">Unidades</label>
                                        <input name="unidades" onChange={this.handleChange} type="text" class="form-control" id="unidades" />
                                    </div>
                                    <div class="col-6">
                                        <label for="precio_compra" class="form-label">Precio de Compra </label>
                                        <input name="precio_compra" onChange={this.handleChange} type="text" class="form-control" id="precio_compra" />
                                     </div>
                                    <div class="col-6">
                                        <label for="precio_venta" class="form-label">Precio de Venta</label>
                                        <input name="precio_venta" onChange={this.handleChange} type="text" class="form-control" id="precio_venta" />
                                    </div>
                                    <div class="col-12">
                                        <label for="detalle" class="form-label">Detalle</label>
                                        <input name="detalle" onChange={this.handleChange} type="text" class="form-control" id="detalle" />
                                  </div>
                                    <div class="col-md-5">
                                        <label for="categoria" class="form-label">Categoria</label>
                                        <select name="categoria" onChange={this.handleChange} class="form-select" id="categoria" required>
                                            <option value="">Elige...</option>
                                            <option>Avicultura</option>
                                            <option>Equinos</option>
                                            <option>Ganaderia</option>
                                            <option>Mascotas</option>
                                            <option>Porcicultura</option>
                                        </select>
                                    </div>          
                                    <div class="col-12">
                                        <label for="imagen" class="form-label">URL de la imagen</label>
                                        <input name="imagen" onChange={this.handleChange} type="text" class="form-control" id="imagen" />
                                    </div>
                                    <div class="col-12">
                                        <label for="__v" class="form-label">Version</label>
                                        <input name="__v" onChange={this.handleChange} type="text" class="form-control" id="__v" />
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <button class="w-100 btn btn-primary btn-lg" type="submit">Ingresar Producto</button>
                                <hr class="my-4" />
                            </form>
                        </div>
                        {/*fin del formulario*/}
                    </main>
                </div>
            </div>
        )
    }
}
