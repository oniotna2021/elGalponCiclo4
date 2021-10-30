<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <label for="producto">Buscar</label>
                        <input type="text" v-model="search" id="producto">
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/inventory">
                        Inventario
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create-product">
                        Ingresar producto
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">
                        Administracion
                        </router-link>
                    </li>
                </ul>
            </div>
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h2>Lista de Productos</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">producto</th>
                            <th scope="col">unidades</th>
                            <th scope="col">P.compra</th>
                            <th scope="col">P.venta</th>
                            <th scope="col">Categoria</th>
                            <!-- <th scope="col">Detalle</th> -->
                            <th>acciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="producto in filterProduct" :key="producto.id">
                                    <td>{{producto.nombre}}</td>
                                    <td>{{producto.unidades}}</td>
                                    <td>{{producto.precio_compra}}</td>
                                    <td>{{producto.precio_venta}}</td>
                                    <td>{{producto.categoria}}</td>
                                    <!-- <td>{{producto.detalle}}</td> -->
                                    <td>
                                        <router-link class="btn btn-primary" :to="{name:'edit', params:{id: producto._id}}"><i class="bi bi-wrench"></i></router-link>
                                        <button class="btn btn-danger" @click.prevent="deleteProduct(producto._id)"><i class="bi bi-x-lg"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
</div>    
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      productos: [],
      search:''
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.productos = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    filterProduct:function(){
      return this.productos.filter((producto)=>{
        return producto.nombre.match(this.search);
      })
    }
  },
  methods: {
    deleteProduct(id) {
      let apiURL = `http://localhost:4000/api/delete-product/${id}`;
      let indexOfArrayItem = this.productos.findIndex((i) => i._id === id);

      if (window.confirm("desear eliminar el producto?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.productos.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
    @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

    tr {
      margin: 0 0 1rem 0;
    }
      
    tr:nth-child(odd) {
      background: #ccc;
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			padding-left: 50%;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		/*
		Label the data
		*/
		td:nth-of-type(1):before { content: "Producto"; }
		td:nth-of-type(2):before { content: "Unidades"; }
		td:nth-of-type(3):before { content: "P.compra"; }
		td:nth-of-type(4):before { content: "P.venta"; }
		td:nth-of-type(5):before { content: "Categoria"; }
		td:nth-of-type(6):before { content: "Acciones"; }
	}
</style>