<template>
    <div class="container p-4">
        <div class="row">
            <h1>Módulo  de administración</h1>
        </div>

        <div class="row my-4" v-show="Admin">
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
        <div class="row">
            <Participantes v-show="participante"/>
        </div>
        <div class="row">
            <Roles v-show="rol" />
        </div>
        <div class="row">
            <Parametros v-show="parametros" />
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
        this.participante = true
        this.Admin = false
    },
    ConsultarRol(){
        this.rol = true
        this.Admin = false
    },
    ConsultarParam(){
        this.parametros = true
        this.Admin = false
    },
  },
}
</script>