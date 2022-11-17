<template>
    <div class="fondo">
        <NavbarParticipantes />
        <div class="row">
            <img src="../assets/Logo-Escape-room-Blanco.png" alt="" class="Lg-Escape-blanco mt-5">
        </div>
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d-responder mt-4"
                style="width:400px;">
        </div>
        <div class="row">
            <div class="mx-auto">
                <button class="btn btn-warning mx-1" @click.prevent="salidaVoluntaria()">Renuncio</button>
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
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
import NavbarParticipantes from '@/components/Navbar-Participante.vue'

export default {
    components: {
        NavbarParticipantes,
    },
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
            },
            ControlReto: {
                participanteId: 1,
                retoId: "",
                respuestaId: ''
            },
            AutenParti: [],
            escapar: false,
            postReto: {
                participanteId: "",
                retoId: ""
            },
            idSalidaVol: '',
            FinParticipante: false

        }
    },
    mounted() {
        this.ValidarLocalStorage()
    },
    methods: {
        ...mapMutations(['obternerIdParticipante']),
        ...mapActions(['guardarIdParticipante', 'leerIdParticipante', 'EliminarIdParticipante']),
        ValidarLocalStorage() {
            if (window.localStorage.participanteId == null) {
                //this.TokenParticipante = true
                this.$router.push({ path: '/login-participantes' })
            } else {
                this.$store.state.participanteId = window.localStorage.participanteId
                this.$store.state.nombreParticipante = window.localStorage.nombreParticipante
                this.TokenParticipante = false
                this.$store.state.nextReto = 've al siguiente reto'
                const mensaje =  've al siguiente reto'
                this.$store.state.nextReto = mensaje
                console.log(mensaje , this.$store.state.nextReto )
                this.traerReto()
            }
        },

        ResponderReto(id) {
            console.log(id)
            this.ControlReto.respuestaId = id
            this.ControlReto.participanteId = this.$store.state.participanteId 
            this.ControlReto.retoId = this.$store.state.IdReto
            console.log(this.ControlReto)
            this.axios.post('/GameControl/participante/respuesta', this.ControlReto)
                .then(res => {
                    console.log(res, "linea 103")
                    console.log(res.data, "linea 104")

                    if(res.data.isSuccess == true && res.data.data.respuestaRetoRetorno != null){
                        console.log( res.data.data.respuestaRetoRetornoMessage)
                        this.$store.state.nextReto = res.data.data.respuestaRetoRetornoMessage
                    }

                    if (res.data.isSuccess == true && res.data.data.finalizoEscape == true){
                        this.$store.state.nextReto = res.data.message
                        this.$store.state.finish = true 
                        this.$swal({
                            position: 'top-end',
                            icon: 'success',
                            title: ' Felicitaciones ' ,
                            text: res.data.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    if (res.data.data != null && res.data.data.bonificacion != null) {
                        this.$swal({
                            position: 'top-end',
                            icon: 'success',
                            title: ' Se ha aplicado una bonificacion de: ' + res.data.data.bonificacion,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }      
                    this.$router.push({ path: '/scan-qr' })
                    
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        //text: e.response.data.Errors[0].ErrorMessage

                    });
                })
        },
        salidaVoluntaria() {
            const participanteId = this.$store.state.participanteId
            console.log({ participanteId })
            this.$swal({
                title: '¿Esta Seguro?',
                text: "Esta accion no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, salir!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.post('/GameControl/escape-room/salidavoluntaria', { participanteId })
                        .then(res => {
                            // Agrega al inicio de nuestro array notas
                            console.log(res.data);
                            const array = []
                            array.push(res.data)
                            this.EliminarIdParticipante()
                            this.$router.push({ path: '/salida-voluntaria' })
                        })
                        .catch(e => {
                            console.log(e)
                            this.$swal({
                                position: 'toast-top-end',
                                icon: 'error',
                                title: e.response.data.Message,

                            });
                        })
                }
            })
        },
        traerReto() {
            this.postReto.participanteId = this.$store.state.participanteId
            this.postReto.retoId = this.$store.state.IdReto
            this.axios.post('/GameControl/reto', this.postReto)
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    console.log(res.data);
                    this.Retos = res.data.data
                    this.preguntaR = this.Retos.preguntaReto
                    this.respuestas = this.Retos.respuestas
                })
                .catch(e => {
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })

        },
    },
}
</script>
<style scoped>
body {
    background: rgb(185, 20, 20);
    background: linear-gradient(90deg, rgba(185, 20, 20, 1) 11%, rgba(96, 15, 150, 1) 86%);
    margin: 0;
    padding: 0;
}

.fondo {
    background: rgb(185, 20, 20);
    background: linear-gradient(90deg, rgba(185, 20, 20, 1) 11%, rgba(96, 15, 150, 1) 86%);
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

.Lg-Escape-blanco {
    width: 450px;
    margin: auto;
}

@media (width: 600px) and (width: 1200px) {
    .img-3d-responder {
        margin: auto;
        width: 150px;
    }

    .Lg-Escape-blanco {
        width: 320px;
        margin: auto;
    }
}

@media screen and (max-width: 400px) {
    .Lg-Escape-blanco {
        width: 300px;
        margin: auto;
    }

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