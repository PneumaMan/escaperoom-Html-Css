<template>
    <div class="container p-4">
        <div class="" v-show="Admin">
        <div class="row">
            <router-link to="/admin" class="col-1"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i></router-link>
        </div>
        <div class="row">
            <h1>Módulo  de administración</h1>
        </div>
        <div class="row my-4" >
            <div class="card col-11 col-md-3 mx-1 mx-auto" style="width: 18rem; margin: auto;">
                <div class="card-body">
                    <img src="../../assets/participantes.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Participantes</h5>
                        <button @click.prevent="ConsultaP()" class="btn btn-primary mx-1">Consultar</button>
                        
                    </div>
                </div>
            </div>
            <div class="card col-11 col-md-3 mx-1 mx-auto" style="width: 18rem; margin: auto;">
                <div class="card-body">
                    <img src="../../assets/usuarios.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Parámetros</h5>
                        <button @click.prevent="ConsultarParam()" class="btn btn-primary mx-1">Consultar</button>
                    </div>
                </div>
            </div>
            <div class="card col-11 col-md-3 mx-1 mx-auto" style="width: 18rem; margin: auto;">
                <div class="card-body">
                    <img src="../../assets/roles.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Roles</h5>
                        <button @click.prevent="ConsultarRol()" class="btn btn-primary mx-1">Consultar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="row"  v-show="participante">
            <div class="row">
                <button class="col-1 text-primary" @click="ConsultaP()" style="border: none;background-color: transparent;"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i></button>
            </div>
            <Participantes/>
        </div>
        <div class="row"  v-show="rol">
            <div class="row">
                <button class="col-1 text-primary" @click="ConsultarRol()" style="border: none;background-color: transparent;"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i></button>
        </div>
            <Roles />
        </div>
        <div class="row" v-show="parametros">
            <div class="row">
                <button class="col-1 text-primary" @click="ConsultarParam()" style="border: none;background-color: transparent;"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i></button>
        </div>
            <Parametros />
        </div> 
    </div>
</template>
<script>
// @ is an alias to /src
import Participantes from '@/components/Cruds/Participantes.vue'
import Parametros from '@/components/Cruds/Parametros.vue'
import Roles from '@/components/Cruds/Roles.vue'

export default {
  name: 'HomeView',
  components: {
    Participantes,
    Parametros,
    Roles
  },
  data() {
    return {
        participante : false,
        rol : false,
        parametros : false,
        Admin : true,
    }
  },
  methods: {
    ConsultaP(){
        this.participante = !this.participante
        this.Admin = !this.Admin
    },
    ConsultarRol(){
        this.rol = !this.rol
        this.Admin = !this.Admin
    },
    ConsultarParam(){
        this.parametros = !this.parametros
        this.Admin = !this.Admin
    },
  },
}
</script>