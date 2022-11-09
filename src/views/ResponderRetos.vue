<template>
    <div class="fondo">
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d-responder my-4"
                style="width:400px;">
        </div>
        <div class="">
            <div class="row">
                <h1 class="text-white">{{ preguntaReto }}</h1>
                <p>{{datos}}</p>
            </div>
            <div class="row">
                <div class="card my-5">
                    <div class="card-body p-4">
                        <div class="row" v-for="(r, index) in Retos.respuestas" :key="index">
                            <button class="btn btn-danger bt-respuestas my-2">
                                <router-link to="/start" class="text-white">{{ r.respuestaReto }}</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel"
                v-show="TokenParticipante" style="display: block; background-color: #00000054;" aria-modal="true"
                role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLiveLabel">Inicio sesión participante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click.prevent="TokenParticipante = false"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{datos}}</p>
                            <div class=" col-md-6 mx-auto">
                                <label for="" class="form-label text-secondary"><Strong> Ingresa el numero de
                                        documento</Strong></label>
                                <input type="text" class="form-control-plaintext text-center"
                                    style="border-bottom: 1px solid #ebcc24;" v-model="autenticacion.identificacion">

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                @click.prevent="TokenParticipante = false">Cerrar</button>
                            <button class="btn btn-warning my-3 bt-consulta" style="border-radius: 15px;width: 120px;"
                                @click.prevent="AutenticacionParticipante()">Consultar</button>
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
            datos: [],
            IdEscapeRoom: 0,
            IdReto: 0,
            Retos: [],
            preguntaReto: '',
            TokenParticipante: true,
            url: '',
            autenticacion: {
                identificacion: "",
                escapeRoomId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUqLDbvlDUEIPhExcsw8pnHTobR56L_c1MSS36kqX9pflFXwIaZayG1urSV5sM-1F4Vh2Zn80SgsQCx49XKMo3FJh5F_kY3EYG75VbmKBAcPTA",
                retoId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUprwQiN0QvSj_8M1tPFk-VVfTau4ir_5Pr2t9C_V7Q0wgmkWJOnwsWFd---WkDE04O99WAyEzMBs_YfYSG8FOw5EktmisppcRRbGOAUHuPdKA"
            },
            ControlReto: {
                participanteId: "",
                retoId: ""
            }
        }
    },
    mounted() {
        this.ValidarLocalStorage()
    },
    methods: {
        ValidarLocalStorage() {
            //console.log(window.localStorage.token)
            if (window.localStorage.token == '') {
                this.TokenParticipante = true
            }
            console.log(window.location)
            this.url = window.location

            

            this.datos = this.$store.state.datosID
            /* for (let index = 0; index < this.datos.length; index++) {
                const element = this.datos[index];
                console.log(element)
                this.IdEscapeRoom = this.datos[0]
                var idE = this.datos[0].split("=");
                console.log(idE[1])
                this.IdReto = this.datos[1].split("=");
                var idR = this.IdReto[1]
                console.log(idR)
            }  */
        },
        AutenticacionParticipante() {
            console.log(this.autenticacion)
            this.ControlReto.retoId = this.autenticacion.retoId
            this.axios.post('/GameControl/participante/login', this.ControlReto)
                .then(res => {
                    console.log(res.data, 'informacion participante')
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })
        },
        CargarReto() {
            this.axios.post('/GameControl/reto', this.autenticacion)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })
        }
    },
}
</script>
<style scoped>
body {
    background-color: #f6a700;
    margin: 0;
    padding: 0;
}

.fondo {
    background-color: #f6a800b0;
    margin: 0;
    padding: 0;
}

.card {
    border: none;
    border-radius: 50px;
    width: 700px;
    margin: auto;
}

.bt-respuestas {
    border-radius: 15px;
}

.img-3d-responder {
    margin: auto;
    width: 150px;
}

@media (width: 600px) and (width: 1200px) {
    .img-3d-responder {
        margin: auto;
        width: 150px;
    }
}

@media screen and (max-width: 400px) {
    .img-3d-responder {

        top: 70px;
        left: 60px;
        width: 350px;
    }

    .card {
        border: none;
        border-radius: 50px 50px 15px 15px;
        width: 350px;
        margin: auto;
    }
}
</style>