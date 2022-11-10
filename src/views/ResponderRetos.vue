<template>
    <div class="fondo">
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d-responder mt-4"
                style="width:400px;">
        </div>
        <div class="row">
            <div class="mx-auto">
                <button class="btn btn-danger mx-1" @click.prevent="salidaVoluntaria()"><abbr title="Salida voluntaria">Salida voluntaria</abbr></button>
                <button class="btn btn-success mx-1" v-show="escapar">Escapar</button>
            </div>
        </div>
        <div class="">
            <div class="row">
                <h1 class="text-white">{{ preguntaR }}</h1>
            </div>
            <div class="row">
                <div class="card my-5">
                    <div class="card-body p-4">
                        <div class="row" v-for="(r, index) in respuestas" :key="index">
                            <button class="btn btn-danger bt-respuestas my-2" :value="r.id"
                                @click.prevent="ResponderReto(r.id)">{{ r.respuestaReto }}</button>
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

                            <div class=" col-md-6 mx-auto">
                                <label for="" class="form-label text-secondary"> Ingresa el numero de
                                    documento</label>
                                <input type="text" class="form-control-plaintext text-center"
                                    style="border-bottom: 1px solid #ebcc24;" v-model="autenticacion.identificacion">

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                @click.prevent="TokenParticipante = false">Cerrar</button>
                            <button class="btn btn-warning my-3 bt-consulta" style="border-radius: 15px;width: 120px;"
                                @click.prevent="AutenticacionParticipante()">Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapMutations,mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            datos: [],
            IdEscapeRoom: 0,
            IdReto: 0,
            Retos: [],
            respuestas: [],
            preguntaR: '',
            TokenParticipante: true,
            url: '',
            autenticacion: {
                identificacion: "",
             escapeRoomId: "",
                retoId: "" 
                 /* escapeRoomId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUrJ5jGVD8DuheH3vvpPSkM4s4Y1lTiMjN5bcvZiCLNbzI6bVJF4ZbpjdV4jw2oc_YCuW32akBDMDOpfO8SFXEvoYuPNbuSX1FcA08GA3b6JJw",
                retoId: "CfDJ8C-Eyalf5z5NqjI0ZaeKZUqkqjRT2GyKMuVHc5RBxu4C8FFgGxETIwyVea3MjdxWtchKYkGYy5HcuynlKpz9YQ1zVPbC0x5u2_Um9ZHouYkgB-4-xoTE1K4EzLLqsMHWzA" 
               */
            },
            ControlReto: {
                participanteId: 1,
                retoId: "",
                respuestaId: ''
            },
            AutenParti: [],
            escapar: false
        }
    },
    mounted() {
        this.ValidarLocalStorage()
        //this.CargarReto()
    },
    methods: {
        ...mapMutations(['obternerIdParticipante']), 
        ...mapActions(['guardarIdParticipante','leerIdParticipante']),
        ValidarLocalStorage() {
            if (window.localStorage.participanteId == null) {
                this.TokenParticipante = true
            } else {
                this.TokenParticipante = false
            }
            this.datos = this.$store.state.datosID
            for (let index = 0; index < this.datos.length; index++) {
                const element = this.datos[index];
                console.log(element)
                var idE = this.datos[0].split("=");
                this.IdEscapeRoom = idE
                console.log(idE[1], this.IdEscapeRoom)
                var idR = this.datos[1].split("=");
                this.IdReto = idR[1]
                console.log(idR)
            }
        },
        AutenticacionParticipante() {
            console.log(this.autenticacion)
            this.autenticacion.escapeRoomId = this.$store.state.IdEscapeRoom
            this.autenticacion.retoId = this.$store.state.IdReto
            this.axios.post('/GameControl/participante/login', this.autenticacion)
                .then(res => {
                    console.log(res.data.data, 'informacion participante')
                    this.Retos = res.data.data
                    this.preguntaR = this.Retos.nextReto.preguntaReto
                    this.respuestas = this.Retos.nextReto.respuestas
                    console.log(this.respuestas)
                    this.guardarIdParticipante(res.data.data.id)
                    this.TokenParticipante = false
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })
        },
        ResponderReto(id) {
            console.log(id)
            this.ControlReto.respuestaId = id
            this.ControlReto.retoId = this.$store.state.IdReto
            this.ControlReto.participanteId = this.$store.state.participanteId
            console.log(this.ControlReto)
            this.axios.post('/GameControl/participante/respuesta', this.ControlReto)
                .then(res => {
                    console.log(res.data)
                    this.GamecontrolReto = res.data.data
                    this.$store.state.nextReto = this.GamecontrolReto.nextRetoMessage
                    this.$router.push({path:'/scan-qr'})
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        /* text: e.response.data.Errors[0].ErrorMessage */

                    });
                })
        },
        salidaVoluntaria() {
            const item = this.$store.state.participanteId
            console.log(item)
            this.axios.post('/GameControl/escape-room/salidavoluntaria', {item})
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    console.log(res.data);
                })
                .catch(e => {
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        /* text: e.response.data.Errors[0].ErrorMessage */
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