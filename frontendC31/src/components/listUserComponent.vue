<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <label for="nombre">Buscar por nombre</label>
                        <input type="text" v-model="searchname" id="nombre">
                    </li>
                    <li class="nav-item">
                        <label for="apellido">Buscar por apellido</label>
                        <input type="text" v-model="searchlastname" id="apellido">
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list-user">
                        Usuarios
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

            <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                <h2>Lista de Usuarios</h2>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <!-- <th scope="col">Password</th> -->
                                <th scope="col">Telefono</th>
                                <!-- <th scope="col">Pais</th> -->
                                <th scope="col">Ciudad</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Clasificacion</th>
                                <th scope="col">acciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="usuario in filteruser" :key="usuario.id">
                                    <td>{{usuario.nombres}}</td>
                                    <td>{{usuario.apellidos}}</td>
                                    <td>{{usuario.email}}</td>
                                    <!-- <td>{{usuario.password}}</td> -->
                                    <td>{{usuario.telefono}}</td>
                                    <!-- <td>{{usuario.pais}}</td> -->
                                    <td>{{usuario.ciudad}}</td>
                                    <td>{{usuario.direccion}}</td>
                                    <td>{{usuario.clasificacion}}</td>
                                    <td>
                                        <router-link class="btn btn-primary" :to="{name:'uptate-user', params:{id: usuario._id}}"><i class="bi bi-wrench"></i></router-link>
                                        <button class="btn btn-danger" @click.prevent="deleteUser(usuario._id)"><i class="bi bi-x-lg"></i></button>
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
      usuarios: [],
      filtrado:[],
      searchname:'',
      searchlastname:''
    };
  },
  created() {
    let apiURL = "http://localhost:4000/apiuser";
    axios
      .get(apiURL)
      .then((res) => {
        this.usuarios = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    filteruser:function(){
      let filtro=this.usuarios.filter((usuario)=>{
          let filtro1='';
          if (this.searchname || this.searchlastname) {
            if (this.searchname) {
                filtro1=usuario.nombres.match(this.searchname);
            }else if(this.searchlastname){
                filtro1=usuario.apellidos.match(this.searchlastname);
            }
          }else{
            filtro1=usuario.nombres;
          }
          return filtro1;
      })
      return filtro;
      
    }
  },
  methods: {
    deleteUser(id) {
      let apiURL = `http://localhost:4000/apiuser/delete-user/${id}`;
      let indexOfArrayItem = this.usuarios.findIndex((i) => i._id === id);

      if (window.confirm("desear eliminar El usuario?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.usuarios.splice(indexOfArrayItem, 1);
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
		td:nth-of-type(1):before { content: "Nombre"; }
		td:nth-of-type(2):before { content: "Apellidos"; }
		td:nth-of-type(3):before { content: "Email"; }
		td:nth-of-type(4):before { content: "Telefono"; }
		td:nth-of-type(5):before { content: "Ciudad"; }
		td:nth-of-type(6):before { content: "Dirección"; }
		td:nth-of-type(7):before { content: "Clasificación"; }
		td:nth-of-type(8):before { content: "Acciones"; }
	}
</style>