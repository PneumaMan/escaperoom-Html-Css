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
                            <label for="" class="form-label text-secondary"><Strong> Ingresa el numero de
                                    documento</Strong></label>
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
export default {
    data() {
        return {
            inicioParticipante: true,
            autenticacion:{
                identificacion: "",
                escapeRoomId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUqLDbvlDUEIPhExcsw8pnHTobR56L_c1MSS36kqX9pflFXwIaZayG1urSV5sM-1F4Vh2Zn80SgsQCx49XKMo3FJh5F_kY3EYG75VbmKBAcPTA",
                retoId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUprwQiN0QvSj_8M1tPFk-VVfTau4ir_5Pr2t9C_V7Q0wgmkWJOnwsWFd---WkDE04O99WAyEzMBs_YfYSG8FOw5EktmisppcRRbGOAUHuPdKA"
            }
        }
    },
    methods: {
        AutenticacionParticipante(){
            console.log(this.autenticacion)
            this.axios.post('/GameControl/participante/login', this.autenticacion)
            .then(res => {
                console.log(res.data)
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
        left: 55px !important;
        top: 20px !important;
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

@media screen and (max-width: 400px) {
    .tarjeta-from {
        width: 20rem;
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