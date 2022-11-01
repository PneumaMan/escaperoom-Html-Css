<template> 
    <div class="container">
        <!-- Section: Design Block -->
        <section class="text-center">
            <div class="card  col-11 col-md-7 mx-auto my-4" >
                <img src="../../assets/Mobile-login-bro.png" class="card-img-top" alt="..." style="width: 18rem; margin: auto;">
                <div class="card-body py-5 px-md-5">
                    <div class="row d-flex justify-content-center">
                        <div class="">
                            <h2 class="fw-bold mb-3">Inicio sesión para administradores</h2>
                            <form>
                                
                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" class="form-control" v-model="usuario.email"/>
                                    <label class="form-label h5" for="form3Example3">Correo electronico</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" class="form-control" v-model="usuario.password"/>
                                    <label class="form-label h5" for="form3Example4">Contraseña</label>
                                </div>

                                <!-- Checkbox -->
                                <div class="form-check d-flex justify-content-center mb-4">
                                    <p class="">¿Aun no tiene cuenta? <a href="/regitro">  Registrarse</a></p>
                                </div>

                                <!-- Submit button -->
                                
                                    <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="login()">
                                        Entrar
                                    </button>
                                

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>
<script>
import {  mapMutations,mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            usuario:{
                /* email:'pneumaconsulting@gmail.com',
                password: 'Admin.1234*' */
               email:'',
                password:'' 
            }
        }
    },
    methods: {
    ...mapMutations(['obtenerUsuario']), 
    ...mapActions(['guardarUsuario','leerToken']),
    ...mapState(['rol']),
    login(){
        console.log(this.usuario)
        this.axios.post('/login', this.usuario)
        .then(res => {
            console.log(res.data.data.jwToken);

            const token =res.data.data.jwToken;
            this.guardarUsuario(token);
            //console.log('holissssss care boliss')
            this.$router.push({path:'/admin'})
            
        })
        .catch(err => {
          console.log(err);
          console.log('Llorelo')
          this.$swal({
            position: 'toast-top-end',
            icon: 'error',
            title: 'Ocurrio un error',
            text: err,
          });
        })
    }
    
  },
}
</script>
<style>
.bi-person-bounding-box{
    font-size: 80px;
}
</style>