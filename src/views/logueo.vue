<template>
    <div class="container">
        <div class=" pg-inicial">
            <div class="row my-3" style="position: relative; left: 0; top: 0;">
                <div class="blob-logueo mt-5"></div>
                <img src="../assets/img-participantes/img-inicial.png" alt="" class="img-3d-logueo mx-auto mt-5" style="width:450px;">
            </div>
            <div class="row">
                <div class="card  my-5 tarjeta-from col-8 col-md-6 mx-auto">
                    <div class="card-body">
                        <div class=" col-md-6 mx-auto">
                            <label for="" class="form-label text-secondary"> Ingresa el numero de
                                    documento</label>
                            <input type="text" class="form-control-plaintext text-center" style="border-bottom: 1px solid #ebcc24;" v-model="autenticacion.identificacion">
                           <button class="btn btn-warning my-3 bt-consulta"
                                style="border-radius: 15px;width: 120px;" @click.prevent="AutenticacionParticipante()">Consultar</button>
                            <!-- <router-link to="/start"><button class="btn btn-warning my-3 bt-consulta"
                                style="border-radius: 15px;width: 120px;">Consultar</button>
                            </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            inicioParticipante: true,
            escaperoomis:'',
            autenticacion:{
                identificacion: "",
                escapeRoomId: "",
                retoId: ""
            }
        }
    },
    mounted(){
        this.traeridescaperoom()
    },
    methods: {
        ...mapActions(['guardarIdParticipante']),
        traeridescaperoom(){
            this.escaperoomis = this.$store.state.IdEscapeRoom
        },
        AutenticacionParticipante(){
            console.log(this.autenticacion)
            this.autenticacion.escapeRoomId = this.$store.state.IdEscapeRoom
            if (this.$store.state.IdReto == "") {
                this.autenticacion.retoId  = null
            }else{
                this.autenticacion.retoId = this.$store.state.IdReto
            } 
            this.axios.post('/GameControl/participante/login', this.autenticacion)
            .then(res => {
                console.log(res.data, 'informacion participante')
                this.guardarIdParticipante(res.data.data.id)
                this.$store.state.nombreParticipante = res.data.data.fullName
                this.$store.state.nextReto = res.data.data.nextReto.nombreReto
                this.$router.push({ path: '/scan-qr' })
            }).catch( e => {
                console.log(e)
                this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title:e.response.data.Message,
                        text: e.response.data.Errors[0].ErrorMessage,
                    });
            }) 

        }
    },
}
</script>
<style scoped>
.blob-logueo {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        position: absolute;
        z-index: -1;
        left: 26rem;
        margin: auto !important;
    }
@media (width: 1201px) and (width: 1350px) {
    .bt-consulta {
        border-radius: 15px;
        width: 120px;
        color: white;
        background-color: #ebcc24;
    }

    .tarjeta-from {
        width: 100rem;
        margin: auto;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        border: none;
    }

    .blob-logueo {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        position: absolute;
        z-index: -1;
    }

    .img-3d-logueo {
        position: absolute;
        z-index: 1;
        top: 50px;
        left: 420px;
        width: 150px !important;
    }
}

@media (width: 600px) and (width: 1200px) {
    .bt-consulta {
        border-radius: 15px;
        width: 120px;
        color: white;
        background-color: #ebcc24;
    }

    .tarjeta-from {
        width: 100rem;
        margin: auto;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        border: none;
    }

    .form-control-plaintext {
        border-bottom: 1px solid #ebcc24;
    }

    .blob-logueo {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    .img-3d-logueo {
        position: absolute;
        z-index: 1;
        top: 50px;
        left: 420px;
        width: 150px !important;
    }

}
@media (min-width: 401px) and (max-width: 600px) {
    .blob {
        overflow: hidden;
        width: 16rem;
        height: 16rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        left: 75px !important;
        top: 20px !important;
        z-index: -1;
        margin: auto;
    }
}

@media screen and (max-width: 400px) {
    .tarjeta-from {
        width: 18rem;
        margin: auto;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        border: none;
        top: 300px;
    }

    .blob-logueo {
        overflow: hidden;
        width: 16rem;
        height: 16rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        left: 50px !important;
        top: 20px !important;
        z-index: -1;
    }

    .img-3d-logueo {
        position: absolute;
        z-index: 1;
        top: 30px;
    }
}
</style>