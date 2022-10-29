<template>
    <div class="container p-4">
        <div class="row">
            <h1>Modulo de administración</h1>
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
                        <h5 class="card-title">Usuarios</h5>

                        <a href="/modulo-escape" class="btn btn-primary mx-1">Empezar</a>
                    </div>
                </div>
            </div>
            <div class="card col-11 col-md-3 mx-1 mx-auto" style="width: 18rem; margin: auto;">
                <div class="card-body">
                    <img src="../../assets/roles.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Roles</h5>

                        <a href="/modulo-escape" class="btn btn-primary mx-1">Empezar</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">

            <Particioantes v-show="participante">
            <button>⬅️</button>
            </Particioantes>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Particioantes from '@/components/Cruds/Participantes.vue'
import Usuarios from '@/components/Cruds/Usuarios.vue'
import Roles from '@/components/Cruds/Roles.vue'

export default {
  name: 'HomeView',
  components: {
    Particioantes,
    Usuarios,
    Roles
  },
  data() {
    return {
        participante : false,
        rol : false,
        usuarios : false,
        Admin : true,
    }
  },
  methods: {
    ConsultaP(){
        this.participante = true
        this.Admin = false
    }
  },
}
</script>